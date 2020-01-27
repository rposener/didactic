/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helloworld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/helloworld */ "./src/components/helloworld.ts");
/* harmony import */ var _components_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/calculator */ "./src/components/calculator.ts");
/* harmony import */ var _components_tictactoe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tictactoe */ "./src/components/tictactoe.ts");
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo */ "./src/components/todo.ts");
/* harmony import */ var _components_sampleform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sampleform */ "./src/components/sampleform.ts");
/* harmony import */ var _components_reacttick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reacttick */ "./src/components/reacttick.ts");








/***/ }),

/***/ "./src/components/calculator.html":
/*!****************************************!*\
  !*** ./src/components/calculator.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"calculator-template\">\r\n    <style>\r\n        .calc-container {\r\n            height: 100%;\r\n            width: 100%;\r\n            display:grid;\r\n            font-family: sans-serif;\r\n            font-size:3em;\r\n            grid-template-columns: 1fr;\r\n            grid-template-rows: 0.7em 1.5em 4fr;\r\n            min-height: 500px;\r\n            min-width: 400px;\r\n        }\r\n        .calc-equation {\r\n            background-color: #333;\r\n            color: #eee;\r\n            grid-row: 1;\r\n            font-size: 0.5em;\r\n            text-align: right;\r\n        }\r\n        .calc-result {\r\n            background-color: #111;\r\n            color: #fff;\r\n            grid-row: 2;\r\n            font-size: 1.2em;\r\n            text-align: right;\r\n        }\r\n        .calc-buttons {\r\n            grid-row: 3;\r\n            display:grid;\r\n            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n            grid-template-rows: 1fr 1fr 1fr 1fr;\r\n        }\r\n        button {\r\n            font-size: 1em;\r\n        }\r\n        .calc-number:nth-child(1) {\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(2) {\r\n            grid-row: 1;\r\n            grid-column: 2;\r\n        }\r\n        .calc-number:nth-child(3) {\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .calc-number:nth-child(4) {\r\n            grid-row: 2;\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(5) {\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .calc-number:nth-child(6) {\r\n            grid-row: 2;\r\n            grid-column: 1;\r\n        }\r\n        .calc-number:nth-child(7) {\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(8) {\r\n            grid-row: 3;\r\n            grid-column: 2;\r\n        }\r\n        .calc-number:nth-child(9) {\r\n            grid-row: 3;\r\n            grid-column: 1;\r\n        }\r\n        .calc-decimal {\r\n            grid-row: 4;\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(10) {\r\n            grid-row: 4;\r\n            grid-column: 2;\r\n        }\r\n        .calc-negate {\r\n            grid-row: 4;\r\n            grid-column: 1;\r\n        }\r\n        .calc-execute {\r\n            grid-row: 1 / 5;\r\n            grid-column: 5;\r\n        }\r\n    </style>\r\n<div class=\"calc-container\">\r\n    <div class=\"calc-equation\" data-bind=\"text:calcEquation\"></div>\r\n    <div class=\"calc-result\" data-bind=\"text:calcEntry\">0</div>\r\n    <div class=\"calc-buttons\">\r\n        <button class=\"calc-number\" value=\"9\" type=\"button\">9</button>\r\n        <button class=\"calc-number\" value=\"8\" type=\"button\">8</button>\r\n        <button class=\"calc-number\" value=\"7\" type=\"button\">7</button>\r\n        <button class=\"calc-number\" value=\"6\" type=\"button\">6</button>\r\n        <button class=\"calc-number\" value=\"5\" type=\"button\">5</button>\r\n        <button class=\"calc-number\" value=\"4\" type=\"button\">4</button>\r\n        <button class=\"calc-number\" value=\"3\" type=\"button\">3</button>\r\n        <button class=\"calc-number\" value=\"2\" type=\"button\">2</button>\r\n        <button class=\"calc-number\" value=\"1\" type=\"button\">1</button>\r\n        <button class=\"calc-number\" value=\"0\" type=\"button\">0</button>\r\n        <button class=\"calc-negate\" type=\"button\">+/-</button>\r\n        <button class=\"calc-decimal\" type=\"button\">.</button>\r\n        <button class=\"calc-divide\" type=\"button\">&#247;</button>\r\n        <button class=\"calc-multiply\" type=\"button\">&#215;</button>\r\n        <button class=\"calc-minus\" type=\"button\">&#8722;</button>\r\n        <button class=\"calc-plus\" type=\"button\">&#43;</button>\r\n        <button class=\"calc-execute\" type=\"button\">&#61;</button>\r\n    </div>\r\n</div>\r\n</template>";

/***/ }),

/***/ "./src/components/calculator.ts":
/*!**************************************!*\
  !*** ./src/components/calculator.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../didact/componentbase */ "./src/didact/componentbase.ts");
/* harmony import */ var _calculator_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.html */ "./src/components/calculator.html");
/* harmony import */ var _calculator_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_calculator_html__WEBPACK_IMPORTED_MODULE_1__);


const CALC_EQUATION = "DIDACT.CALC.EQUATION";
class CalculatorComponent extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor() {
        super("calculator-template", _calculator_html__WEBPACK_IMPORTED_MODULE_1___default.a);
        this.buttonClick = (ev) => {
            if (this.clearEquationOnNext) {
                this.calcEquation.value = "";
                this.clearEquationOnNext = false;
            }
            const btn = ev.target;
            if (btn.classList.contains("calc-number")) {
                let value = parseFloat(this.calcEntry.value + btn.value);
                this.calcEntry.value = value.toString();
            }
            else if (btn.classList.contains("calc-negate")) {
                let value = parseFloat(this.calcEntry.value) * -1;
                this.calcEntry.value = value.toString();
            }
            else if (btn.classList.contains("calc-decimal")) {
                this.calcEntry.value = this.calcEntry.value + ".";
            }
            else if (btn.classList.contains("calc-divide")) {
                let value = parseFloat(this.calcEntry.value);
                this.calcEquation.value = this.calcEquation.value + " " + value + " /";
                this.calcEntry.value = "0";
            }
            else if (btn.classList.contains("calc-multiply")) {
                let value = parseFloat(this.calcEntry.value);
                this.calcEquation.value = this.calcEquation.value + " " + value + " *";
                this.calcEntry.value = "0";
            }
            else if (btn.classList.contains("calc-minus")) {
                let value = parseFloat(this.calcEntry.value);
                this.calcEquation.value = this.calcEquation.value + " " + value + " -";
                this.calcEntry.value = "0";
            }
            else if (btn.classList.contains("calc-plus")) {
                let value = parseFloat(this.calcEntry.value);
                this.calcEquation.value = this.calcEquation.value + " " + value + " +";
                this.calcEntry.value = "0";
            }
            else if (btn.classList.contains("calc-execute")) {
                let value = parseFloat(this.calcEntry.value);
                const equation = this.calcEquation.value + " " + value;
                const ttl = this.evaluateEquation(equation);
                this.calcEquation.value = equation + " = " + ttl;
                this.calcEntry.value = "0";
                this.clearEquationOnNext = true;
            }
        };
        this.calcEquation = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["getSession"])(CALC_EQUATION, ""));
        this.calcEquation.subscribe((val) => Object(_didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["saveSession"])(CALC_EQUATION, val));
        this.calcEntry = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("0");
        this.clearEquationOnNext = true;
    }
    connectedCallback() {
        super.connectedCallback();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.addEventListener("click", this.buttonClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.removeEventListener("click", this.buttonClick);
    }
    evaluateEquation(equation) {
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


/***/ }),

/***/ "./src/components/helloworld.ts":
/*!**************************************!*\
  !*** ./src/components/helloworld.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../didact/componentbase */ "./src/didact/componentbase.ts");

class HelloWorld extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor() {
        super();
        const hi = document.createElement("p");
        hi.innerText = "Hello World";
        this.shadowRoot.appendChild(hi);
    }
}
customElements.define('hello-world', HelloWorld);


/***/ }),

/***/ "./src/components/reacttick.ts":
/*!*************************************!*\
  !*** ./src/components/reacttick.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../didact/componentbase */ "./src/didact/componentbase.ts");

class ReactTickComponent extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor() {
        super();
        this.shadowRoot.innerHTML =
            `<div>
            <h1>Hello, world!</h1>
            <h2>It is <span data-bind="text:localTime"></span>.</h2>
        </div>`;
        this.localTime = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](new Date().toLocaleTimeString());
        setInterval(() => { this.localTime.value = new Date().toLocaleTimeString(); }, 1000);
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


/***/ }),

