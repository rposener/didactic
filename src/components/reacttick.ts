import { DidactComponentBase, Observable } from "../didact/componentbase";

class ReactTickComponent extends DidactComponentBase {
    localTime: Observable<string>;
    constructor() {
        super();
        this.shadowRoot.innerHTML = 
        `<div>
            <h1>Hello, world!</h1>
            <h2>It is <span data-bind="text:localTime"></span>.</h2>
        </div>`;
        this.localTime = new Observable(new Date().toLocaleTimeString());
        setInterval(() => { this.localTime.value = new Date().toLocaleTimeString();}, 1000);
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