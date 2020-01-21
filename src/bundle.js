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




/***/ }),

/***/ "./src/components/calculator.html":
/*!****************************************!*\
  !*** ./src/components/calculator.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template id=\"calculator-template\">\r\n    <style>\r\n        .calc-container {\r\n            display:grid;\r\n            font-family: sans-serif;\r\n            font-size:3em;\r\n            grid-template-columns: 1fr;\r\n            grid-template-rows: 0.7em 1.5em 4fr;\r\n            min-height: 500px;\r\n            min-width: 400px;\r\n        }\r\n        .calc-equation {\r\n            background-color: #333;\r\n            color: #eee;\r\n            grid-row: 1;\r\n            font-size: 0.5em;\r\n            text-align: right;\r\n        }\r\n        .calc-result {\r\n            background-color: #111;\r\n            color: #fff;\r\n            grid-row: 2;\r\n            font-size: 1.2em;\r\n            text-align: right;\r\n        }\r\n        .calc-buttons {\r\n            grid-row: 3;\r\n            display:grid;\r\n            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n            grid-template-rows: 1fr 1fr 1fr 1fr;\r\n        }\r\n        button {\r\n            font-size: 1em;\r\n        }\r\n        .calc-number:nth-child(1) {\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(2) {\r\n            grid-row: 1;\r\n            grid-column: 2;\r\n        }\r\n        .calc-number:nth-child(3) {\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .calc-number:nth-child(4) {\r\n            grid-row: 2;\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(5) {\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .calc-number:nth-child(6) {\r\n            grid-row: 2;\r\n            grid-column: 1;\r\n        }\r\n        .calc-number:nth-child(7) {\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(8) {\r\n            grid-row: 3;\r\n            grid-column: 2;\r\n        }\r\n        .calc-number:nth-child(9) {\r\n            grid-row: 3;\r\n            grid-column: 1;\r\n        }\r\n        .calc-decimal {\r\n            grid-row: 4;\r\n            grid-column: 3;\r\n        }\r\n        .calc-number:nth-child(10) {\r\n            grid-row: 4;\r\n            grid-column: 2;\r\n        }\r\n        .calc-negate {\r\n            grid-row: 4;\r\n            grid-column: 1;\r\n        }\r\n        .calc-execute {\r\n            grid-row: 1 / 5;\r\n            grid-column: 5;\r\n        }\r\n    </style>\r\n<div class=\"calc-container\">\r\n    <div class=\"calc-equation\" data-bind=\"text:calcEquation\"></div>\r\n    <div class=\"calc-result\" data-bind=\"text:calcEntry\">0</div>\r\n    <div class=\"calc-buttons\">\r\n        <button class=\"calc-number\" value=\"9\" type=\"button\">9</button>\r\n        <button class=\"calc-number\" value=\"8\" type=\"button\">8</button>\r\n        <button class=\"calc-number\" value=\"7\" type=\"button\">7</button>\r\n        <button class=\"calc-number\" value=\"6\" type=\"button\">6</button>\r\n        <button class=\"calc-number\" value=\"5\" type=\"button\">5</button>\r\n        <button class=\"calc-number\" value=\"4\" type=\"button\">4</button>\r\n        <button class=\"calc-number\" value=\"3\" type=\"button\">3</button>\r\n        <button class=\"calc-number\" value=\"2\" type=\"button\">2</button>\r\n        <button class=\"calc-number\" value=\"1\" type=\"button\">1</button>\r\n        <button class=\"calc-number\" value=\"0\" type=\"button\">0</button>\r\n        <button class=\"calc-negate\" type=\"button\">+/-</button>\r\n        <button class=\"calc-decimal\" type=\"button\">.</button>\r\n        <button class=\"calc-divide\" type=\"button\">&#247;</button>\r\n        <button class=\"calc-multiply\" type=\"button\">&#215;</button>\r\n        <button class=\"calc-minus\" type=\"button\">&#8722;</button>\r\n        <button class=\"calc-plus\" type=\"button\">&#43;</button>\r\n        <button class=\"calc-execute\" type=\"button\">&#61;</button>\r\n    </div>\r\n</div>\r\n</template>";

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
        this.calcEquation = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("");
        this.calcEntry = new _didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["Observable"]("0");
        this.clearEquationOnNext = true;
    }
    connectedCallback() {
        this.applyBindings();
        const buttonArea = this.shadowRoot.querySelector(".calc-buttons");
        buttonArea.addEventListener("click", this.buttonClick);
    }
    disconnectedCallback() {
        this.removeBindings();
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
                    if (!this[propName] || !this[propName].subscribe) {
                        console.warn(`The binding [${binding}] could not be added. There is not such observable property.`);
                    }
                    else if (binderType in _bindings__WEBPACK_IMPORTED_MODULE_0__["bindings"]) {
                        this.activeBindings.push(_bindings__WEBPACK_IMPORTED_MODULE_0__["bindings"][binderType](elem, this[propName]));
                    }
                    else {
                        console.warn(`The binding [${binding}] could not be added. There is not such binding type.`);
                        return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvYmluZGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9jb21wb25lbnRiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L29ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7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QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVsbG93b3JsZFwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FsY3VsYXRvclwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJjYWxjdWxhdG9yLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLmNhbGMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOjNlbTtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2VtIDEuNWVtIDRmcjtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtZXF1YXRpb24ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNlZWU7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLXJlc3VsdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDcpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoOCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg5KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1kZWNpbWFsIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMTApIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW5lZ2F0ZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1leGVjdXRlIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDU7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIDwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FsYy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjLWVxdWF0aW9uXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2FsY0VxdWF0aW9uXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FsYy1yZXN1bHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjYWxjRW50cnlcXFwiPjA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FsYy1idXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiOVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj45PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjhcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+ODwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI3XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjc8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiNlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj42PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiM1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4zPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIxXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiMFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4wPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW5lZ2F0ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4rLy08L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtZGVjaW1hbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4uPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLWRpdmlkZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzI0Nzs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbXVsdGlwbHlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiMyMTU7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW1pbnVzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjODcyMjs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtcGx1c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzQzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1leGVjdXRlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjNjE7PC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSwgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9jYWxjdWxhdG9yLmh0bWxcIjtcclxuY2xhc3MgQ2FsY3VsYXRvckNvbXBvbmVudCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJjYWxjdWxhdG9yLXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2sgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlICsgYnRuLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1uZWdhdGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpICogLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtZGVjaW1hbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSB0aGlzLmNhbGNFbnRyeS52YWx1ZSArIFwiLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLWRpdmlkZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiIC9cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbXVsdGlwbHlcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiAqXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW1pbnVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgLVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1wbHVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgK1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1leGVjdXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWF0aW9uID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHRsID0gdGhpcy5ldmFsdWF0ZUVxdWF0aW9uKGVxdWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gZXF1YXRpb24gKyBcIiA9IFwiICsgdHRsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uID0gbmV3IE9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5jYWxjRW50cnkgPSBuZXcgT2JzZXJ2YWJsZShcIjBcIik7XHJcbiAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYWxjLWJ1dHRvbnNcIik7XHJcbiAgICAgICAgYnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5idXR0b25DbGljayk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhbGMtYnV0dG9uc1wiKTtcclxuICAgICAgICBidXR0b25BcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJ1dHRvbkNsaWNrKTtcclxuICAgIH1cclxuICAgIGV2YWx1YXRlRXF1YXRpb24oZXF1YXRpb24pIHtcclxuICAgICAgICBjb25zdCBlcVBhcnRzID0gZXF1YXRpb24udHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IHR0bCA9IHBhcnNlRmxvYXQoZXFQYXJ0c1swXSk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCBlcVBhcnRzLmxlbmd0aDsgeCArPSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQoZXFQYXJ0c1t4ICsgMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBvcCA9IGVxUGFydHNbeF07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3ApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsICs9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsIC09IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsICo9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsIC89IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHRsO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGlkYWN0LWNhbGN1bGF0b3InLCBDYWxjdWxhdG9yQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5jbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgaGkuaW5uZXJUZXh0ID0gXCJIZWxsbyBXb3JsZFwiO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChoaSk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWxsby13b3JsZCcsIEhlbGxvV29ybGQpO1xyXG4iLCIvKipcclxuICogYmluZGluZ3MgY29udGFpbnMgc2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGJpbmRcclxuICogYW4gZWxlbWVudCB0byBhbnkgb2JzZXJ2YWJsZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uXHJcbiAqIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bmJpbmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBiaW5kaW5ncyA9IHtcclxuICAgIHZhbHVlOiAoaW5wdXQsIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiBpbnB1dC52YWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlT2JzID0gKCkgPT4gb2JzZXJ2YWJsZS52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUlucHV0KTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB0ZXh0OiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4gZWxlbS5pbm5lclRleHQgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBodG1sOiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4gZWxlbS5pbm5lckhUTUwgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qIFlvdSBhZGQgbW9yZSBoZXJlICovXHJcbn07XHJcbiIsImltcG9ydCB7IGJpbmRpbmdzIH0gZnJvbSBcIi4vYmluZGluZ3NcIjtcclxuZXhwb3J0IHsgT2JzZXJ2YWJsZSwgQ29tcHV0ZWQgfSBmcm9tIFwiLi9vYnNlcnZhYmxlXCI7XHJcbmV4cG9ydCB7IHNhdmVMb2NhbCwgc2F2ZVNlc3Npb24sIHNlcnZlckpzb24sIGdldExvY2FsLCBnZXRTZXNzaW9uIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5leHBvcnQgY2xhc3MgRGlkYWN0Q29tcG9uZW50QmFzZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIERpZGFjdCBDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIHRoZSBUZW1wbGF0ZSBJRCBmb3IgdGhlIENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIGh0bWwgdGhlIEhUTUwgaW5jbHVkaW5nIHRoZSB0ZW1wbGF0ZSB0YWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVJZCwgaHRtbCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFwcGxpZXMgYmluZGluZyBsb2dpYyB0byBhbGwgZWxlbWVudHNcclxuICAgICAgICAgKiB3aXRoIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmluZF1cIikuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5kTGlzdCA9IChfYSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGJpbmRMaXN0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYmluZGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtiaW5kZXJUeXBlLCBwcm9wTmFtZV0gPSBiaW5kaW5nLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3Byb3BOYW1lXSB8fCAhdGhpc1twcm9wTmFtZV0uc3Vic2NyaWJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGJpbmRpbmcgWyR7YmluZGluZ31dIGNvdWxkIG5vdCBiZSBhZGRlZC4gVGhlcmUgaXMgbm90IHN1Y2ggb2JzZXJ2YWJsZSBwcm9wZXJ0eS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYmluZGVyVHlwZSBpbiBiaW5kaW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzLnB1c2goYmluZGluZ3NbYmluZGVyVHlwZV0oZWxlbSwgdGhpc1twcm9wTmFtZV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGJpbmRpbmcgWyR7YmluZGluZ31dIGNvdWxkIG5vdCBiZSBhZGRlZC4gVGhlcmUgaXMgbm90IHN1Y2ggYmluZGluZyB0eXBlLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVtb3ZlcyBiaW5kaW5nIGxvZ2ljIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgKHRoaXMuYWN0aXZlQmluZGluZ3MpLmZvckVhY2gocmVtb3ZlQmluZGluZyA9PiByZW1vdmVCaW5kaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICAgICAgICAgIGlmICghdGVtcGwgJiYgaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgICAgICAgaWYgKCF0ZW1wbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCBhIDx0ZW1wbGF0ZT4gd2l0aCBpZD1cIiR7dGVtcGxhdGVJZH1cIiBgKTtcclxuICAgICAgICAgICAgICAgIHRocm93ICdDb21wb25lbnQgaXMgTWlzc2luZyBUZW1wbGF0ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKF9hID0gdGhpcy5zaGFkb3dSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQodGVtcGwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXRGcm9tKHN0b3JlLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGNvbnN0IGpzb24gPSBzdG9yZS5nZXRJdGVtKG5hbWUpO1xyXG4gICAgaWYgKGpzb24gPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzYXZlVG8oc3RvcmUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgc3RvcmUuc2V0SXRlbShuYW1lLCBqc29uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0b3JlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSXRlbSBmcm9tIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIGlmIG5vdCBwcm92aWRlZCByZXR1cm5zIG51bGxcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBJdGVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKHNlc3Npb25TdG9yYWdlLCBuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4vKipcclxuICogU2F2ZXMgYW4gSXRlbSBpbnRvIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gdmFsdWUgTmV3IFZhbHVlIHRvIGJlIFN0b3JlZFxyXG4gKiBAcmV1cm5zIFByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50bHkgc3RvcmVkIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZVNlc3Npb24gPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhzZXNzaW9uU3RvcmFnZSwgbmFtZSwgdmFsdWUpO1xyXG4vKipcclxuICogUmV0dXJucyBhbiBJdGVtIGZyb20gTG9jYWwgU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIHJldHVybnMgbnVsbFxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEl0ZW0sIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0TG9jYWwgPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKGxvY2FsU3RvcmFnZSwgbmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuLyoqXHJcbiAqIFNhdmVzIGFuIEl0ZW0gaW50byBMb2NhbCBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSB2YWx1ZSBOZXcgVmFsdWUgdG8gYmUgU3RvcmVkXHJcbiAqIEByZXVybnMgUHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnRseSBzdG9yZWQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlTG9jYWwgPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhsb2NhbFN0b3JhZ2UsIG5hbWUsIHZhbHVlKTtcclxuLyoqXHJcbiAqIEhlbHBlciB0byBFeGVjdXRlIFByb21pc2UgYW5kIGluc3BlY3QgdGhlIHJlc3BvbnNlIENvZGVcclxuICogQHBhcmFtIHJlcXVlc3QgdGhlIFJlcXVlc3QgdG8gc2VuZCAoZS5nLiBuZXcgUmVxdWVzdCgndXJsJykpXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGRhdGEuIFJlamVjdHMgaWYgbm90IGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2ZXJKc29uKHJlcXVlc3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobXNnKSA9PiByZWplY3QobXNnKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gcmVqZWN0KHJlYXNvbikpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENsYXNzIHRoYXQgbGV0cyB1cyBvYnNlcnZlIGEgdmFsdWUgZm9yIGNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBub3RpZnkoKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIodGhpcy5fdmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHNob3VsZCBub3QgYmUgY2FsbGVkIGFueSBsb25nZXIgd2hlbiB0aGUgdmFsdWUgdXBkYXRlc1xyXG4gICAgICovXHJcbiAgICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UodGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqIE5vdGlmeWluZyBhbnkgU3Vic2NyaWJlciBpZiB0aGUgdmFsdWUgaXMgbmV3XHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWxsb3dzIGNvbXBvc2l0aW9uIG9mIGEgdmFsdWUgYmFzZWQgdXBvbiBvYnNlcnZpbmcgb3RoZXIgY2hhbmdlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXB1dGVkIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBOZXcgQ29tcHV0ZWQgVmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBGdW5jdGlvbiB0aGUgcmVzdWx0cyBpbiB0aGUgVmFsdWVcclxuICAgICAqIEBwYXJhbSBkZXBzIE9ic2VydmFibGVzIHRoYXQgdHJpZ2dlciB0aGlzIENvbXB1dGVkIHRvIFVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZGVwcykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlKCkpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC5zdWJzY3JpYmUobGlzdGVuZXIpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgQ29tcHV0ZWQgUmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE5vdCBwb3NzaWJsZSB0byBzZXQgdmFsdWUgb2YgQ29tcHV0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbHVlKF8pIHtcclxuICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgY29tcHV0ZWQgcHJvcGVydHlcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9