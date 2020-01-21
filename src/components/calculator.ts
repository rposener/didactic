import { DidactComponentBase, Observable } from "../didact/componentbase";
import html from "./calculator.html";

class CalculatorComponent extends DidactComponentBase {
    currentNumber: Observable<string>;

    constructor() {
        super("calculator-template", html);
        this.currentNumber = new Observable<string>("0");
    }

    connectedCallback(): void {
        this.applyBindings();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.addEventListener("click", this.buttonClick);
    }

    disconnectedCallback(): void {
        this.removeBindings();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.removeEventListener("click", this.buttonClick);
    }

    buttonClick = (ev:Event): void => {
        const btn = ev.target as HTMLButtonElement;
        if (btn.classList.contains("calc-number")) {
            let value = parseInt(this.currentNumber.value + btn.value);
            this.currentNumber.value = value.toString();
        }
    }
}

customElements.define('didact-calculator', CalculatorComponent);