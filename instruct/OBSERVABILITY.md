# Observability and Declarative Binding

There are a couple different ways that we can make HTML have behavior.  It really boils down to 2 things:
*  Wiring up Event Handlers (to respond to user input)
*  Updating the DOM in some way (to make the page respond)

First, let me speak to the 2 different types of programming that we see in Javascript. 

> **Declarative** means that we declare what goes where.  It's focused on the results, not the means.

> **Imperative** by contrast is focused on how we do things.  It's not very focused on the result, only the means.

Now, let me give a couple examples so that we can see the difference.  When updating the DOM, we could accomplish this in 2 different ways:

**Imperative update in Javascript**
```js
    const nameInput = document.getElementById("your-name-input");
    const paragraph = document.getElementById("my-hello-para");
    paragraph.innerText = `Hello ${nameInput.value}!`;
```

**Declarative in HTML**
```html
    <p>Hello {name}!</p>
```

The declarative syntax is much more expressive, simpler and easier to understand, but it doesn't work natively.

*You might be thinking "Yeah, but how do we get declarative?"*  

This it turns out is much simpler than you think.  This simply requires Observability and a couple helper methods.  Jeremy Likness recent wrote a [great article](https://blog.jeremylikness.com/blog/client-side-javascript-databinding-without-a-framework/) about how to create this very simply.  his approach is very similar to what [knockout.js](https://knockoutjs.com) has been doing for over a decade.

Here's the code I've adapted from Jeremy's article:
```js

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
     * @param listener function that should not be called when the value updates
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
```

Then finally we need a couple helper methods to wire up the bindings automatically.  As Jeremy did, it's easy enough to do this with data-bind attributes where we can automatically bind to all elements in our Component using these easy methods.

```js
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
/**
 * removes all active bindings
 */
const removeBindings = () => {
    (activeBindings).forEach(removeBinding => removeBinding());
    activeBindings.splice(0, activeBindings.length);
}
```

This provides us with a simple observability pattern that we can use to map to declarative markup and unbind when we no longer need the markup.  Keep reading, and we will add the ```applyBindings``` and ```removeBindings``` into our component's ```connectedCallback``` and ```disconnectedCallback`` respectively.

With this final bit, we are ready to start to [Make an App](./MAKEANAPP.md) so keep reading!