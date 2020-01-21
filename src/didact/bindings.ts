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
    }
    /* You add more here */
};