/***/ "./src/components/sampleform.html":
/*!****************************************!*\
  !*** ./src/components/sampleform.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"sample-form-template\">\r\n    <style>\r\n        input:invalid,select:invalid {\r\n            background-color: rgb(156, 3, 3);\r\n            color: #fff;\r\n        }\r\n        .form-field:invalid > label {\r\n            color:rgb(156,3,3);\r\n        }\r\n        .form-field{\r\n            display: flex;\r\n            flex-wrap: nowrap;\r\n        }\r\n        .form-field:nth-child(1) {\r\n            flex: 0.4fr;\r\n        }\r\n        .form-field:nth-child(1) {\r\n            flex: 0.6fr;\r\n        }\r\n        .form-footer {\r\n            text-align: right;\r\n        }\r\n        .btn-reset {\r\n            background-color: darkred;\r\n            color: #fff;\r\n        }\r\n        .btn-submit {\r\n            background-color: darkgreen;\r\n            color: #fff;\r\n        }\r\n    </style>\r\n    <form>\r\n        <h2 id=\"formTitle\"></h2>\r\n        <fieldset>\r\n            <legend>Vehicle Details</legend>\r\n            <div class=\"form-field\">\r\n                <label>Vehicle Year</label>\r\n                <input min=\"1920\" max=\"2021\" type=\"number\" step=\"1\" data-bind=\"value:year\">\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label>Vehicle Make</label>\r\n                <select required data-bind=\"options:makes,value:make\" data-options-id=\"id\" data-options-text=\"manufacturer\" data-options-selector=\"- Please Select a Manufacturer -\"></select>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label>Vehicle Color</label>\r\n                <select data-bind=\"options:colors,value:color\"></select>\r\n            </div>\r\n        </fieldset>\r\n        <fieldset>\r\n            <legend>Purchase Details</legend>\r\n            <div class=\"form-field\">\r\n                <label>County</label>\r\n                <input required type=\"text\" data-bind=\"value:county\">\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label>Purchase Date</label>\r\n                <input type=\"text\" class=\"date-picker\" data-bind=\"value:purchaseDate\">\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label>Delivery Date</label>\r\n                <input required type=\"date\" data-bind=\"value:deliveryDate\">\r\n            </div>\r\n        </fieldset>\r\n        <div class=\"form-footer\">\r\n            <button class=\"btn-reset\" type=\"reset\">Clear Form</button>\r\n            <button class=\"btn-submit\" type=\"submit\">Submit Form</button>\r\n        </div>\r\n    </form>\r\n</template>";

/***/ }),

/***/ "./src/components/sampleform.ts":
/*!**************************************!*\
  !*** ./src/components/sampleform.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../didact/componentbase */ "./src/didact/componentbase.ts");
/* harmony import */ var _sampleform_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sampleform.html */ "./src/components/sampleform.html");
/* harmony import */ var _sampleform_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sampleform_html__WEBPACK_IMPORTED_MODULE_1__);


class SampleFormComponent extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor() {
        super("sample-form-template", _sampleform_html__WEBPACK_IMPORTED_MODULE_1___default.a);
        this.submitForm = (ev) => {
            ev.preventDefault();
            const data = {
                year: this.year.value,
                make: this.make.value,
                color: this.color.value,
                county: this.county.value,
                purchaseDate: this.purchaseDate.value,
                deliveryDate: this.deliveryDate.value
            };
            // Dispatch a custom Event for a parent Component (or in this case the page) to handle
            // composed must be true in order for this to available outside our component
            // I also set bubbles to true so that the event will go all the way to document root
            this.dispatchEvent(new CustomEvent("vehicleregistered", { detail: data }));
            // Check the index.html for the listener for this event
        };
        this.year = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](new Date().getFullYear().toString());
        this.make = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("");
        this.color = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("Silver");
        this.county = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("");
        this.purchaseDate = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](new Date().toISOString().substr(0, 10));
        this.deliveryDate = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](new Date().toISOString().substr(0, 10));
        this.makes = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]([
            { id: "TOY", manufacturer: "Toyota" },
            { id: "FORD", manufacturer: "Ford Motor Corp." },
            { id: "GM", manufacturer: "General Motors" },
            { id: "BUICK", manufacturer: "Buick" },
            { id: "HONDA", manufacturer: "Honda" }
        ].sort((l, r) => l.manufacturer.localeCompare(r.manufacturer)));
        this.colors = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](["Red", "Blue", "Black", "Silver", "Beige", "Green", "Orange", "Yellow"]);
    }
    static get observedAttributes() {
        return ["formtitle"];
    }
    connectedCallback() {
        this.applyBindings();
        const form = this.shadowRoot.querySelector("form");
        if (form) {
            form.addEventListener("submit", this.submitForm);
        }
    }
    disconnectedCallback() {
        this.removeBindings();
        const form = this.shadowRoot.querySelector("form");
        if (form) {
            form.removeEventListener("submit", this.submitForm);
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "formtitle":
                this.updateFormTitle(newValue);
                break;
        }
    }
    updateFormTitle(title) {
        const formTitle = this.shadowRoot.querySelector("#formTitle");
        if (formTitle) {
            formTitle.innerText = title;
        }
    }
}
customElements.define("sample-form", SampleFormComponent);


/***/ }),

/***/ "./src/components/tictactoe.html":
/*!***************************************!*\
  !*** ./src/components/tictactoe.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"tictactoe-template\">\r\n    <style>\r\n        .ttt-game {\r\n            height: 100%;\r\n            width: 100%;\r\n            display: grid;\r\n            grid-template-rows: 2em 1fr;\r\n            grid-template-columns: 1fr 0.25fr;\r\n            min-height: 250px;\r\n            min-width: 200px;\r\n        }\r\n        .ttt-message {\r\n            background-color: #333;\r\n            color:yellowgreen;\r\n            font-weight: 1.2em;\r\n            line-height: 2em;\r\n            font-family:Georgia, 'Times New Roman', Times, serif;\r\n            text-align: center;\r\n            vertical-align:middle;\r\n        }\r\n        .resetGame {\r\n            grid-column: 2;\r\n        }\r\n        .ttt-board {\r\n            display: grid;\r\n            grid-column: 1 /3;\r\n            grid-template-columns: 1fr 1fr 1fr;\r\n            grid-template-rows: 1fr 1fr 1fr;\r\n        }\r\n        .gameCell {\r\n            font-size: 2em;\r\n            font-family:sans-serif;\r\n        }\r\n        .gameCell:nth-child(1){\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .gameCell:nth-child(2){\r\n            grid-row: 1;\r\n            grid-column: 2;\r\n        }\r\n        .gameCell:nth-child(3){\r\n            grid-row: 1;\r\n            grid-column: 3;\r\n        }\r\n        .gameCell:nth-child(4){\r\n            grid-row: 2;\r\n            grid-column: 1;\r\n        }\r\n        .gameCell:nth-child(5){\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .gameCell:nth-child(6){\r\n            grid-row: 2;\r\n            grid-column: 3;\r\n        }\r\n        .gameCell:nth-child(7){\r\n            grid-row: 3;\r\n            grid-column: 1;\r\n        }\r\n        .gameCell:nth-child(8){\r\n            grid-row: 3;\r\n            grid-column: 2;\r\n        }\r\n        .gameCell:nth-child(9){\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n    </style>\r\n    <div class=\"ttt-game\">\r\n        <div class=\"ttt-message\" data-bind=\"text:message\"></div>\r\n        <button type=\"button\" class=\"resetGame\">Reset</button>\r\n        <div class=\"ttt-board\">\r\n            <button type=\"button\" class=\"gameCell\" value=\"0\" data-bind=\"text:cells[0]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"1\" data-bind=\"text:cells[1]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"2\" data-bind=\"text:cells[2]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"3\" data-bind=\"text:cells[3]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"4\" data-bind=\"text:cells[4]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"5\" data-bind=\"text:cells[5]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"6\" data-bind=\"text:cells[6]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"7\" data-bind=\"text:cells[7]\"></button>\r\n            <button type=\"button\" class=\"gameCell\" value=\"8\" data-bind=\"text:cells[8]\"></button>\r\n        </div>\r\n    </div>\r\n</template>";

/***/ }),

/***/ "./src/components/tictactoe.ts":
/*!*************************************!*\
  !*** ./src/components/tictactoe.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../didact/componentbase */ "./src/didact/componentbase.ts");
/* harmony import */ var _tictactoe_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tictactoe.html */ "./src/components/tictactoe.html");
/* harmony import */ var _tictactoe_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tictactoe_html__WEBPACK_IMPORTED_MODULE_1__);


