import { DidactComponentBase} from "../didact/componentbase";

class HelloWorld extends DidactComponentBase {
    constructor() {
        super();
        const hi = document.createElement("p");
        hi.innerText = "Hello World";
        this.shadowRoot.appendChild(hi);
    }
}

customElements.define('hello-world', HelloWorld);