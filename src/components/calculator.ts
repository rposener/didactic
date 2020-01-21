import { DidactComponentBase } from "../didact/componentbase";
import html from "./calculator.html";

class CalculatorComponent extends DidactComponentBase {
    constructor() {
        super("calculator-template", html);
    }

}

customElements.define('didact-calculator', CalculatorComponent);