class TicTacToeGame extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor() {
        super("tictactoe-template", _tictactoe_html__WEBPACK_IMPORTED_MODULE_1___default.a);
        this.userPicked = (ev) => {
            const btn = ev.target;
            if (btn.classList.contains("gameCell")) {
                this.cells[btn.value].value = this.currentPlayer.value;
                if (this.currentPlayer.value === "X") {
                    this.currentPlayer.value = "O";
                }
                else {
                    this.currentPlayer.value = "X";
                }
            }
            this.checkForWins();
        };
        this.resetGame = (ev) => {
            this.cells.forEach((cell) => {
                cell.value = "";
            });
            this.currentPlayer.value = "X";
        };
        this.currentPlayer = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("X");
        this.message = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Computed"](() => `${this.currentPlayer.value}'s Turn!`, [this.currentPlayer]);
        this.cells = [];
        for (let c = 0; c < 9; c++) {
            this.cells.push(new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](""));
        }
    }
    connectedCallback() {
        var _a, _b;
        const board = this.shadowRoot.querySelector(".ttt-board");
        (_a = board) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.userPicked);
        const resetButton = this.shadowRoot.querySelector(".resetGame");
        (_b = resetButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.resetGame);
        this.applyBindings();
    }
    checkForWins() {
        /**
         * Winning Combos are 1,2,3|4,5,6|7,8,9|1,5,9|3,5,7|1,4,7|2,5,8|3,6,9
         */
        const wins = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 5, 9],
            [3, 5, 7],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];
        let winner;
        wins.forEach((combo) => {
            const a = this.cells[combo[0] - 1].value;
            const b = this.cells[combo[1] - 1].value;
            const c = this.cells[combo[2] - 1].value;
            if (a && b && c && a == b && b == c) {
                winner = a;
            }
        });
        if (winner) {
            setTimeout(function () {
                alert(`Congratulations! ${winner} has won the game.`);
            }, 15);
        }
    }
    disconnectedCallback() {
        var _a, _b;
        const board = this.shadowRoot.querySelector(".ttt-board");
        (_a = board) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", this.userPicked);
        const resetButton = this.shadowRoot.querySelector(".resetGame");
        (_b = resetButton) === null || _b === void 0 ? void 0 : _b.removeEventListener("click", this.resetGame);
        this.removeBindings();
    }
}
customElements.define("didact-tictactoe", TicTacToeGame);


/***/ }),

/***/ "./src/components/todo.html":
/*!**********************************!*\
  !*** ./src/components/todo.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"todo-list-template\">\r\n    <style>\r\n        .todo-header {\r\n            width:100%;\r\n            text-align: right;\r\n            background-color: #333;\r\n        }\r\n        .todo-status {\r\n            display: inline-block;\r\n            width: auto;\r\n            color:#fff;\r\n            font-weight: bold;\r\n        }\r\n        .todo-list {\r\n            display: flex;\r\n            flex-direction: column;\r\n            height: 100%;\r\n            width: 100%;\r\n            margin:auto;\r\n            border: 0.5em solid #333;\r\n            background-color: #444;\r\n        }\r\n        .todo-area {\r\n            overflow-y: scroll;\r\n        }\r\n    </style>\r\n    <div class=\"todo-list\">\r\n        <div class=\"todo-header\">\r\n            <div class=\"todo-status\">Total Items: \r\n            <span data-bind=\"text:todoCount\"></span>\r\n        </div>\r\n            <button type=\"button\" class=\"todo-sort\">Sort Toggle</button>\r\n            <button type=\"button\" class=\"todo-hide\">Show / Hide Completed</button>\r\n        </div>\r\n        <div class=\"todo-area\" data-bind=\"children:todoItems\"></div>\r\n    </div>\r\n</template>\r\n<template id=\"todo-item-template\">\r\n    <style>\r\n        .todo-item {\r\n            width:100%;\r\n            height: 2em;\r\n            background-color: #999;\r\n            display: flex;\r\n            flex-wrap: nowrap;\r\n            align-items: center;\r\n        }\r\n        .todo-check {\r\n            flex: .25;\r\n        }\r\n        .todo-text {\r\n            flex: .75;\r\n        }\r\n    </style>\r\n    <div class=\"todo-item\">\r\n        <input type=\"checkbox\" class=\"todo-check\" data-bind=\"checked:completed\" />\r\n        <span class=\"todo-text\" data-bind=\"text:todoTitle\"></span>\r\n    </div>\r\n</template>";

/***/ }),

/***/ "./src/components/todo.ts":
/*!********************************!*\
  !*** ./src/components/todo.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../didact/componentbase */ "./src/didact/componentbase.ts");
/* harmony import */ var _todo_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.html */ "./src/components/todo.html");
/* harmony import */ var _todo_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_todo_html__WEBPACK_IMPORTED_MODULE_1__);


class TodoList extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor() {
        super("todo-list-template", _todo_html__WEBPACK_IMPORTED_MODULE_1___default.a);
        this.sortTodos = (ev) => {
            switch (this.sort) {
                case "asc":
                    this.sort = "desc";
                    break;
                default:
                    this.sort = "asc";
            }
            if (this.sort === "asc") {
                this.todoItems.value.sort(function (a, b) {
                    return a.todoTitle.value.localeCompare(b.todoTitle.value);
                });
            }
            else {
                this.todoItems.value.sort(function (a, b) {
                    return b.todoTitle.value.localeCompare(a.todoTitle.value);
                });
            }
            this.todoItems.notify();
        };
        this.toggleCompleted = (ev) => {
            this.completeHidden = !this.completeHidden;
            if (this.completeHidden) {
                this.todoItems.value = this.todoItems.value.filter(function (item) {
                    return !item.completed.value;
                });
            }
            else {
                // Get the completed items not in the list back
                const toAdd = this.data.filter(i => i.completed && this.todoItems.value.indexOf(i) == -1);
                // Add to the end
                this.todoItems.value.splice(this.todoItems.value.length, 0, ...toAdd);
            }
            this.todoItems.notify();
        };
        this.todoItems = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]([]);
        this.sort = "";
        this.completeHidden = false;
        this.todoCount = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Computed"](() => {
            return this.todoItems.value.length.toString();
        }, [this.todoItems]);
    }
    connectedCallback() {
        var _a, _b;
        this.applyBindings();
        const sortBtn = this.shadowRoot.querySelector(".todo-sort");
        (_a = sortBtn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.sortTodos);
        const hideBtn = this.shadowRoot.querySelector(".todo-hide");
        (_b = hideBtn) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.toggleCompleted);
        this.loadTodos();
    }
    async loadTodos() {
        // Load Data
        const req = new Request('http://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
            cache: 'no-store'
        });
        const serverTodos = await Object(_didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["serverJson"])(req);
        this.data = serverTodos.map((todo) => new TodoItem(todo));
        this.todoItems.value = this.data.slice();
    }
    disconnectedCallback() {
        var _a, _b;
        this.removeBindings();
        const sortBtn = this.shadowRoot.querySelector(".todo-sort");
        (_a = sortBtn) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", this.sortTodos);
        const hideBtn = this.shadowRoot.querySelector(".todo-hide");
        (_b = hideBtn) === null || _b === void 0 ? void 0 : _b.removeEventListener("click", this.toggleCompleted);
    }
}
class TodoItem extends _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["DidactComponentBase"] {
    constructor(item) {
        super("todo-item-template");
        this.todoTitle = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](item.title);
        this.completed = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"](item.completed);
    }
    connectedCallback() {
        this.applyBindings();
    }
    disconnectedCallback() {
        this.removeBindings();
    }
}
customElements.define("todo-list", TodoList);
customElements.define("todo-item", TodoItem);


/***/ }),

/***/ "./src/didact/bindings.ts":
/*!********************************!*\
  !*** ./src/didact/bindings.ts ***!
  \********************************/
/*! exports provided: bindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindings", function() { return bindings; });
/**
 * bindings contains set of functions that bind
 * an element to any observable and returns a function
 * that can be called to unbind
 */
const bindings = {
    value: (input, observable) => {
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
        };
    },
    text: (elem, observable) => {
        elem.innerText = observable.value;
        const updateText = () => elem.innerText = observable.value;
        observable.subscribe(updateText);
        return () => {
            observable.unsubscribe(updateText);
        };
    },
    html: (elem, observable) => {
        elem.innerHTML = observable.value;
        const updateText = () => elem.innerHTML = observable.value;
        observable.subscribe(updateText);
        return () => {
            observable.unsubscribe(updateText);
        };
    },
    checked: (input, observable) => {
        if (input.type !== "checkbox")
            throw "checked binding can only be used on checkboxes";
        // set Default
        input.checked = (observable.value) ? true : false;
        const updateInput = () => {
            if (observable.value) {
                input.checked = true;
            }
            else {
                input.checked = false;
            }
        };
        const updateObs = () => observable.value = input.checked;
        observable.subscribe(updateInput);
        input.addEventListener("change", updateObs);
        return () => {
            observable.unsubscribe(updateInput);
            input.removeEventListener("change", updateObs);
        };
    },
    children: (elem, observable) => {
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
        };
    },
    options: (select, observable) => {
        if (select.tagName !== "SELECT")
            throw "options binding can only be used on SELECT";
        const getValue = (val) => {
            if (select.dataset["optionsId"]) {
                return val[select.dataset["optionsId"]];
            }
            else {
                return val;
            }
        };
        const getText = (val) => {
            if (select.dataset["optionsText"]) {
                return val[select.dataset["optionsText"]];
            }
            else {
                return val;
            }
        };
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


/***/ }),

