import { bindings } from "./bindings";
export { Observable, Computed, ISubscribable } from "./observable";
export { saveLocal, saveSession, serverJson, getLocal, getSession } from "./data";

export abstract class DidactComponentBase extends HTMLElement {
    private activeBindings: Array<() => void>;
    constructor(templateId?: string) {
        super();
        this.activeBindings = [];
        this.attachShadow({mode:'open'});
        if (templateId) {
            const templ = document.getElementById(templateId) as HTMLTemplateElement;
            this.shadowRoot?.appendChild(templ.content.cloneNode(true));
        }
    }

    /**
     * applies binding logic to all elements 
     * with a data-bind attribute
     */
    applyBindings = () => {
        document.querySelectorAll("[data-bind]").forEach(elem => {
            const bindList = elem.getAttribute("data-bind")?.split(',');
            bindList?.forEach((binding) => {
                const [binderType, propName] = binding.split(':');
                if (binderType in bindings) {
                    this.activeBindings.push(bindings[binderType](elem, this[propName]));
                } else {
                    console.warn(`The binding [${binding}] could not be added. There is not such binding type.`);
                    return;
                }
            });
        });
    }

    /**
     * removes binding logic from all elements 
     */
    removeBindings = () => {
        (this.activeBindings).forEach(removeBinding => removeBinding());
        this.activeBindings = [];
    }
}