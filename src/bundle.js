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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NhbXBsZWZvcm0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zYW1wbGVmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2RvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2JpbmRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvY29tcG9uZW50YmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCBcIi4vY29tcG9uZW50cy9oZWxsb3dvcmxkXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYWxjdWxhdG9yXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy90aWN0YWN0b2VcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3RvZG9cIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NhbXBsZWZvcm1cIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwiY2FsY3VsYXRvci10ZW1wbGF0ZVxcXCI+XFxyXFxuICAgIDxzdHlsZT5cXHJcXG4gICAgICAgIC5jYWxjLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6M2VtO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC43ZW0gMS41ZW0gNGZyO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1lcXVhdGlvbiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2VlZTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtcmVzdWx0IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1idXR0b25zIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNykge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg4KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDkpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWRlY2ltYWwge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgxMCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbmVnYXRlIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWV4ZWN1dGUge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gNTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYWxjLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtZXF1YXRpb25cXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjYWxjRXF1YXRpb25cXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjLXJlc3VsdFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNhbGNFbnRyeVxcXCI+MDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjLWJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjk8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiOFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj44PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjdcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjY8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj41PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjM8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiMlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4yPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjFcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbmVnYXRlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPisvLTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1kZWNpbWFsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPi48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtZGl2aWRlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjMjQ3OzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1tdWx0aXBseVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzIxNTs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbWludXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiM4NzIyOzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1wbHVzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjNDM7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLWV4ZWN1dGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiM2MTs8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlLCBnZXRTZXNzaW9uLCBzYXZlU2Vzc2lvbiB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9jYWxjdWxhdG9yLmh0bWxcIjtcclxuY29uc3QgQ0FMQ19FUVVBVElPTiA9IFwiRElEQUNULkNBTEMuRVFVQVRJT05cIjtcclxuY2xhc3MgQ2FsY3VsYXRvckNvbXBvbmVudCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJjYWxjdWxhdG9yLXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2sgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlICsgYnRuLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1uZWdhdGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpICogLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtZGVjaW1hbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSB0aGlzLmNhbGNFbnRyeS52YWx1ZSArIFwiLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLWRpdmlkZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiIC9cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbXVsdGlwbHlcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiAqXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW1pbnVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgLVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1wbHVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgK1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1leGVjdXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWF0aW9uID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHRsID0gdGhpcy5ldmFsdWF0ZUVxdWF0aW9uKGVxdWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gZXF1YXRpb24gKyBcIiA9IFwiICsgdHRsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uID0gbmV3IE9ic2VydmFibGUoZ2V0U2Vzc2lvbihDQUxDX0VRVUFUSU9OLCBcIlwiKSk7XHJcbiAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24uc3Vic2NyaWJlKCh2YWwpID0+IHNhdmVTZXNzaW9uKENBTENfRVFVQVRJT04sIHZhbCkpO1xyXG4gICAgICAgIHRoaXMuY2FsY0VudHJ5ID0gbmV3IE9ic2VydmFibGUoXCIwXCIpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYWxjLWJ1dHRvbnNcIik7XHJcbiAgICAgICAgYnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5idXR0b25DbGljayk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYWxjLWJ1dHRvbnNcIik7XHJcbiAgICAgICAgYnV0dG9uQXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5idXR0b25DbGljayk7XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUVxdWF0aW9uKGVxdWF0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZXFQYXJ0cyA9IGVxdWF0aW9uLnRyaW0oKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCB0dGwgPSBwYXJzZUZsb2F0KGVxUGFydHNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgZXFQYXJ0cy5sZW5ndGg7IHggKz0gMikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KGVxUGFydHNbeCArIDFdKTtcclxuICAgICAgICAgICAgY29uc3Qgb3AgPSBlcVBhcnRzW3hdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCArPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCAtPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCAqPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCAvPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR0bDtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RpZGFjdC1jYWxjdWxhdG9yJywgQ2FsY3VsYXRvckNvbXBvbmVudCk7XHJcbiIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UgfSBmcm9tIFwiLi4vZGlkYWN0L2NvbXBvbmVudGJhc2VcIjtcclxuY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCBoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGhpLmlubmVyVGV4dCA9IFwiSGVsbG8gV29ybGRcIjtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoaGkpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGVsbG8td29ybGQnLCBIZWxsb1dvcmxkKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwic2FtcGxlLWZvcm0tdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICBpbnB1dDppbnZhbGlkLHNlbGVjdDppbnZhbGlkIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAzLCAzKTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5mb3JtLWZpZWxkOmludmFsaWQgPiBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgY29sb3I6cmdiKDE1NiwzLDMpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmZvcm0tZmllbGR7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5mb3JtLWZpZWxkOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgZmxleDogMC40ZnI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZm9ybS1maWVsZDpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIGZsZXg6IDAuNmZyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmZvcm0tZm9vdGVyIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5idG4tcmVzZXQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuYnRuLXN1Ym1pdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8Zm9ybT5cXHJcXG4gICAgICAgIDxoMiBpZD1cXFwiZm9ybVRpdGxlXFxcIj48L2gyPlxcclxcbiAgICAgICAgPGZpZWxkc2V0PlxcclxcbiAgICAgICAgICAgIDxsZWdlbmQ+VmVoaWNsZSBEZXRhaWxzPC9sZWdlbmQ+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5WZWhpY2xlIFllYXI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWluPVxcXCIxOTIwXFxcIiBtYXg9XFxcIjIwMjFcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMVxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTp5ZWFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlZlaGljbGUgTWFrZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVxdWlyZWQgZGF0YS1iaW5kPVxcXCJvcHRpb25zOm1ha2VzLHZhbHVlOm1ha2VcXFwiIGRhdGEtb3B0aW9ucy1pZD1cXFwiaWRcXFwiIGRhdGEtb3B0aW9ucy10ZXh0PVxcXCJtYW51ZmFjdHVyZXJcXFwiIGRhdGEtb3B0aW9ucy1zZWxlY3Rvcj1cXFwiLSBQbGVhc2UgU2VsZWN0IGEgTWFudWZhY3R1cmVyIC1cXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+VmVoaWNsZSBDb2xvcjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVxcXCJvcHRpb25zOmNvbG9ycyx2YWx1ZTpjb2xvclxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2ZpZWxkc2V0PlxcclxcbiAgICAgICAgPGZpZWxkc2V0PlxcclxcbiAgICAgICAgICAgIDxsZWdlbmQ+UHVyY2hhc2UgRGV0YWlsczwvbGVnZW5kPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnR5PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6Y291bnR5XFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlB1cmNoYXNlIERhdGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImRhdGUtcGlja2VyXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOnB1cmNoYXNlRGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZWxpdmVyeSBEYXRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcImRhdGVcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6ZGVsaXZlcnlEYXRlXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuLXJlc2V0XFxcIiB0eXBlPVxcXCJyZXNldFxcXCI+Q2xlYXIgRm9ybTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi1zdWJtaXRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+U3VibWl0IEZvcm08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmltcG9ydCBodG1sIGZyb20gXCIuL3NhbXBsZWZvcm0uaHRtbFwiO1xyXG5jbGFzcyBTYW1wbGVGb3JtQ29tcG9uZW50IGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInNhbXBsZS1mb3JtLXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy55ZWFyLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbWFrZTogdGhpcy5tYWtlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHk6IHRoaXMuY291bnR5LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VEYXRlOiB0aGlzLnB1cmNoYXNlRGF0ZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5RGF0ZTogdGhpcy5kZWxpdmVyeURhdGUudmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gRGlzcGF0Y2ggYSBjdXN0b20gRXZlbnQgZm9yIGEgcGFyZW50IENvbXBvbmVudCAob3IgaW4gdGhpcyBjYXNlIHRoZSBwYWdlKSB0byBoYW5kbGVcclxuICAgICAgICAgICAgLy8gY29tcG9zZWQgbXVzdCBiZSB0cnVlIGluIG9yZGVyIGZvciB0aGlzIHRvIGF2YWlsYWJsZSBvdXRzaWRlIG91ciBjb21wb25lbnRcclxuICAgICAgICAgICAgLy8gSSBhbHNvIHNldCBidWJibGVzIHRvIHRydWUgc28gdGhhdCB0aGUgZXZlbnQgd2lsbCBnbyBhbGwgdGhlIHdheSB0byBkb2N1bWVudCByb290XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ2ZWhpY2xlcmVnaXN0ZXJlZFwiLCB7IGRldGFpbDogZGF0YSB9KSk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBpbmRleC5odG1sIGZvciB0aGUgbGlzdGVuZXIgZm9yIHRoaXMgZXZlbnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMueWVhciA9IG5ldyBPYnNlcnZhYmxlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLm1ha2UgPSBuZXcgT2JzZXJ2YWJsZShcIlwiKTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gbmV3IE9ic2VydmFibGUoXCJTaWx2ZXJcIik7XHJcbiAgICAgICAgdGhpcy5jb3VudHkgPSBuZXcgT2JzZXJ2YWJsZShcIlwiKTtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlRGF0ZSA9IG5ldyBPYnNlcnZhYmxlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApKTtcclxuICAgICAgICB0aGlzLmRlbGl2ZXJ5RGF0ZSA9IG5ldyBPYnNlcnZhYmxlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApKTtcclxuICAgICAgICB0aGlzLm1ha2VzID0gbmV3IE9ic2VydmFibGUoW1xyXG4gICAgICAgICAgICB7IGlkOiBcIlRPWVwiLCBtYW51ZmFjdHVyZXI6IFwiVG95b3RhXCIgfSxcclxuICAgICAgICAgICAgeyBpZDogXCJGT1JEXCIsIG1hbnVmYWN0dXJlcjogXCJGb3JkIE1vdG9yIENvcnAuXCIgfSxcclxuICAgICAgICAgICAgeyBpZDogXCJHTVwiLCBtYW51ZmFjdHVyZXI6IFwiR2VuZXJhbCBNb3RvcnNcIiB9LFxyXG4gICAgICAgICAgICB7IGlkOiBcIkJVSUNLXCIsIG1hbnVmYWN0dXJlcjogXCJCdWlja1wiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiSE9OREFcIiwgbWFudWZhY3R1cmVyOiBcIkhvbmRhXCIgfVxyXG4gICAgICAgIF0uc29ydCgobCwgcikgPT4gbC5tYW51ZmFjdHVyZXIubG9jYWxlQ29tcGFyZShyLm1hbnVmYWN0dXJlcikpKTtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IG5ldyBPYnNlcnZhYmxlKFtcIlJlZFwiLCBcIkJsdWVcIiwgXCJCbGFja1wiLCBcIlNpbHZlclwiLCBcIkJlaWdlXCIsIFwiR3JlZW5cIiwgXCJPcmFuZ2VcIiwgXCJZZWxsb3dcIl0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcImZvcm10aXRsZVwiXTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0Rm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0Rm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZm9ybXRpdGxlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1UaXRsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVGb3JtVGl0bGUodGl0bGUpIHtcclxuICAgICAgICBjb25zdCBmb3JtVGl0bGUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNmb3JtVGl0bGVcIik7XHJcbiAgICAgICAgaWYgKGZvcm1UaXRsZSkge1xyXG4gICAgICAgICAgICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInNhbXBsZS1mb3JtXCIsIFNhbXBsZUZvcm1Db21wb25lbnQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJ0aWN0YWN0b2UtdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICAudHR0LWdhbWUge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmVtIDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjI1ZnI7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50dHQtbWVzc2FnZSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgICAgICBjb2xvcjp5ZWxsb3dncmVlbjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMS4yZW07XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAucmVzZXRHYW1lIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50dHQtYm9hcmQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLzM7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCgxKXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoMil7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDMpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg0KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNSl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDYpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg3KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoOCl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDkpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0dHQtZ2FtZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0dHQtbWVzc2FnZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0Om1lc3NhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJyZXNldEdhbWVcXFwiPlJlc2V0PC9idXR0b24+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0dHQtYm9hcmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbMF1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIxXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbMV1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIyXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbMl1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIzXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbM11cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbNF1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI1XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbNV1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI2XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbNl1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI3XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbN11cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI4XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbOF1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSwgT2JzZXJ2YWJsZSwgQ29tcHV0ZWQgfSBmcm9tIFwiLi4vZGlkYWN0L2NvbXBvbmVudGJhc2VcIjtcclxuaW1wb3J0IGh0bWwgZnJvbSBcIi4vdGljdGFjdG9lLmh0bWxcIjtcclxuY2xhc3MgVGljVGFjVG9lR2FtZSBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0aWN0YWN0b2UtdGVtcGxhdGVcIiwgaHRtbCk7XHJcbiAgICAgICAgdGhpcy51c2VyUGlja2VkID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2LnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJnYW1lQ2VsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tidG4udmFsdWVdLnZhbHVlID0gdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPSBcIk9cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9IFwiWFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JXaW5zKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlc2V0R2FtZSA9IChldikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlID0gXCJYXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBuZXcgT2JzZXJ2YWJsZShcIlhcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IENvbXB1dGVkKCgpID0+IGAke3RoaXMuY3VycmVudFBsYXllci52YWx1ZX0ncyBUdXJuIWAsIFt0aGlzLmN1cnJlbnRQbGF5ZXJdKTtcclxuICAgICAgICB0aGlzLmNlbGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA5OyBjKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKG5ldyBPYnNlcnZhYmxlKFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudHR0LWJvYXJkXCIpO1xyXG4gICAgICAgIChfYSA9IGJvYXJkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXNlclBpY2tlZCk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5yZXNldEdhbWVcIik7XHJcbiAgICAgICAgKF9iID0gcmVzZXRCdXR0b24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEdhbWUpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgfVxyXG4gICAgY2hlY2tGb3JXaW5zKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbm5pbmcgQ29tYm9zIGFyZSAxLDIsM3w0LDUsNnw3LDgsOXwxLDUsOXwzLDUsN3wxLDQsN3wyLDUsOHwzLDYsOVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHdpbnMgPSBbXHJcbiAgICAgICAgICAgIFsxLCAyLCAzXSxcclxuICAgICAgICAgICAgWzQsIDUsIDZdLFxyXG4gICAgICAgICAgICBbNywgOCwgOV0sXHJcbiAgICAgICAgICAgIFsxLCA1LCA5XSxcclxuICAgICAgICAgICAgWzMsIDUsIDddLFxyXG4gICAgICAgICAgICBbMSwgNCwgN10sXHJcbiAgICAgICAgICAgIFsyLCA1LCA4XSxcclxuICAgICAgICAgICAgWzMsIDYsIDldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgd2lubmVyO1xyXG4gICAgICAgIHdpbnMuZm9yRWFjaCgoY29tYm8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMuY2VsbHNbY29tYm9bMF0gLSAxXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHRoaXMuY2VsbHNbY29tYm9bMV0gLSAxXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY2VsbHNbY29tYm9bMl0gLSAxXS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKGEgJiYgYiAmJiBjICYmIGEgPT0gYiAmJiBiID09IGMpIHtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYENvbmdyYXR1bGF0aW9ucyEgJHt3aW5uZXJ9IGhhcyB3b24gdGhlIGdhbWUuYCk7XHJcbiAgICAgICAgICAgIH0sIDE1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudHR0LWJvYXJkXCIpO1xyXG4gICAgICAgIChfYSA9IGJvYXJkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXNlclBpY2tlZCk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5yZXNldEdhbWVcIik7XHJcbiAgICAgICAgKF9iID0gcmVzZXRCdXR0b24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEdhbWUpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkaWRhY3QtdGljdGFjdG9lXCIsIFRpY1RhY1RvZUdhbWUpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJ0b2RvLWxpc3QtdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICAudG9kby1oZWFkZXIge1xcclxcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50b2RvLXN0YXR1cyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby1saXN0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMC41ZW0gc29saWQgIzMzMztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tYXJlYSB7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvZG8tc3RhdHVzXFxcIj5Ub3RhbCBJdGVtczogXFxyXFxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OnRvZG9Db3VudFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ0b2RvLXNvcnRcXFwiPlNvcnQgVG9nZ2xlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ0b2RvLWhpZGVcXFwiPlNob3cgLyBIaWRlIENvbXBsZXRlZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWFyZWFcXFwiIGRhdGEtYmluZD1cXFwiY2hpbGRyZW46dG9kb0l0ZW1zXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48dGVtcGxhdGUgaWQ9XFxcInRvZG8taXRlbS10ZW1wbGF0ZVxcXCI+XFxyXFxuICAgIDxzdHlsZT5cXHJcXG4gICAgICAgIC50b2RvLWl0ZW0ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby1jaGVjayB7XFxyXFxuICAgICAgICAgICAgZmxleDogLjI1O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tdGV4dCB7XFxyXFxuICAgICAgICAgICAgZmxleDogLjc1O1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwidG9kby1jaGVja1xcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOmNvbXBsZXRlZFxcXCIgLz5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2RvLXRleHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0b2RvVGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlLCBzZXJ2ZXJKc29uLCBDb21wdXRlZCB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi90b2RvLmh0bWxcIjtcclxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwidG9kby1saXN0LXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMuc29ydFRvZG9zID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNjXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ID0gXCJkZXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydCA9IFwiYXNjXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc29ydCA9PT0gXCJhc2NcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRvZG9UaXRsZS52YWx1ZS5sb2NhbGVDb21wYXJlKGIudG9kb1RpdGxlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnRvZG9UaXRsZS52YWx1ZS5sb2NhbGVDb21wYXJlKGEudG9kb1RpdGxlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLm5vdGlmeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b2dnbGVDb21wbGV0ZWQgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhpZGRlbiA9ICF0aGlzLmNvbXBsZXRlSGlkZGVuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZUhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUgPSB0aGlzLnRvZG9JdGVtcy52YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uY29tcGxldGVkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbXBsZXRlZCBpdGVtcyBub3QgaW4gdGhlIGxpc3QgYmFja1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9BZGQgPSB0aGlzLmRhdGEuZmlsdGVyKGkgPT4gaS5jb21wbGV0ZWQgJiYgdGhpcy50b2RvSXRlbXMudmFsdWUuaW5kZXhPZihpKSA9PSAtMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUuc3BsaWNlKHRoaXMudG9kb0l0ZW1zLnZhbHVlLmxlbmd0aCwgMCwgLi4udG9BZGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLm5vdGlmeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZShbXSk7XHJcbiAgICAgICAgdGhpcy5zb3J0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlSGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2RvQ291bnQgPSBuZXcgQ29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMudmFsdWUubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSwgW3RoaXMudG9kb0l0ZW1zXSk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50b2RvLXNvcnRcIik7XHJcbiAgICAgICAgKF9hID0gc29ydEJ0bikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNvcnRUb2Rvcyk7XHJcbiAgICAgICAgY29uc3QgaGlkZUJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8taGlkZVwiKTtcclxuICAgICAgICAoX2IgPSBoaWRlQnRuKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlQ29tcGxldGVkKTtcclxuICAgICAgICB0aGlzLmxvYWRUb2RvcygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbG9hZFRvZG9zKCkge1xyXG4gICAgICAgIC8vIExvYWQgRGF0YVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2RvcycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgY2FjaGU6ICduby1zdG9yZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJUb2RvcyA9IGF3YWl0IHNlcnZlckpzb24ocmVxKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBzZXJ2ZXJUb2Rvcy5tYXAoKHRvZG8pID0+IG5ldyBUb2RvSXRlbSh0b2RvKSk7XHJcbiAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUgPSB0aGlzLmRhdGEuc2xpY2UoKTtcclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50b2RvLXNvcnRcIik7XHJcbiAgICAgICAgKF9hID0gc29ydEJ0bikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNvcnRUb2Rvcyk7XHJcbiAgICAgICAgY29uc3QgaGlkZUJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8taGlkZVwiKTtcclxuICAgICAgICAoX2IgPSBoaWRlQnRuKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlQ29tcGxldGVkKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoaXRlbSkge1xyXG4gICAgICAgIHN1cGVyKFwidG9kby1pdGVtLXRlbXBsYXRlXCIpO1xyXG4gICAgICAgIHRoaXMudG9kb1RpdGxlID0gbmV3IE9ic2VydmFibGUoaXRlbS50aXRsZSk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBuZXcgT2JzZXJ2YWJsZShpdGVtLmNvbXBsZXRlZCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MoKTtcclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0b2RvLWxpc3RcIiwgVG9kb0xpc3QpO1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0b2RvLWl0ZW1cIiwgVG9kb0l0ZW0pO1xyXG4iLCIvKipcclxuICogYmluZGluZ3MgY29udGFpbnMgc2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGJpbmRcclxuICogYW4gZWxlbWVudCB0byBhbnkgb2JzZXJ2YWJsZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uXHJcbiAqIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bmJpbmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBiaW5kaW5ncyA9IHtcclxuICAgIHZhbHVlOiAoaW5wdXQsIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiBpbnB1dC52YWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlT2JzID0gKCkgPT4gb2JzZXJ2YWJsZS52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUlucHV0KTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB0ZXh0OiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4gZWxlbS5pbm5lclRleHQgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBodG1sOiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4gZWxlbS5pbm5lckhUTUwgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjaGVja2VkOiAoaW5wdXQsIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSAhPT0gXCJjaGVja2JveFwiKVxyXG4gICAgICAgICAgICB0aHJvdyBcImNoZWNrZWQgYmluZGluZyBjYW4gb25seSBiZSB1c2VkIG9uIGNoZWNrYm94ZXNcIjtcclxuICAgICAgICAvLyBzZXQgRGVmYXVsdFxyXG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSAob2JzZXJ2YWJsZS52YWx1ZSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXBkYXRlT2JzID0gKCkgPT4gb2JzZXJ2YWJsZS52YWx1ZSA9IGlucHV0LmNoZWNrZWQ7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZUlucHV0KTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY2hpbGRyZW46IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZSBhIGxvdCBzbWFydGVyIGFuZCBlZmZpY2llbnRcclxuICAgICAgICBjb25zdCB1cGRhdGVDaGlsZHJlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB3aGlsZSAoZWxlbS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgbmV3IGNoaWxkcmVuIGluIG9yZGVyXHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudmFsdWUuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUNoaWxkcmVuKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZUNoaWxkcmVuKTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IChzZWxlY3QsIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0LnRhZ05hbWUgIT09IFwiU0VMRUNUXCIpXHJcbiAgICAgICAgICAgIHRocm93IFwib3B0aW9ucyBiaW5kaW5nIGNhbiBvbmx5IGJlIHVzZWQgb24gU0VMRUNUXCI7XHJcbiAgICAgICAgY29uc3QgZ2V0VmFsdWUgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3QuZGF0YXNldFtcIm9wdGlvbnNJZFwiXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbFtzZWxlY3QuZGF0YXNldFtcIm9wdGlvbnNJZFwiXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBnZXRUZXh0ID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0LmRhdGFzZXRbXCJvcHRpb25zVGV4dFwiXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbFtzZWxlY3QuZGF0YXNldFtcIm9wdGlvbnNUZXh0XCJdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgY2hpbGRyZW5cclxuICAgICAgICAgICAgd2hpbGUgKHNlbGVjdC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5yZW1vdmVDaGlsZChzZWxlY3QubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBZGQgc2VsZWN0b3JcclxuICAgICAgICAgICAgaWYgKHNlbGVjdC5kYXRhc2V0W1wib3B0aW9uc1NlbGVjdG9yXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobmV3IE9wdGlvbihzZWxlY3QuZGF0YXNldFtcIm9wdGlvbnNTZWxlY3RvclwiXSwgXCJcIiwgdHJ1ZSwgc2VsZWN0LnZhbHVlID09PSBcIlwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYWRkIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0VmFsdWUgPSBnZXRWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG5ldyBPcHRpb24oZ2V0VGV4dCh2YWwpLCBvcHRWYWx1ZSwgZmFsc2UsIHNlbGVjdC52YWx1ZSA9PT0gb3B0VmFsdWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvKiBZb3UgYWRkIG1vcmUgaGVyZSAqL1xyXG59O1xyXG4iLCJpbXBvcnQgeyBiaW5kaW5ncyB9IGZyb20gXCIuL2JpbmRpbmdzXCI7XHJcbmV4cG9ydCB7IE9ic2VydmFibGUsIENvbXB1dGVkIH0gZnJvbSBcIi4vb2JzZXJ2YWJsZVwiO1xyXG5leHBvcnQgeyBzYXZlTG9jYWwsIHNhdmVTZXNzaW9uLCBzZXJ2ZXJKc29uLCBnZXRMb2NhbCwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuL2RhdGFcIjtcclxuLyoqXHJcbiAqIEZpbmRzIGEgU3Vic2NyaWJhYmxlIG9uIGFuIE9iamVjdCBieSBpbnNwZWN0aW5nIGl0J3MgcHJvcGVydGllc1xyXG4gKiBAcGFyYW0gdGhpcyBPYmplY3QgdG8gZmluZCBhIFByb3BlcnR5IE9uXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBTdHJpbmcgUmVwcmVzZW50YXRpb24gb2YgdGhlIFByb3BlcnR5XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPYnNlcnZhYmxlKHByb3BOYW1lKSB7XHJcbiAgICBpZiAocHJvcE5hbWUuaW5kZXhPZihcIltcIikgPiAwICYmIHByb3BOYW1lLmluZGV4T2YoXCJdXCIpID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGFyclByb3AgPSBwcm9wTmFtZS5yZXBsYWNlKCddJywgJycpLnNwbGl0KFwiW1wiKTtcclxuICAgICAgICBpZiAoYXJyUHJvcC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJhYmxlID0gdGhpc1thcnJQcm9wWzBdXVthcnJQcm9wWzFdXTtcclxuICAgICAgICAgICAgaWYgKHN1YnNjcmliYWJsZSAmJiBzdWJzY3JpYmFibGUuc3Vic2NyaWJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJhYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbcHJvcE5hbWVdICYmIHRoaXNbcHJvcE5hbWVdLnN1YnNjcmliZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW3Byb3BOYW1lXTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWRhY3RDb21wb25lbnRCYXNlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGEgRGlkYWN0IENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIHRlbXBsYXRlSWQgdGhlIFRlbXBsYXRlIElEIGZvciB0aGUgQ29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0gaHRtbCB0aGUgSFRNTCBpbmNsdWRpbmcgdGhlIHRlbXBsYXRlIHRhZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZUlkLCBodG1sKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYXBwbGllcyBiaW5kaW5nIGxvZ2ljIHRvIGFsbCBlbGVtZW50c1xyXG4gICAgICAgICAqIHdpdGggYSBkYXRhLWJpbmQgYXR0cmlidXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hcHBseUJpbmRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1iaW5kXVwiKS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRMaXN0ID0gKF9hID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgKF9iID0gYmluZExpc3QpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChiaW5kaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2JpbmRlclR5cGUsIHByb3BOYW1lXSA9IGJpbmRpbmcuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kZXIgPSBiaW5kaW5nc1tiaW5kZXJUeXBlXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYnMgPSBnZXRPYnNlcnZhYmxlLmNhbGwodGhpcywgcHJvcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYmluZGVyICYmICFvYnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYmluZGluZyBbJHtiaW5kaW5nfV0gY291bGQgbm90IGJlIGFkZGVkLiBUaGVyZSBpcyBubyBzdWNoIGJpbmRpbmcgdHlwZSBvciBvYnNlcnZhYmxlIHByb3BlcnR5LmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghYmluZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGJpbmRpbmcgWyR7YmluZGluZ31dIGNvdWxkIG5vdCBiZSBhZGRlZC4gVGhlcmUgaXMgbm8gc3VjaCBiaW5kaW5nIHR5cGUuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFvYnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYmluZGluZyBbJHtiaW5kaW5nfV0gY291bGQgbm90IGJlIGFkZGVkLiBUaGVyZSBpcyBubyBzdWNoIG9ic2VydmFibGUgcHJvcGVydHkuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kZXIgJiYgb2JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmluZGluZ3MucHVzaChiaW5kZXIoZWxlbSwgb2JzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVtb3ZlcyBiaW5kaW5nIGxvZ2ljIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgKHRoaXMuYWN0aXZlQmluZGluZ3MpLmZvckVhY2gocmVtb3ZlQmluZGluZyA9PiByZW1vdmVCaW5kaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICAgICAgICAgIGlmICghdGVtcGwgJiYgaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgICAgICAgaWYgKCF0ZW1wbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCBhIDx0ZW1wbGF0ZT4gd2l0aCBpZD1cIiR7dGVtcGxhdGVJZH1cIiBgKTtcclxuICAgICAgICAgICAgICAgIHRocm93ICdDb21wb25lbnQgaXMgTWlzc2luZyBUZW1wbGF0ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKF9hID0gdGhpcy5zaGFkb3dSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQodGVtcGwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBDb25uZWN0ZWQgQ2FsbGJhY2sgLSBqdXN0IGNhbGxzIGFwcGx5QmluZGluZ3MoKTtcclxuICAgICAqL1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseUJpbmRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgRGlzY29ubmVjdGVkIENhbGxiYWNrIC0ganVzdCBjYWxscyByZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgICovXHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGZvciB3aGVuIEF0dHJpYnV0ZSBjaGFuZ2VzIC0gbm8gaW1wbGVtZW50aW9uIHByb3ZpZGVkXHJcbiAgICAgKiB5b3UgbXVzdCBpbXBsZW1lbnRcclxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgKiAgICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKTogc3RyaW5nW11cclxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgKiBvbiB5b3VyIGNsYXNzIGZvciB0aGlzIHRvIGJlIGNhbGxlZFxyXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiBBdHRyaWJ1dGUgdGhhdCBjaGFuZ2VkXHJcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUgb2xkIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gbmV3VmFsdWUgbmV3IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXRGcm9tKHN0b3JlLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGNvbnN0IGpzb24gPSBzdG9yZS5nZXRJdGVtKG5hbWUpO1xyXG4gICAgaWYgKGpzb24gPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzYXZlVG8oc3RvcmUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgc3RvcmUuc2V0SXRlbShuYW1lLCBqc29uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0b3JlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSXRlbSBmcm9tIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIGlmIG5vdCBwcm92aWRlZCByZXR1cm5zIG51bGxcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBJdGVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKHNlc3Npb25TdG9yYWdlLCBuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4vKipcclxuICogU2F2ZXMgYW4gSXRlbSBpbnRvIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gdmFsdWUgTmV3IFZhbHVlIHRvIGJlIFN0b3JlZFxyXG4gKiBAcmV1cm5zIFByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50bHkgc3RvcmVkIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZVNlc3Npb24gPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhzZXNzaW9uU3RvcmFnZSwgbmFtZSwgdmFsdWUpO1xyXG4vKipcclxuICogUmV0dXJucyBhbiBJdGVtIGZyb20gTG9jYWwgU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIHJldHVybnMgbnVsbFxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEl0ZW0sIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0TG9jYWwgPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKGxvY2FsU3RvcmFnZSwgbmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuLyoqXHJcbiAqIFNhdmVzIGFuIEl0ZW0gaW50byBMb2NhbCBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSB2YWx1ZSBOZXcgVmFsdWUgdG8gYmUgU3RvcmVkXHJcbiAqIEByZXVybnMgUHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnRseSBzdG9yZWQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlTG9jYWwgPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhsb2NhbFN0b3JhZ2UsIG5hbWUsIHZhbHVlKTtcclxuLyoqXHJcbiAqIEhlbHBlciB0byBFeGVjdXRlIFByb21pc2UgYW5kIGluc3BlY3QgdGhlIHJlc3BvbnNlIENvZGVcclxuICogQHBhcmFtIHJlcXVlc3QgdGhlIFJlcXVlc3QgdG8gc2VuZCAoZS5nLiBuZXcgUmVxdWVzdCgndXJsJykpXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGRhdGEuIFJlamVjdHMgaWYgbm90IGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2ZXJKc29uKHJlcXVlc3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobXNnKSA9PiByZWplY3QobXNnKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gcmVqZWN0KHJlYXNvbikpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENsYXNzIHRoYXQgbGV0cyB1cyBvYnNlcnZlIGEgdmFsdWUgZm9yIGNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBub3RpZnkoKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIodGhpcy5fdmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHNob3VsZCBub3QgYmUgY2FsbGVkIGFueSBsb25nZXIgd2hlbiB0aGUgdmFsdWUgdXBkYXRlc1xyXG4gICAgICovXHJcbiAgICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UodGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqIE5vdGlmeWluZyBhbnkgU3Vic2NyaWJlciBpZiB0aGUgdmFsdWUgaXMgbmV3XHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWxsb3dzIGNvbXBvc2l0aW9uIG9mIGEgdmFsdWUgYmFzZWQgdXBvbiBvYnNlcnZpbmcgb3RoZXIgY2hhbmdlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXB1dGVkIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBOZXcgQ29tcHV0ZWQgVmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBGdW5jdGlvbiB0aGUgcmVzdWx0cyBpbiB0aGUgVmFsdWVcclxuICAgICAqIEBwYXJhbSBkZXBzIE9ic2VydmFibGVzIHRoYXQgdHJpZ2dlciB0aGlzIENvbXB1dGVkIHRvIFVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZGVwcykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlKCkpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC5zdWJzY3JpYmUobGlzdGVuZXIpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgQ29tcHV0ZWQgUmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE5vdCBwb3NzaWJsZSB0byBzZXQgdmFsdWUgb2YgQ29tcHV0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbHVlKF8pIHtcclxuICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgY29tcHV0ZWQgcHJvcGVydHlcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9