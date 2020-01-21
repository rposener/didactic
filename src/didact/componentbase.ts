import { bindings } from "./bindings";
export { Observable, Computed, ISubscribable } from "./observable";
export { saveLocal, saveSession, serverJson, getLocal, getSession } from "./data";

export abstract class DidactComponentBase extends HTMLElement {
    private activeBindings: Array<() => void>;

    /**
     * Constructs a Didact Component
     * @param templateId the Template ID for the Component
     * @param html the HTML including the template tag
     */
    constructor(templateId?: string, html?: string) {
        super();
        this.activeBindings = [];
        this.attachShadow({mode:'open'});
        if (templateId) {
            let templ = document.getElementById(templateId) as HTMLTemplateElement;
            if (!templ && html) {
                document.body.insertAdjacentHTML("beforeend", html);
            }
            templ = document.getElementById(templateId) as HTMLTemplateElement;
            if (!templ) {
                console.warn(`Could not find a <template> with id="${templateId}" `);
                throw 'Component is Missing Template';
            }
            this.shadowRoot?.appendChild(templ.content.cloneNode(true));
        }
    }

    /**
     * applies binding logic to all elements 
     * with a data-bind attribute
     */
    applyBindings = () => {
        this.shadowRoot?.querySelectorAll("[data-bind]").forEach(elem => {
            const bindList = elem.getAttribute("data-bind")?.split(',');
            bindList?.forEach((binding) => {
                const [binderType, propName] = binding.split(':');
                if (propName.indexOf("[") > 0 && propName.indexOf("]") > 0) {
                    const arrProp = propName.replace(']','').split("[");
                    if (arrProp.length === 2) {
                        const subscribable = this[arrProp[0]][arrProp[1]];
                        if (subscribable && subscribable.subscribe) {
                            this.activeBindings.push(bindings[binderType](elem, subscribable));
                        } else {
                            console.warn(`The binding [${binding}] could not be added. No observable found in the array.`);
                        }
                    }
                    return; 
                }
                if (!this[propName] || !this[propName].subscribe) {
                    console.warn(`The binding [${binding}] could not be added. There is not such observable property.`);
                }
                else if (binderType in bindings) {
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