/***/ "./src/didact/componentbase.ts":
/*!*************************************!*\
  !*** ./src/didact/componentbase.ts ***!
  \*************************************/
/*! exports provided: Observable, Computed, saveLocal, saveSession, serverJson, getLocal, getSession, DidactComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DidactComponentBase", function() { return DidactComponentBase; });
/* harmony import */ var _bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindings */ "./src/didact/bindings.ts");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable */ "./src/didact/observable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Computed", function() { return _observable__WEBPACK_IMPORTED_MODULE_1__["Computed"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/didact/data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveLocal", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["saveLocal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSession", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["saveSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serverJson", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["serverJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocal", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["getLocal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["getSession"]; });




/**
 * Finds a Subscribable on an Object by inspecting it's properties
 * @param this Object to find a Property On
 * @param propName String Representation of the Property
 */
function getObservable(propName) {
    if (propName.indexOf("[") > 0 && propName.indexOf("]") > 0) {
        const arrProp = propName.replace(']', '').split("[");
        if (arrProp.length === 2) {
            const subscribable = this[arrProp[0]][arrProp[1]];
            if (subscribable && subscribable.subscribe) {
                return subscribable;
            }
        }
    }
    if (this[propName] && this[propName].subscribe) {
        return this[propName];
    }
    return null;
}
class DidactComponentBase extends HTMLElement {
    /**
     * Constructs a Didact Component
     * @param templateId the Template ID for the Component
     * @param html the HTML including the template tag
     */
    constructor(templateId, html) {
        var _a;
        super();
        /**
         * applies binding logic to all elements
         * with a data-bind attribute
         */
        this.applyBindings = () => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[data-bind]").forEach(elem => {
                var _a, _b;
                const bindList = (_a = elem.getAttribute("data-bind")) === null || _a === void 0 ? void 0 : _a.split(',');
                (_b = bindList) === null || _b === void 0 ? void 0 : _b.forEach((binding) => {
                    const [binderType, propName] = binding.split(':');
                    const binder = _bindings__WEBPACK_IMPORTED_MODULE_0__["bindings"][binderType];
                    const obs = getObservable.call(this, propName);
                    if (!binder && !obs) {
                        console.warn(`The binding [${binding}] could not be added. There is no such binding type or observable property.`);
                    }
                    else if (!binder) {
                        console.warn(`The binding [${binding}] could not be added. There is no such binding type.`);
                    }
                    else if (!obs) {
                        console.warn(`The binding [${binding}] could not be added. There is no such observable property.`);
                    }
                    if (binder && obs) {
                        this.activeBindings.push(binder(elem, obs));
                    }
                });
            });
        };
        /**
         * removes binding logic from all elements
         */
        this.removeBindings = () => {
            (this.activeBindings).forEach(removeBinding => removeBinding());
            this.activeBindings = [];
        };
        this.activeBindings = [];
        this.attachShadow({ mode: 'open' });
        if (templateId) {
            let templ = document.getElementById(templateId);
            if (!templ && html) {
                document.body.insertAdjacentHTML("beforeend", html);
            }
            templ = document.getElementById(templateId);
            if (!templ) {
                console.warn(`Could not find a <template> with id="${templateId}" `);
                throw 'Component is Missing Template';
            }
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(templ.content.cloneNode(true));
        }
    }
    /**
     * Default Connected Callback - just calls applyBindings();
     */
    connectedCallback() {
        this.applyBindings();
    }
    /**
     * Default Disconnected Callback - just calls removeBindings();
     */
    disconnectedCallback() {
        this.removeBindings();
    }
    /**
     * Callback for when Attribute changes - no implemention provided
     * you must implement
     * ==================================================
     *     static get observedAttributes(): string[]
     * ==================================================
     * on your class for this to be called
     * @param name name of Attribute that changed
     * @param oldValue old value
     * @param newValue new value
     */
    attributeChangedCallback(name, oldValue, newValue) {
    }
}


/***/ }),

/***/ "./src/didact/data.ts":
/*!****************************!*\
  !*** ./src/didact/data.ts ***!
  \****************************/
/*! exports provided: getSession, saveSession, getLocal, saveLocal, serverJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSession", function() { return saveSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocal", function() { return getLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLocal", function() { return saveLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverJson", function() { return serverJson; });
function getFrom(store, name, defaultValue) {
    const json = store.getItem(name);
    if (json === null) {
        return defaultValue || null;
    }
    else {
        return JSON.parse(json);
    }
}
function saveTo(store, name, value) {
    if (typeof value !== 'undefined' && value !== null) {
        const json = JSON.stringify(value);
        store.setItem(name, json);
    }
    else {
        store.removeItem(name);
    }
}
/**
 * Returns an Item from Session Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided if not provided returns null
 * @returns Promise that resolves to the Item, or null if not found
 */
const getSession = (name, defaultValue) => getFrom(sessionStorage, name, defaultValue);
/**
 * Saves an Item into Session Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns Promise that returns the currently stored value
 */
const saveSession = (name, value) => saveTo(sessionStorage, name, value);
/**
 * Returns an Item from Local Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided returns null
 * @returns Promise that resolves to the Item, or null if not found
 */
const getLocal = (name, defaultValue) => getFrom(localStorage, name, defaultValue);
/**
 * Saves an Item into Local Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns Promise that returns the currently stored value
 */
const saveLocal = (name, value) => saveTo(localStorage, name, value);
/**
 * Helper to Execute Promise and inspect the response Code
 * @param request the Request to send (e.g. new Request('url'))
 * @returns Promise that resolves with data. Rejects if not data
 */
function serverJson(request) {
    return new Promise((resolve, reject) => {
        fetch(request)
            .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                response.json()
                    .then((value) => resolve(value))
                    .catch((err) => reject(err));
            }
            else if (response.status >= 400 && response.status < 500) {
                response.text()
                    .then((msg) => reject(msg))
                    .catch((err) => reject(err));
            }
            else {
                reject(`${response.status} - ${response.statusText}`);
            }
        })
            .catch((reason) => reject(reason));
    });
}


/***/ }),

/***/ "./src/didact/observable.ts":
/*!**********************************!*\
  !*** ./src/didact/observable.ts ***!
  \**********************************/
/*! exports provided: Observable, Computed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Computed", function() { return Computed; });
/**
 * Class that lets us observe a value for changes
 */
class Observable {
    /**
     * Creates an Observable
     * @param value default value
     */
    constructor(value) {
        this._listeners = [];
        this._value = value;
    }
    notify() {
        this._listeners.forEach(listener => listener(this._value));
    }
    /**
     * Adds a Subscriber
     * @param listener function that gets called whenever the value changes
     */
    subscribe(listener) {
        this._listeners.push(listener);
    }
    /**
     * Removes a Subscriber
     * @param listener function that should not be called any longer when the value updates
     */
    unsubscribe(listener) {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }
    /**
     * Gets the value of the Observable
     */
    get value() {
        return this._value;
    }
    /**
     * Sets the value of the Observable
     * Notifying any Subscriber if the value is new
     */
    set value(val) {
        if (val !== this._value) {
            this._value = val;
            this.notify();
        }
    }
}
/**
 * Class that allows composition of a value based upon observing other changes
 */
