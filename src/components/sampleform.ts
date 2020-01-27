import { DidactComponentBase, Observable } from "../didact/componentbase";
import html from "./sampleform.html";

class SampleFormComponent extends DidactComponentBase {
    year: Observable<string>;
    make: Observable<string>;
    color: Observable<string>;
    county: Observable<string>;
    purchaseDate: Observable<string>;
    deliveryDate: Observable<string>;

    makes: Observable<Array<any>>;
    colors: Observable<Array<string>>;

    static get observedAttributes(): string[] {
        return ["formtitle"];
    }

    constructor() {
        super("sample-form-template", html);
        this.year = new Observable(new Date().getFullYear().toString());
        this.make = new Observable("");
        this.color = new Observable("Silver");
        this.county = new Observable("");
        this.purchaseDate = new Observable(new Date().toISOString().substr(0,10));
        this.deliveryDate = new Observable(new Date().toISOString().substr(0,10));

        this.makes = new Observable([
            {id:"TOY", manufacturer:"Toyota"},
            {id:"FORD", manufacturer:"Ford Motor Corp."},
            {id:"GM", manufacturer:"General Motors"},
            {id:"BUICK", manufacturer:"Buick"},
            {id:"HONDA", manufacturer:"Honda"}
        ].sort((l,r) => l.manufacturer.localeCompare(r.manufacturer)));

        this.colors = new Observable(["Red","Blue","Black", "Silver","Beige","Green", "Orange", "Yellow"]);
    }

    connectedCallback(): void {
        this.applyBindings();
        const form = this.shadowRoot.querySelector("form");
        if (form) {
            form.addEventListener("submit", this.submitForm);
        }
    }

    submitForm = (ev: Event) : void => {
        ev.preventDefault();
        const data = {
            year: this.year.value,
            make: this.make.value,
            color: this.color.value,
            county: this.county.value,
            purchaseDate: this.purchaseDate.value,
            deliveryDate: this.deliveryDate.value
        };
        // Dispatch a custom Event for a parent Component (or in this case the page) to handle
        // composed must be true in order for this to available outside our component
        // I also set bubbles to true so that the event will go all the way to document root
        this.dispatchEvent(new CustomEvent("vehicleregistered", { detail:data }));
        // Check the index.html for the listener for this event
    }

    disconnectedCallback(): void {
        this.removeBindings();
        const form = this.shadowRoot.querySelector("form");
        if (form) {
            form.removeEventListener("submit", this.submitForm);
        }
    }

    attributeChangedCallback(name:string, oldValue:string, newValue:string): void {
        switch(name) {
            case "formtitle":
                this.updateFormTitle(newValue);
                break;
        }
    }

    updateFormTitle(title:string): void {
        const formTitle = this.shadowRoot.querySelector("#formTitle") as HTMLHeadingElement;
        if (formTitle) {
            formTitle.innerText = title;
        }
    }
}

customElements.define("sample-form", SampleFormComponent);