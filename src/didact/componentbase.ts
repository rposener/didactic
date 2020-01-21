import { bindings } from "./bindings";
import { ISubscribable } from "./observable";
export { Observable, Computed } from "./observable";
export { saveLocal, saveSession, serverJson, getLocal, getSession } from "./data";

/**
 * Finds a Subscribable on an Object by inspecting it's properties
 * @param this Object to find a Property On
 * @param propName String Representation of the Property
 */
function getObservable(this:any, propName:string) : ISubscribable<any> | null {
    if (propName.indexOf("[") > 0 && propName.indexOf("]") > 0) {
        const arrProp = propName.replace(']','').split("[");
        if (arrProp.length === 2) {
            const subscribable = this[arrProp[0]][arrProp[1]];
            if (subscribable && subscribable.subscribe) {
                return subscribable as ISubscribable<any>;
            }
        }
    }
    if (this[propName] && this[propName].subscribe) {
        return this[propName] as ISubscribable<any>;
    }
    return null;
}

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
                const binder = bindings[binderType];
                const obs = getObservable.call(this, propName);
                if (!binder) {
                    console.warn(`The binding [${binding}] could not be added. There is not such binding type.`);
                }
                if (!obs) {
                    console.warn(`The binding [${binding}] could not be added. There is not such binding type.`);
                }
                if (binder && obs) {
                    this.activeBindings.push(binder(elem, obs));
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