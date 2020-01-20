class SpecialNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const templ = document.getElementById("hello-template") as HTMLTemplateElement;
        this.shadowRoot.appendChild(templ.content.cloneNode(true));
        const aName = this.getAttribute('name') || "World";
        this.shadowRoot.querySelector("p").innerText = `Hello ${aName}!`;
    }

    /**
     * Note that this is a static member of the Class not the instance.
     */
    static get observedAttributes() {
        return ['name'];
    }

    /**
     * Note that this is a class member (not static)
     * @param name the name of the attribute changed
     * @param oldValue the prior value
     * @param newValue the new value
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.shadowRoot.querySelector("p").innerText = `Hello ${newValue}!`;
        }
    }

    /**
     * This Method is fired once the component is attached to our DOM
     */
    connectedCallback() {
        this.shadowRoot.addEventListener('click', this.onClick);
    }

    /**
     * This method is fired once the component is removed from our DOM
     */
    disconnectedCallback() {
        this.shadowRoot.removeEventListener('click', this.onClick)
    }

    /**
     * Our Mouse Click Event Handler.  Notice I used an arrow function 
     * to make sure 'this' remains our component.
     */
    onClick = (ev: MouseEvent) => {
        const clickedElement = ev.target as HTMLElement;
        if (clickedElement.classList.contains("clickable")) {
            alert('button clicked!');
        }
    }
}
window.customElements.define('special-note', SpecialNote);


function getFrom(store, name, defaultValue) {
    const json = store.getItem(name);
    if (json === null) {
        return defaultValue;
    } else {
        return JSON.parse(json);
    }
}
function saveTo<T>(store, name, value) {
    if (typeof value !== 'undefined' && value !== null) {
        const json = JSON.stringify(value);
        store.setItem(name, json);
    } else {
        store.removeItem(name);
    }
}

/**
 * Returns an Item from Session Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided if not provided returns null
 * @returns Promise that resolves to the Item, or null if not found
 */
const getSession = (name, defaultValue) => getFrom(sessionStorage, name, defaultValue);

/**
 * Saves an Item into Session Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns Promise that returns the currently stored value
 */
const saveSession = (name, value) => saveTo(sessionStorage, name, value);

/**
 * Returns an Item from Local Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided returns null
 * @returns Promise that resolves to the Item, or null if not found
 */
const getLocal = (name, defaultValue) => getFrom(localStorage, name, defaultValue);

/**
 * Saves an Item into Local Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns Promise that returns the currently stored value
 */
const saveLocal = (name, value) => saveTo(localStorage, name, value);

/**
 * Helper to Execute Promise and inspect the response Code
 * @param request the Request to send (e.g. new Request('url'))
 * @returns Promise that resolves with data. Rejects if not data
 */
function serverJson(request) {
    return new Promise((resolve, reject) => {
        fetch(request)
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    response.json()
                        .then((value) => resolve(value))
                        .catch((err) => reject(err));
                } else if (response.status >= 400 && response.status < 500) {
                    response.text()
                        .then((msg) => reject(msg))
                        .catch((err) => reject(err));
                } else {
                    reject(`${response.status} - ${response.statusText}`);
                }
            })
            .catch((reason) => reject(reason));
    });
}

/**
 * Class that lets us observe a value for changes
 */
class Observable {

    /**
     * Creates an Observable
     * @param value default value
     */
    constructor(value) {
        this._listeners = [];
        this._value = value;
    }

    notify() {
        this._listeners.forEach(listener => listener(this._value));
    }

    /**
     * Adds a Subscriber
     * @param listener function that gets called whenever the value changes
     */
    subscribe(listener) {
        this._listeners.push(listener);
    }

    /**
     * Removes a Subscriber
     * @param listener function that should not be called any longer when the value updates
     */
    unsubscribe(listener) {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }

    /**
     * Gets the value of the Observable
     */
    get value() {
        return this._value;
    }

    /**
     * Sets the value of the Observable
     * Notifying any Subscriber if the value is new
     */
    set value(val) {
        if (val !== this._value) {
            this._value = val;
            this.notify();
        }
    }
}

/**
 * Class that allows composition of a value based upon observing other changes
 */
class Computed extends Observable {

    /**
     * Creates a New Computed Value
     * @param value Function the results in the Value
     * @param deps Observables that trigger this Computed to Update
     */
    constructor(value, deps) {
        super(value());
        const listener = () => {
            this._value = value();
            this.notify();
        }
        deps.forEach(dep => dep.subscribe(listener));
    }

    /**
     * Gets the Computed Result
     */
    get value() {
        return this._value;
    }

    /**
     * Not possible to set value of Computed
     */
    set value(_) {
        throw "Cannot set computed property";
    }
}

/**
 * binders contains set of functions that bind
 * an element to any observable and returns a function
 * that can be called to unbind
 */
const binders = {
    value: (input, observable) => {
        input.value = observable.value;
        const updateInput = () => input.value = observable.value;
        const updateObs = () => observable.value = input.value;
        observable.subscribe(updateInput);
        input.addEventListener("keyup", updateObs);
        input.addEventListener("blur", updateObs);
        input.addEventListener("input", updateObs);
        return () => {
            observable.unsubscribe(updateInput);
            input.removeEventListener("keyup", updateObs);
            input.removeEventListener("blur", updateObs);
            input.removeEventListener("input", updateObs);
        }
    },
    text: (elem, observable) => {
        elem.innerText = observable.value;
        const updateText = () => elem.innerText = observable.value;
        observable.subscribe(updateText);
        return () => {
            observable.unsubscribe(updateText);
        }
    },
    html: (elem, observable) => {
        elem.innerHTML = observable.value;
        const updateText = () => elem.innerHTML = observable.value;
        observable.subscribe(updateText);
        return () => {
            observable.unsubscribe(updateText);
        }
    }
};

/**
 * applies binding logic to all elements 
 * with a data-bind attribute
 */
const activeBindings = [];
const applyBindings = () => {
	document.querySelectorAll("[data-bind]").forEach(elem => {
        const el = elem as HTMLElement;
        const bindList = el.dataset["bind"].split(',');
        bindList.map((binding) => {
            const [binderType, propName] = binding.split(':');
            activeBindings.push(binders[binderType](elem, this[propName]));
        });
  });
};
const removeBindings = () => {
    (activeBindings).forEach(removeBinding => removeBinding());
    activeBindings.splice(0, activeBindings.length);
}