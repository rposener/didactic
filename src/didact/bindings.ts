import { ISubscribable } from "./observable";


/**
 * bindings contains set of functions that bind
 * an element to any observable and returns a function
 * that can be called to unbind
 */
export const bindings = {
    value: (input:HTMLInputElement, observable: ISubscribable<any>) => {
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
    text: (elem: HTMLElement, observable: ISubscribable<string>) => {
        elem.innerText = observable.value;
        const updateText = () => elem.innerText = observable.value;
        observable.subscribe(updateText);
        return () => {
            observable.unsubscribe(updateText);
        }
    },
    html: (elem: HTMLElement, observable: ISubscribable<string>) => {
        elem.innerHTML = observable.value;
        const updateText = () => elem.innerHTML = observable.value;
        observable.subscribe(updateText);
        return () => {
            observable.unsubscribe(updateText);
        }
    },
    checked: (input:HTMLInputElement, observable:ISubscribable<any>) => {
        if (input.type !== "checkbox")
            throw "checked binding can only be used on checkboxes";
        // set Default
        input.checked = (observable.value) ? true : false;
        const updateInput = () => {
            if (observable.value) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        }
        const updateObs = () => observable.value = input.checked;
        observable.subscribe(updateInput);
        input.addEventListener("change", updateObs);
        return () => {
            observable.unsubscribe(updateInput);
            input.removeEventListener("change", updateObs);
        }
    },
    children: (elem: HTMLElement, observable:ISubscribable<Array<Node>>) => {
        // TODO: This could be a lot smarter and efficient
        const updateChildren = () => {
            // remove all children
            while (elem.hasChildNodes()) {
                elem.removeChild(elem.lastChild);
            }
            // add all new children in order
            observable.value.forEach((child) => {
                elem.appendChild(child);
            });
        };
        observable.subscribe(updateChildren);
        return () => {
            observable.unsubscribe(updateChildren);
        }
    },
    options:(select:HTMLSelectElement, observable:ISubscribable<Array<any>>) => {
        if (select.tagName !== "SELECT")
            throw "options binding can only be used on SELECT";
        const getValue = (val:any): string => {
            if (select.dataset["optionsId"]) {
                return val[select.dataset["optionsId"]];
            } else {
                return val;
            }
        }
        const getText = (val:any): string => {
            if (select.dataset["optionsText"]) {
                return val[select.dataset["optionsText"]];
            } else {
                return val;
            }
        }
        const updateOptions = () => {
            // remove all children
            while (select.hasChildNodes()) {
                select.removeChild(select.lastChild);
            }
            // Add selector
            if (select.dataset["optionsSelector"]) {
                select.appendChild(new Option(select.dataset["optionsSelector"], "", true, select.value === ""));
            }
            // add all children
            observable.value.forEach((val) => {
                const optValue = getValue(val);
                select.appendChild(new Option(getText(val), optValue, false, select.value === optValue));
            });
        };
        updateOptions();
        observable.subscribe(updateOptions);
    }
    /* You add more here */
};