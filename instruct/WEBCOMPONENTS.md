# Using Web Components

A Web Component is created when we create a new HTML tag by writing a class that extends HTMLElement and is registered in a browser's customElement repository.  There are some rules around this that you must know.  This my take-away for you from learning the standard.

```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
    }
}
window.customElements.define('special-note',SpecialNote);
```

With that done, we can now successfully use this in HTML like this:

```html
<div>
    <special-note></special-note>
</div>
```

There are several things to note about this which are required:
1. Custom Elements always extend HTMLElement.  Yes, the class you write is part of an actual HTML Element.
1. Custom Elements must have a constructor that calls super();  super is the name given to the parent's constructor.
1. Your Custom Element must be registered with the window.customElements registry.  This is done with the define function.
    1. The first parameter is the name of tag.  It must be lowercase and include a dash.
    1. The second parameter is the class that backs your new Custom Element.

This in effect is a Web Component, but it doesn't do much yet.  Let's add some HTML to it.  There are several ways to accomplish this.  I'll give a couple examples here:

**Set innerHTML (to be parsed)**
```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<p>Hello World!</p>`;
    }
}
window.customElements.define('special-note',SpecialNote);
```

**Manually construct (this is painful way to write HTML)**
```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
        const message = document.createElement("p");
        message.innerText = "Hello World!";
        this.appendChild(message);
    }
}
window.customElements.define('special-note',SpecialNote);
```

**Use a Template (this uses separate HTML)**
```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
        const templ = document.getElementById("hello-template");
        this.appendChild(templ.content.cloneNode(true));
    }
}
window.customElements.define('special-note',SpecialNote);
```

...somewhere in an include HTML file...
```html
<template id="hello-template">
    <p>Hello World!</p>
</template>
```

Of the 3 options, the last is my favorite, as it keeps to strict HTML which is easy to use.  My examples will use that from here on, however all 3 work. 

## Shadow DOM

Now that we can create a Web Component, we should provide some encapulation.  Fortunately Web Components have that baked in.  We only have to opt-in by calling a method during the construction of our Component.  Then we use the ```shadowRoot``` property instead of ```this``` to work with the HTML for our component.  Effectively our Component now has it's own DOM tree separate from the page and any other javascript.

This is good because it isolates the HTML of our component from the entire document tree.  If another script on your page called ```document.querySelectorAll('p')``` the result will **not** include the hello world paragraph of our Web Component.

```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        const templ = document.getElementById("hello-template");
        this.shadowRoot.appendChild(templ.content.cloneNode(true));
    }
}
window.customElements.define('special-note',SpecialNote);
```

## Using Attributes of our Web Component

We can also use custom attributes on our Web Component.  We can also make those attributes observable - that means if something changes the value of the attribute, our component can respond and do something, like update itself.  Defining an attribute is just like any other HTML Element:

```html
<special-note name="Mark"></special-note>
```

which we can access using ```getAttribute()``` within our component.

```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        const templ = document.getElementById("hello-template");
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
            const aName = newValue || "World";
            this.shadowRoot.querySelector("p").innerText = `Hello ${aName}!`;
        }
    }
}
window.customElements.define('special-note',SpecialNote);
```

In this example, we now display Hello {name}! and what's more is that if you update the attribute in HTML by calling ```setAttribute()``` or even just manually changing the HTML in developer tools the paragraph will update.  That is because we have implemented observedAttributes static property and the attributeChangedCallback method.  This tells the browser to observe the attribute, and call our method if any attribute that matches is changed.

*Hopefully you're with me so far.  It's pretty cool right!  Who knew this much was just built into the modern browser?*

## Lifecycle Methods

Ok, our basic component is working pretty good, but there's more that we can do.  The Web Components standard provides us with 2 other methods that we can implement to know when our component is actually part of the displayed page, and when it isn't.  These methods are called ```connectedCallback()``` and ```disconnectedCallback()```.  It's within these that we should do the work of connecting to other application services, adding and removing event handlers and other things.  Here you can see i've wired up a click handler that will show an alert only when a button is clicked.

```js
class SpecialNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        const templ = document.getElementById("hello-template");
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
    onClick = (ev:MouseEvent) => {
        const clickedElement = ev.target;
        if (clickedElement.classList.contains("clickable")) {
            alert('button clicked!');
        }
    }
}
window.customElements.define('special-note', SpecialNote);
```

...and maybe our HTML template looks like this now...
```html
<template id="hello-template">
    <button type="button" class="clickable">Click Me</button>
    <p>Hello World!</p>
</template>
```

Great you've reached the end of the Web Components summary!  Continue with the next step and read my [Data](./DATA.md) doc.