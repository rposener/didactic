import { DidactComponentBase, Observable, getSession, saveSession } from "../didact/componentbase";
import html from "./calculator.html";

const CALC_EQUATION = "DIDACT.CALC.EQUATION";

class CalculatorComponent extends DidactComponentBase {
    /** Display of the Equation */
    calcEquation: Observable<string>;
    /** Display of the Input */
    calcEntry: Observable<string>;
    /** Should the Equation be cleared on next Button Press */
    clearEquationOnNext: boolean;

    constructor() {
        super("calculator-template", html);
        this.calcEquation = new Observable<string>(getSession(CALC_EQUATION,""));
        this.calcEquation.subscribe((val) => saveSession(CALC_EQUATION,val));
        this.calcEntry = new Observable<string>("0");
        this.clearEquationOnNext = true;
    }

    connectedCallback(): void {
        super.connectedCallback();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.addEventListener("click", this.buttonClick);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.removeEventListener("click", this.buttonClick);
    }

    buttonClick = (ev: Event): void => {
        if (this.clearEquationOnNext) {
            this.calcEquation.value = "";
            this.clearEquationOnNext = false;
        }
        const btn = ev.target as HTMLButtonElement;
        if (btn.classList.contains("calc-number")) {
            let value = parseFloat(this.calcEntry.value + btn.value);
            this.calcEntry.value = value.toString();
        } else if (btn.classList.contains("calc-negate")) {
            let value = parseFloat(this.calcEntry.value) * -1;
            this.calcEntry.value = value.toString();
        } else if (btn.classList.contains("calc-decimal")) {
            this.calcEntry.value = this.calcEntry.value + ".";
        } else if (btn.classList.contains("calc-divide")) {
            let value = parseFloat(this.calcEntry.value);
            this.calcEquation.value = this.calcEquation.value + " " + value + " /";
            this.calcEntry.value = "0";
        } else if (btn.classList.contains("calc-multiply")) {
            let value = parseFloat(this.calcEntry.value);
            this.calcEquation.value = this.calcEquation.value + " " + value + " *";
            this.calcEntry.value = "0";
        } else if (btn.classList.contains("calc-minus")) {
            let value = parseFloat(this.calcEntry.value);
            this.calcEquation.value = this.calcEquation.value + " " + value + " -";
            this.calcEntry.value = "0";
        } else if (btn.classList.contains("calc-plus")) {
            let value = parseFloat(this.calcEntry.value);
            this.calcEquation.value = this.calcEquation.value + " " + value + " +";
            this.calcEntry.value = "0";
        } else if (btn.classList.contains("calc-execute")) {
            let value = parseFloat(this.calcEntry.value);
            const equation = this.calcEquation.value + " " + value;
            const ttl = this.evaluateEquation(equation);
            this.calcEquation.value = equation + " = " + ttl;
            this.calcEntry.value = "0";
            this.clearEquationOnNext = true;
        }
    }

    private evaluateEquation(equation: string): number {
        const eqParts = equation.trim().split(' ');
        let ttl = parseFloat(eqParts[0]);
        for (let x = 1; x < eqParts.length; x += 2) {
            const val = parseFloat(eqParts[x + 1]);
            const op = eqParts[x];
            switch (op) {
                case "+":
                    ttl += val;
                    break;
                case "-":
                    ttl -= val;
                    break;
                case "*":
                    ttl *= val;
                    break;
                case "/":
                    ttl /= val;
                    break;
            }
        }
        return ttl;
    }
}

customElements.define('didact-calculator', CalculatorComponent);