class Computed extends Observable {
    /**
     * Creates a New Computed Value
     * @param value Function the results in the Value
     * @param deps Observables that trigger this Computed to Update
     */
    constructor(value, deps) {
        super(value());
        const listener = () => {
            this._value = value();
            this.notify();
        };
        deps.forEach(dep => dep.subscribe(listener));
    }
    /**
     * Gets the Computed Result
     */
    get value() {
        return this._value;
    }
    /**
     * Not possible to set value of Computed
     */
    set value(_) {
        throw "Cannot set computed property";
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0dGljay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zYW1wbGVmb3JtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2FtcGxlZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aWN0YWN0b2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9kby5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9iaW5kaW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2NvbXBvbmVudGJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9kYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3Qvb2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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LDZCQUE2QixnRUFBVTtBQUN2Qyw2QkFBNkIsZ0VBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ2M7QUFDOEI7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0RBQVE7QUFDM0M7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLFdBQVc7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixLQUFLLG9CQUFvQjtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCBcIi4vY29tcG9uZW50cy9oZWxsb3dvcmxkXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYWxjdWxhdG9yXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy90aWN0YWN0b2VcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3RvZG9cIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NhbXBsZWZvcm1cIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3JlYWN0dGlja1wiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJjYWxjdWxhdG9yLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLmNhbGMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdlbSAxLjVlbSA0ZnI7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWVxdWF0aW9uIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1yZXN1bHQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDUpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNikge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg3KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDgpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoOSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtZGVjaW1hbCB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDEwKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1uZWdhdGUge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtZXhlY3V0ZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyA1O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1O1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbjxkaXYgY2xhc3M9XFxcImNhbGMtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FsYy1lcXVhdGlvblxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNhbGNFcXVhdGlvblxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtcmVzdWx0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2FsY0VudHJ5XFxcIj4wPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+OTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI4XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjg8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiN1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj43PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI1XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiNFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj40PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIyXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjI8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiMVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1uZWdhdGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+Ky8tPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLWRlY2ltYWxcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+LjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1kaXZpZGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiMyNDc7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW11bHRpcGx5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjMjE1OzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1taW51c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzg3MjI7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLXBsdXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiM0Mzs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtZXhlY3V0ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzYxOzwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UsIE9ic2VydmFibGUsIGdldFNlc3Npb24sIHNhdmVTZXNzaW9uIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmltcG9ydCBodG1sIGZyb20gXCIuL2NhbGN1bGF0b3IuaHRtbFwiO1xyXG5jb25zdCBDQUxDX0VRVUFUSU9OID0gXCJESURBQ1QuQ0FMQy5FUVVBVElPTlwiO1xyXG5jbGFzcyBDYWxjdWxhdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImNhbGN1bGF0b3ItdGVtcGxhdGVcIiwgaHRtbCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbGljayA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhckVxdWF0aW9uT25OZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRXF1YXRpb25Pbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBldi50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1udW1iZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUgKyBidG4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW5lZ2F0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSkgKiAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1kZWNpbWFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IHRoaXMuY2FsY0VudHJ5LnZhbHVlICsgXCIuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtZGl2aWRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgL1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1tdWx0aXBseVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiICpcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbWludXNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiAtXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLXBsdXNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiArXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLWV4ZWN1dGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0dGwgPSB0aGlzLmV2YWx1YXRlRXF1YXRpb24oZXF1YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSBlcXVhdGlvbiArIFwiID0gXCIgKyB0dGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24gPSBuZXcgT2JzZXJ2YWJsZShnZXRTZXNzaW9uKENBTENfRVFVQVRJT04sIFwiXCIpKTtcclxuICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi5zdWJzY3JpYmUoKHZhbCkgPT4gc2F2ZVNlc3Npb24oQ0FMQ19FUVVBVElPTiwgdmFsKSk7XHJcbiAgICAgICAgdGhpcy5jYWxjRW50cnkgPSBuZXcgT2JzZXJ2YWJsZShcIjBcIik7XHJcbiAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhbGMtYnV0dG9uc1wiKTtcclxuICAgICAgICBidXR0b25BcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJ1dHRvbkNsaWNrKTtcclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhbGMtYnV0dG9uc1wiKTtcclxuICAgICAgICBidXR0b25BcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJ1dHRvbkNsaWNrKTtcclxuICAgIH1cclxuICAgIGV2YWx1YXRlRXF1YXRpb24oZXF1YXRpb24pIHtcclxuICAgICAgICBjb25zdCBlcVBhcnRzID0gZXF1YXRpb24udHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IHR0bCA9IHBhcnNlRmxvYXQoZXFQYXJ0c1swXSk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCBlcVBhcnRzLmxlbmd0aDsgeCArPSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQoZXFQYXJ0c1t4ICsgMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBvcCA9IGVxUGFydHNbeF07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3ApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsICs9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsIC09IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsICo9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsIC89IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHRsO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGlkYWN0LWNhbGN1bGF0b3InLCBDYWxjdWxhdG9yQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5jbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgaGkuaW5uZXJUZXh0ID0gXCJIZWxsbyBXb3JsZFwiO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChoaSk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWxsby13b3JsZCcsIEhlbGxvV29ybGQpO1xyXG4iLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmNsYXNzIFJlYWN0VGlja0NvbXBvbmVudCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgYDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cclxuICAgICAgICAgICAgPGgyPkl0IGlzIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6bG9jYWxUaW1lXCI+PC9zcGFuPi48L2gyPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBuZXcgT2JzZXJ2YWJsZShuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpKTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMubG9jYWxUaW1lLnZhbHVlID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTsgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdyZWFjdC10aWNrJywgUmVhY3RUaWNrQ29tcG9uZW50KTtcclxuLyoqIFJlYWN0IFZlcnNpb25cclxuZnVuY3Rpb24gdGljaygpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgIDxoMj5JdCBpcyB7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0uPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBzZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcclxuKi8gXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGUgaWQ9XFxcInNhbXBsZS1mb3JtLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgaW5wdXQ6aW52YWxpZCxzZWxlY3Q6aW52YWxpZCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMywgMyk7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZm9ybS1maWVsZDppbnZhbGlkID4gbGFiZWwge1xcclxcbiAgICAgICAgICAgIGNvbG9yOnJnYigxNTYsMywzKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5mb3JtLWZpZWxke1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZm9ybS1maWVsZDpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIGZsZXg6IDAuNGZyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmZvcm0tZmllbGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICBmbGV4OiAwLjZmcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5mb3JtLWZvb3RlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuYnRuLXJlc2V0IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmJ0bi1zdWJtaXQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG4gICAgPGZvcm0+XFxyXFxuICAgICAgICA8aDIgaWQ9XFxcImZvcm1UaXRsZVxcXCI+PC9oMj5cXHJcXG4gICAgICAgIDxmaWVsZHNldD5cXHJcXG4gICAgICAgICAgICA8bGVnZW5kPlZlaGljbGUgRGV0YWlsczwvbGVnZW5kPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+VmVoaWNsZSBZZWFyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cXFwiMTkyMFxcXCIgbWF4PVxcXCIyMDIxXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjFcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6eWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5WZWhpY2xlIE1ha2U8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIGRhdGEtYmluZD1cXFwib3B0aW9uczptYWtlcyx2YWx1ZTptYWtlXFxcIiBkYXRhLW9wdGlvbnMtaWQ9XFxcImlkXFxcIiBkYXRhLW9wdGlvbnMtdGV4dD1cXFwibWFudWZhY3R1cmVyXFxcIiBkYXRhLW9wdGlvbnMtc2VsZWN0b3I9XFxcIi0gUGxlYXNlIFNlbGVjdCBhIE1hbnVmYWN0dXJlciAtXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlZlaGljbGUgQ29sb3I8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtYmluZD1cXFwib3B0aW9uczpjb2xvcnMsdmFsdWU6Y29sb3JcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9maWVsZHNldD5cXHJcXG4gICAgICAgIDxmaWVsZHNldD5cXHJcXG4gICAgICAgICAgICA8bGVnZW5kPlB1cmNoYXNlIERldGFpbHM8L2xlZ2VuZD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50eTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmNvdW50eVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5QdXJjaGFzZSBEYXRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJkYXRlLXBpY2tlclxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTpwdXJjaGFzZURhdGVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVsaXZlcnkgRGF0ZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJkYXRlXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmRlbGl2ZXJ5RGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2ZpZWxkc2V0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi1yZXNldFxcXCIgdHlwZT1cXFwicmVzZXRcXFwiPkNsZWFyIEZvcm08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4tc3VibWl0XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlN1Ym1pdCBGb3JtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSwgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9zYW1wbGVmb3JtLmh0bWxcIjtcclxuY2xhc3MgU2FtcGxlRm9ybUNvbXBvbmVudCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJzYW1wbGUtZm9ybS10ZW1wbGF0ZVwiLCBodG1sKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0gPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHllYXI6IHRoaXMueWVhci52YWx1ZSxcclxuICAgICAgICAgICAgICAgIG1ha2U6IHRoaXMubWFrZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY291bnR5OiB0aGlzLmNvdW50eS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHB1cmNoYXNlRGF0ZTogdGhpcy5wdXJjaGFzZURhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeURhdGU6IHRoaXMuZGVsaXZlcnlEYXRlLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIERpc3BhdGNoIGEgY3VzdG9tIEV2ZW50IGZvciBhIHBhcmVudCBDb21wb25lbnQgKG9yIGluIHRoaXMgY2FzZSB0aGUgcGFnZSkgdG8gaGFuZGxlXHJcbiAgICAgICAgICAgIC8vIGNvbXBvc2VkIG11c3QgYmUgdHJ1ZSBpbiBvcmRlciBmb3IgdGhpcyB0byBhdmFpbGFibGUgb3V0c2lkZSBvdXIgY29tcG9uZW50XHJcbiAgICAgICAgICAgIC8vIEkgYWxzbyBzZXQgYnViYmxlcyB0byB0cnVlIHNvIHRoYXQgdGhlIGV2ZW50IHdpbGwgZ28gYWxsIHRoZSB3YXkgdG8gZG9jdW1lbnQgcm9vdFxyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidmVoaWNsZXJlZ2lzdGVyZWRcIiwgeyBkZXRhaWw6IGRhdGEgfSkpO1xyXG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgaW5kZXguaHRtbCBmb3IgdGhlIGxpc3RlbmVyIGZvciB0aGlzIGV2ZW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnllYXIgPSBuZXcgT2JzZXJ2YWJsZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5tYWtlID0gbmV3IE9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBPYnNlcnZhYmxlKFwiU2lsdmVyXCIpO1xyXG4gICAgICAgIHRoaXMuY291bnR5ID0gbmV3IE9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZURhdGUgPSBuZXcgT2JzZXJ2YWJsZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSk7XHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeURhdGUgPSBuZXcgT2JzZXJ2YWJsZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSk7XHJcbiAgICAgICAgdGhpcy5tYWtlcyA9IG5ldyBPYnNlcnZhYmxlKFtcclxuICAgICAgICAgICAgeyBpZDogXCJUT1lcIiwgbWFudWZhY3R1cmVyOiBcIlRveW90YVwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiRk9SRFwiLCBtYW51ZmFjdHVyZXI6IFwiRm9yZCBNb3RvciBDb3JwLlwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiR01cIiwgbWFudWZhY3R1cmVyOiBcIkdlbmVyYWwgTW90b3JzXCIgfSxcclxuICAgICAgICAgICAgeyBpZDogXCJCVUlDS1wiLCBtYW51ZmFjdHVyZXI6IFwiQnVpY2tcIiB9LFxyXG4gICAgICAgICAgICB7IGlkOiBcIkhPTkRBXCIsIG1hbnVmYWN0dXJlcjogXCJIb25kYVwiIH1cclxuICAgICAgICBdLnNvcnQoKGwsIHIpID0+IGwubWFudWZhY3R1cmVyLmxvY2FsZUNvbXBhcmUoci5tYW51ZmFjdHVyZXIpKSk7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBuZXcgT2JzZXJ2YWJsZShbXCJSZWRcIiwgXCJCbHVlXCIsIFwiQmxhY2tcIiwgXCJTaWx2ZXJcIiwgXCJCZWlnZVwiLCBcIkdyZWVuXCIsIFwiT3JhbmdlXCIsIFwiWWVsbG93XCJdKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbXCJmb3JtdGl0bGVcIl07XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MoKTtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImZvcm10aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtVGl0bGUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlRm9ybVRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVRpdGxlXCIpO1xyXG4gICAgICAgIGlmIChmb3JtVGl0bGUpIHtcclxuICAgICAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzYW1wbGUtZm9ybVwiLCBTYW1wbGVGb3JtQ29tcG9uZW50KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwidGljdGFjdG9lLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLnR0dC1nYW1lIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJlbSAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4yNWZyO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudHR0LW1lc3NhZ2Uge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICAgICAgY29sb3I6eWVsbG93Z3JlZW47XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEuMmVtO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnJlc2V0R2FtZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudHR0LWJvYXJkIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8zO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoMSl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDIpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNCl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDUpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg2KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNyl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDgpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg5KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidHR0LWdhbWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHR0LW1lc3NhZ2VcXFwiIGRhdGEtYmluZD1cXFwidGV4dDptZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwicmVzZXRHYW1lXFxcIj5SZXNldDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHR0LWJvYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiMFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzBdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiMVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzFdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiMlxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzJdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiM1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzNdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiNFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzRdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiNVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzVdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiNlxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzZdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiN1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzddXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiOFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzhdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UsIE9ic2VydmFibGUsIENvbXB1dGVkIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmltcG9ydCBodG1sIGZyb20gXCIuL3RpY3RhY3RvZS5odG1sXCI7XHJcbmNsYXNzIFRpY1RhY1RvZUdhbWUgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwidGljdGFjdG9lLXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMudXNlclBpY2tlZCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBldi50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FtZUNlbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbYnRuLnZhbHVlXS52YWx1ZSA9IHRoaXMuY3VycmVudFBsYXllci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPT09IFwiWFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlID0gXCJPXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPSBcIlhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRm9yV2lucygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXNldEdhbWUgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9IFwiWFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gbmV3IE9ic2VydmFibGUoXCJYXCIpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG5ldyBDb21wdXRlZCgoKSA9PiBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWV9J3MgVHVybiFgLCBbdGhpcy5jdXJyZW50UGxheWVyXSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgOTsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgT2JzZXJ2YWJsZShcIlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnR0dC1ib2FyZFwiKTtcclxuICAgICAgICAoX2EgPSBib2FyZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnVzZXJQaWNrZWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRHYW1lXCIpO1xyXG4gICAgICAgIChfYiA9IHJlc2V0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVzZXRHYW1lKTtcclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MoKTtcclxuICAgIH1cclxuICAgIGNoZWNrRm9yV2lucygpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaW5uaW5nIENvbWJvcyBhcmUgMSwyLDN8NCw1LDZ8Nyw4LDl8MSw1LDl8Myw1LDd8MSw0LDd8Miw1LDh8Myw2LDlcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB3aW5zID0gW1xyXG4gICAgICAgICAgICBbMSwgMiwgM10sXHJcbiAgICAgICAgICAgIFs0LCA1LCA2XSxcclxuICAgICAgICAgICAgWzcsIDgsIDldLFxyXG4gICAgICAgICAgICBbMSwgNSwgOV0sXHJcbiAgICAgICAgICAgIFszLCA1LCA3XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFszLCA2LCA5XVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IHdpbm5lcjtcclxuICAgICAgICB3aW5zLmZvckVhY2goKGNvbWJvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmNlbGxzW2NvbWJvWzBdIC0gMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLmNlbGxzW2NvbWJvWzFdIC0gMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNlbGxzW2NvbWJvWzJdIC0gMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChhICYmIGIgJiYgYyAmJiBhID09IGIgJiYgYiA9PSBjKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5uZXIgPSBhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBDb25ncmF0dWxhdGlvbnMhICR7d2lubmVyfSBoYXMgd29uIHRoZSBnYW1lLmApO1xyXG4gICAgICAgICAgICB9LCAxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnR0dC1ib2FyZFwiKTtcclxuICAgICAgICAoX2EgPSBib2FyZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnVzZXJQaWNrZWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRHYW1lXCIpO1xyXG4gICAgICAgIChfYiA9IHJlc2V0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVzZXRHYW1lKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGlkYWN0LXRpY3RhY3RvZVwiLCBUaWNUYWNUb2VHYW1lKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwidG9kby1saXN0LXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLnRvZG8taGVhZGVyIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby1zdGF0dXMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tbGlzdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDAuNWVtIHNvbGlkICMzMzM7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50b2RvLWFyZWEge1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvZG8taGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLXN0YXR1c1xcXCI+VG90YWwgSXRlbXM6IFxcclxcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDp0b2RvQ291bnRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwidG9kby1zb3J0XFxcIj5Tb3J0IFRvZ2dsZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwidG9kby1oaWRlXFxcIj5TaG93IC8gSGlkZSBDb21wbGV0ZWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1hcmVhXFxcIiBkYXRhLWJpbmQ9XFxcImNoaWxkcmVuOnRvZG9JdGVtc1xcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHRlbXBsYXRlIGlkPVxcXCJ0b2RvLWl0ZW0tdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICAudG9kby1pdGVtIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMmVtO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tY2hlY2sge1xcclxcbiAgICAgICAgICAgIGZsZXg6IC4yNTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50b2RvLXRleHQge1xcclxcbiAgICAgICAgICAgIGZsZXg6IC43NTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9kby1pdGVtXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcInRvZG8tY2hlY2tcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDpjb21wbGV0ZWRcXFwiIC8+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidG9kby10ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6dG9kb1RpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSwgT2JzZXJ2YWJsZSwgc2VydmVySnNvbiwgQ29tcHV0ZWQgfSBmcm9tIFwiLi4vZGlkYWN0L2NvbXBvbmVudGJhc2VcIjtcclxuaW1wb3J0IGh0bWwgZnJvbSBcIi4vdG9kby5odG1sXCI7XHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInRvZG8tbGlzdC10ZW1wbGF0ZVwiLCBodG1sKTtcclxuICAgICAgICB0aGlzLnNvcnRUb2RvcyA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc29ydCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFzY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydCA9IFwiZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQgPSBcImFzY1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNvcnQgPT09IFwiYXNjXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnZhbHVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS50b2RvVGl0bGUudmFsdWUubG9jYWxlQ29tcGFyZShiLnRvZG9UaXRsZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnZhbHVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi50b2RvVGl0bGUudmFsdWUubG9jYWxlQ29tcGFyZShhLnRvZG9UaXRsZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy5ub3RpZnkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29tcGxldGVkID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVIaWRkZW4gPSAhdGhpcy5jb21wbGV0ZUhpZGRlbjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGxldGVIaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnZhbHVlID0gdGhpcy50b2RvSXRlbXMudmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpdGVtLmNvbXBsZXRlZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb21wbGV0ZWQgaXRlbXMgbm90IGluIHRoZSBsaXN0IGJhY2tcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvQWRkID0gdGhpcy5kYXRhLmZpbHRlcihpID0+IGkuY29tcGxldGVkICYmIHRoaXMudG9kb0l0ZW1zLnZhbHVlLmluZGV4T2YoaSkgPT0gLTEpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnZhbHVlLnNwbGljZSh0aGlzLnRvZG9JdGVtcy52YWx1ZS5sZW5ndGgsIDAsIC4uLnRvQWRkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy5ub3RpZnkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0gbmV3IE9ic2VydmFibGUoW10pO1xyXG4gICAgICAgIHRoaXMuc29ydCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZUhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9kb0NvdW50ID0gbmV3IENvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zLnZhbHVlLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgIH0sIFt0aGlzLnRvZG9JdGVtc10pO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MoKTtcclxuICAgICAgICBjb25zdCBzb3J0QnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zb3J0XCIpO1xyXG4gICAgICAgIChfYSA9IHNvcnRCdG4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zb3J0VG9kb3MpO1xyXG4gICAgICAgIGNvbnN0IGhpZGVCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50b2RvLWhpZGVcIik7XHJcbiAgICAgICAgKF9iID0gaGlkZUJ0bikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZUNvbXBsZXRlZCk7XHJcbiAgICAgICAgdGhpcy5sb2FkVG9kb3MoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGxvYWRUb2RvcygpIHtcclxuICAgICAgICAvLyBMb2FkIERhdGFcclxuICAgICAgICBjb25zdCByZXEgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyVG9kb3MgPSBhd2FpdCBzZXJ2ZXJKc29uKHJlcSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gc2VydmVyVG9kb3MubWFwKCh0b2RvKSA9PiBuZXcgVG9kb0l0ZW0odG9kbykpO1xyXG4gICAgICAgIHRoaXMudG9kb0l0ZW1zLnZhbHVlID0gdGhpcy5kYXRhLnNsaWNlKCk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgICAgICBjb25zdCBzb3J0QnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zb3J0XCIpO1xyXG4gICAgICAgIChfYSA9IHNvcnRCdG4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zb3J0VG9kb3MpO1xyXG4gICAgICAgIGNvbnN0IGhpZGVCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50b2RvLWhpZGVcIik7XHJcbiAgICAgICAgKF9iID0gaGlkZUJ0bikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZUNvbXBsZXRlZCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGl0ZW0pIHtcclxuICAgICAgICBzdXBlcihcInRvZG8taXRlbS10ZW1wbGF0ZVwiKTtcclxuICAgICAgICB0aGlzLnRvZG9UaXRsZSA9IG5ldyBPYnNlcnZhYmxlKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gbmV3IE9ic2VydmFibGUoaXRlbS5jb21wbGV0ZWQpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseUJpbmRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidG9kby1saXN0XCIsIFRvZG9MaXN0KTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidG9kby1pdGVtXCIsIFRvZG9JdGVtKTtcclxuIiwiLyoqXHJcbiAqIGJpbmRpbmdzIGNvbnRhaW5zIHNldCBvZiBmdW5jdGlvbnMgdGhhdCBiaW5kXHJcbiAqIGFuIGVsZW1lbnQgdG8gYW55IG9ic2VydmFibGUgYW5kIHJldHVybnMgYSBmdW5jdGlvblxyXG4gKiB0aGF0IGNhbiBiZSBjYWxsZWQgdG8gdW5iaW5kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmluZGluZ3MgPSB7XHJcbiAgICB2YWx1ZTogKGlucHV0LCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUlucHV0ID0gKCkgPT4gaW5wdXQudmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU9icyA9ICgpID0+IG9ic2VydmFibGUudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZUlucHV0KTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdGV4dDogKGVsZW0sIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBlbGVtLmlubmVyVGV4dCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlVGV4dCA9ICgpID0+IGVsZW0uaW5uZXJUZXh0ID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgaHRtbDogKGVsZW0sIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBlbGVtLmlubmVySFRNTCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlVGV4dCA9ICgpID0+IGVsZW0uaW5uZXJIVE1MID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY2hlY2tlZDogKGlucHV0LCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgIT09IFwiY2hlY2tib3hcIilcclxuICAgICAgICAgICAgdGhyb3cgXCJjaGVja2VkIGJpbmRpbmcgY2FuIG9ubHkgYmUgdXNlZCBvbiBjaGVja2JveGVzXCI7XHJcbiAgICAgICAgLy8gc2V0IERlZmF1bHRcclxuICAgICAgICBpbnB1dC5jaGVja2VkID0gKG9ic2VydmFibGUudmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU9icyA9ICgpID0+IG9ic2VydmFibGUudmFsdWUgPSBpbnB1dC5jaGVja2VkO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUlucHV0KTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNoaWxkcmVuOiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmUgYSBsb3Qgc21hcnRlciBhbmQgZWZmaWNpZW50XHJcbiAgICAgICAgY29uc3QgdXBkYXRlQ2hpbGRyZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgY2hpbGRyZW5cclxuICAgICAgICAgICAgd2hpbGUgKGVsZW0uaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0ubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIG5ldyBjaGlsZHJlbiBpbiBvcmRlclxyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnZhbHVlLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh1cGRhdGVDaGlsZHJlbik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVDaGlsZHJlbik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBvcHRpb25zOiAoc2VsZWN0LCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdC50YWdOYW1lICE9PSBcIlNFTEVDVFwiKVxyXG4gICAgICAgICAgICB0aHJvdyBcIm9wdGlvbnMgYmluZGluZyBjYW4gb25seSBiZSB1c2VkIG9uIFNFTEVDVFwiO1xyXG4gICAgICAgIGNvbnN0IGdldFZhbHVlID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0LmRhdGFzZXRbXCJvcHRpb25zSWRcIl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxbc2VsZWN0LmRhdGFzZXRbXCJvcHRpb25zSWRcIl1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZ2V0VGV4dCA9ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdC5kYXRhc2V0W1wib3B0aW9uc1RleHRcIl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxbc2VsZWN0LmRhdGFzZXRbXCJvcHRpb25zVGV4dFwiXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cGRhdGVPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIHdoaWxlIChzZWxlY3QuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QucmVtb3ZlQ2hpbGQoc2VsZWN0Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWRkIHNlbGVjdG9yXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3QuZGF0YXNldFtcIm9wdGlvbnNTZWxlY3RvclwiXSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG5ldyBPcHRpb24oc2VsZWN0LmRhdGFzZXRbXCJvcHRpb25zU2VsZWN0b3JcIl0sIFwiXCIsIHRydWUsIHNlbGVjdC52YWx1ZSA9PT0gXCJcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgY2hpbGRyZW5cclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS52YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdFZhbHVlID0gZ2V0VmFsdWUodmFsKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChuZXcgT3B0aW9uKGdldFRleHQodmFsKSwgb3B0VmFsdWUsIGZhbHNlLCBzZWxlY3QudmFsdWUgPT09IG9wdFZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlT3B0aW9ucygpO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgLyogWW91IGFkZCBtb3JlIGhlcmUgKi9cclxufTtcclxuIiwiaW1wb3J0IHsgYmluZGluZ3MgfSBmcm9tIFwiLi9iaW5kaW5nc1wiO1xyXG5leHBvcnQgeyBPYnNlcnZhYmxlLCBDb21wdXRlZCB9IGZyb20gXCIuL29ic2VydmFibGVcIjtcclxuZXhwb3J0IHsgc2F2ZUxvY2FsLCBzYXZlU2Vzc2lvbiwgc2VydmVySnNvbiwgZ2V0TG9jYWwsIGdldFNlc3Npb24gfSBmcm9tIFwiLi9kYXRhXCI7XHJcbi8qKlxyXG4gKiBGaW5kcyBhIFN1YnNjcmliYWJsZSBvbiBhbiBPYmplY3QgYnkgaW5zcGVjdGluZyBpdCdzIHByb3BlcnRpZXNcclxuICogQHBhcmFtIHRoaXMgT2JqZWN0IHRvIGZpbmQgYSBQcm9wZXJ0eSBPblxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIHRoZSBQcm9wZXJ0eVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0T2JzZXJ2YWJsZShwcm9wTmFtZSkge1xyXG4gICAgaWYgKHByb3BOYW1lLmluZGV4T2YoXCJbXCIpID4gMCAmJiBwcm9wTmFtZS5pbmRleE9mKFwiXVwiKSA+IDApIHtcclxuICAgICAgICBjb25zdCBhcnJQcm9wID0gcHJvcE5hbWUucmVwbGFjZSgnXScsICcnKS5zcGxpdChcIltcIik7XHJcbiAgICAgICAgaWYgKGFyclByb3AubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliYWJsZSA9IHRoaXNbYXJyUHJvcFswXV1bYXJyUHJvcFsxXV07XHJcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmFibGUgJiYgc3Vic2NyaWJhYmxlLnN1YnNjcmliZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliYWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzW3Byb3BOYW1lXSAmJiB0aGlzW3Byb3BOYW1lXS5zdWJzY3JpYmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1twcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlkYWN0Q29tcG9uZW50QmFzZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIERpZGFjdCBDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIHRoZSBUZW1wbGF0ZSBJRCBmb3IgdGhlIENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIGh0bWwgdGhlIEhUTUwgaW5jbHVkaW5nIHRoZSB0ZW1wbGF0ZSB0YWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVJZCwgaHRtbCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFwcGxpZXMgYmluZGluZyBsb2dpYyB0byBhbGwgZWxlbWVudHNcclxuICAgICAgICAgKiB3aXRoIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmluZF1cIikuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5kTGlzdCA9IChfYSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGJpbmRMaXN0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYmluZGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtiaW5kZXJUeXBlLCBwcm9wTmFtZV0gPSBiaW5kaW5nLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluZGVyID0gYmluZGluZ3NbYmluZGVyVHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzID0gZ2V0T2JzZXJ2YWJsZS5jYWxsKHRoaXMsIHByb3BOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJpbmRlciAmJiAhb2JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGJpbmRpbmcgWyR7YmluZGluZ31dIGNvdWxkIG5vdCBiZSBhZGRlZC4gVGhlcmUgaXMgbm8gc3VjaCBiaW5kaW5nIHR5cGUgb3Igb2JzZXJ2YWJsZSBwcm9wZXJ0eS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWJpbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBiaW5kaW5nIFske2JpbmRpbmd9XSBjb3VsZCBub3QgYmUgYWRkZWQuIFRoZXJlIGlzIG5vIHN1Y2ggYmluZGluZyB0eXBlLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghb2JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGJpbmRpbmcgWyR7YmluZGluZ31dIGNvdWxkIG5vdCBiZSBhZGRlZC4gVGhlcmUgaXMgbm8gc3VjaCBvYnNlcnZhYmxlIHByb3BlcnR5LmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmluZGVyICYmIG9icykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzLnB1c2goYmluZGVyKGVsZW0sIG9icykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlbW92ZXMgYmluZGluZyBsb2dpYyBmcm9tIGFsbCBlbGVtZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICh0aGlzLmFjdGl2ZUJpbmRpbmdzKS5mb3JFYWNoKHJlbW92ZUJpbmRpbmcgPT4gcmVtb3ZlQmluZGluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVCaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3RpdmVCaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgICAgICAgICBpZiAoIXRlbXBsICYmIGh0bWwpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICAgICAgICAgIGlmICghdGVtcGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgYSA8dGVtcGxhdGU+IHdpdGggaWQ9XCIke3RlbXBsYXRlSWR9XCIgYCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ29tcG9uZW50IGlzIE1pc3NpbmcgVGVtcGxhdGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHRlbXBsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgQ29ubmVjdGVkIENhbGxiYWNrIC0ganVzdCBjYWxscyBhcHBseUJpbmRpbmdzKCk7XHJcbiAgICAgKi9cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IERpc2Nvbm5lY3RlZCBDYWxsYmFjayAtIGp1c3QgY2FsbHMgcmVtb3ZlQmluZGluZ3MoKTtcclxuICAgICAqL1xyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmb3Igd2hlbiBBdHRyaWJ1dGUgY2hhbmdlcyAtIG5vIGltcGxlbWVudGlvbiBwcm92aWRlZFxyXG4gICAgICogeW91IG11c3QgaW1wbGVtZW50XHJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICogICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCk6IHN0cmluZ1tdXHJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICogb24geW91ciBjbGFzcyBmb3IgdGhpcyB0byBiZSBjYWxsZWRcclxuICAgICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgQXR0cmlidXRlIHRoYXQgY2hhbmdlZFxyXG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG5ld1ZhbHVlIG5ldyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0RnJvbShzdG9yZSwgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICBjb25zdCBqc29uID0gc3RvcmUuZ2V0SXRlbShuYW1lKTtcclxuICAgIGlmIChqc29uID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2F2ZVRvKHN0b3JlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIHN0b3JlLnNldEl0ZW0obmFtZSwganNvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdG9yZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEl0ZW0gZnJvbSBTZXNzaW9uIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBEZWZhdWx0IHZhbHVlIGlmIG5vdCBwcm92aWRlZCBpZiBub3QgcHJvdmlkZWQgcmV0dXJucyBudWxsXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgSXRlbSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gZ2V0RnJvbShzZXNzaW9uU3RvcmFnZSwgbmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuLyoqXHJcbiAqIFNhdmVzIGFuIEl0ZW0gaW50byBTZXNzaW9uIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIHZhbHVlIE5ldyBWYWx1ZSB0byBiZSBTdG9yZWRcclxuICogQHJldXJucyBQcm9taXNlIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudGx5IHN0b3JlZCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdmVTZXNzaW9uID0gKG5hbWUsIHZhbHVlKSA9PiBzYXZlVG8oc2Vzc2lvblN0b3JhZ2UsIG5hbWUsIHZhbHVlKTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSXRlbSBmcm9tIExvY2FsIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBEZWZhdWx0IHZhbHVlIGlmIG5vdCBwcm92aWRlZCByZXR1cm5zIG51bGxcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBJdGVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldExvY2FsID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gZ2V0RnJvbShsb2NhbFN0b3JhZ2UsIG5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbi8qKlxyXG4gKiBTYXZlcyBhbiBJdGVtIGludG8gTG9jYWwgU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gdmFsdWUgTmV3IFZhbHVlIHRvIGJlIFN0b3JlZFxyXG4gKiBAcmV1cm5zIFByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50bHkgc3RvcmVkIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZUxvY2FsID0gKG5hbWUsIHZhbHVlKSA9PiBzYXZlVG8obG9jYWxTdG9yYWdlLCBuYW1lLCB2YWx1ZSk7XHJcbi8qKlxyXG4gKiBIZWxwZXIgdG8gRXhlY3V0ZSBQcm9taXNlIGFuZCBpbnNwZWN0IHRoZSByZXNwb25zZSBDb2RlXHJcbiAqIEBwYXJhbSByZXF1ZXN0IHRoZSBSZXF1ZXN0IHRvIHNlbmQgKGUuZy4gbmV3IFJlcXVlc3QoJ3VybCcpKVxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBkYXRhLiBSZWplY3RzIGlmIG5vdCBkYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VydmVySnNvbihyZXF1ZXN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG1zZykgPT4gcmVqZWN0KG1zZykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChgJHtyZXNwb25zZS5zdGF0dXN9IC0gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHJlamVjdChyZWFzb24pKTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxldHMgdXMgb2JzZXJ2ZSBhIHZhbHVlIGZvciBjaGFuZ2VzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIGRlZmF1bHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5KCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKHRoaXMuX3ZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBTdWJzY3JpYmVyXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlc1xyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBTdWJzY3JpYmVyXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgbm90IGJlIGNhbGxlZCBhbnkgbG9uZ2VyIHdoZW4gdGhlIHZhbHVlIHVwZGF0ZXNcclxuICAgICAqL1xyXG4gICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBPYnNlcnZhYmxlXHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBPYnNlcnZhYmxlXHJcbiAgICAgKiBOb3RpZnlpbmcgYW55IFN1YnNjcmliZXIgaWYgdGhlIHZhbHVlIGlzIG5ld1xyXG4gICAgICovXHJcbiAgICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFsbG93cyBjb21wb3NpdGlvbiBvZiBhIHZhbHVlIGJhc2VkIHVwb24gb2JzZXJ2aW5nIG90aGVyIGNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wdXRlZCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTmV3IENvbXB1dGVkIFZhbHVlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgRnVuY3Rpb24gdGhlIHJlc3VsdHMgaW4gdGhlIFZhbHVlXHJcbiAgICAgKiBAcGFyYW0gZGVwcyBPYnNlcnZhYmxlcyB0aGF0IHRyaWdnZXIgdGhpcyBDb21wdXRlZCB0byBVcGRhdGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGRlcHMpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSgpKTtcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGVwcy5mb3JFYWNoKGRlcCA9PiBkZXAuc3Vic2NyaWJlKGxpc3RlbmVyKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIENvbXB1dGVkIFJlc3VsdFxyXG4gICAgICovXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3QgcG9zc2libGUgdG8gc2V0IHZhbHVlIG9mIENvbXB1dGVkXHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZShfKSB7XHJcbiAgICAgICAgdGhyb3cgXCJDYW5ub3Qgc2V0IGNvbXB1dGVkIHByb3BlcnR5XCI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==