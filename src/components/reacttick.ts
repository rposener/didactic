import { DidactComponentBase, Observable } from "../didact/componentbase";

class ReactTickComponent extends DidactComponentBase {
    localTime: Observable<string>;
    ticker: number;
    constructor() {
        super();
        const div = document.createElement("div");
        div.innerHTML ='<h1>React Ticker</h1><h2>It is <span data-bind="text:localTime"></span>.</h2>';
        this.shadowRoot.appendChild(div);
        this.localTime = new Observable(new Date().toLocaleTimeString());
    }

    connectedCallback() : void {
        super.connectedCallback();
        this.ticker = setInterval(() => { this.localTime.value = new Date().toLocaleTimeString();}, 1000);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        clearInterval(this.ticker);
    }
}
customElements.define('react-tick', ReactTickComponent);

/** React Version
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
*/