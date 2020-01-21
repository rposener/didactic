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
            alert(`Congratulations! ${winner} has won the game.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2JpbmRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvY29tcG9uZW50YmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDQTtBQUNEOzs7Ozs7Ozs7Ozs7QUNGaEMsbUdBQW1HLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLHdDQUF3Qyw4QkFBOEIsMkNBQTJDLG9EQUFvRCxrQ0FBa0MsaUNBQWlDLGFBQWEsNEJBQTRCLHVDQUF1Qyw0QkFBNEIsNEJBQTRCLGlDQUFpQyxrQ0FBa0MsYUFBYSwwQkFBMEIsdUNBQXVDLDRCQUE0Qiw0QkFBNEIsaUNBQWlDLGtDQUFrQyxhQUFhLDJCQUEyQiw0QkFBNEIsNkJBQTZCLDJEQUEyRCxvREFBb0QsYUFBYSxvQkFBb0IsK0JBQStCLGFBQWEsdUNBQXVDLCtCQUErQixhQUFhLHVDQUF1Qyw0QkFBNEIsK0JBQStCLGFBQWEsdUNBQXVDLDRCQUE0QiwrQkFBK0IsYUFBYSx1Q0FBdUMsNEJBQTRCLCtCQUErQixhQUFhLHVDQUF1Qyw0QkFBNEIsK0JBQStCLGFBQWEsdUNBQXVDLDRCQUE0QiwrQkFBK0IsYUFBYSx1Q0FBdUMsNEJBQTRCLCtCQUErQixhQUFhLHVDQUF1Qyw0QkFBNEIsK0JBQStCLGFBQWEsdUNBQXVDLDRCQUE0QiwrQkFBK0IsYUFBYSwyQkFBMkIsNEJBQTRCLCtCQUErQixhQUFhLHdDQUF3Qyw0QkFBNEIsK0JBQStCLGFBQWEsMEJBQTBCLDRCQUE0QiwrQkFBK0IsYUFBYSwyQkFBMkIsZ0NBQWdDLCtCQUErQixhQUFhLG10Q0FBbXRDLDJFQUEyRSx5RUFBeUUsc0VBQXNFLHlFQUF5RSxrRDs7Ozs7Ozs7Ozs7O0FDQS82SDtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUM5RDtBQUNyQztBQUNBLGtDQUFrQyx5RUFBbUI7QUFDckQ7QUFDQSxxQ0FBcUMsdURBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0VBQVUsQ0FBQyx3RUFBVTtBQUNyRCw2Q0FBNkMseUVBQVc7QUFDeEQsNkJBQTZCLGdFQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQUE7QUFBOEQ7QUFDOUQseUJBQXlCLHlFQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSw0RkFBNEYsNkJBQTZCLDRCQUE0Qiw4QkFBOEIsNENBQTRDLGtEQUFrRCxrQ0FBa0MsaUNBQWlDLGFBQWEsMEJBQTBCLHVDQUF1QyxrQ0FBa0MsbUNBQW1DLGlDQUFpQyxxRUFBcUUsbUNBQW1DLHNDQUFzQyxhQUFhLHdCQUF3QiwrQkFBK0IsYUFBYSx3QkFBd0IsOEJBQThCLGtDQUFrQyxtREFBbUQsZ0RBQWdELGFBQWEsdUJBQXVCLCtCQUErQix1Q0FBdUMsYUFBYSxtQ0FBbUMsNEJBQTRCLCtCQUErQixhQUFhLG1DQUFtQyw0QkFBNEIsK0JBQStCLGFBQWEsbUNBQW1DLDRCQUE0QiwrQkFBK0IsYUFBYSxtQ0FBbUMsNEJBQTRCLCtCQUErQixhQUFhLG1DQUFtQyw0QkFBNEIsK0JBQStCLGFBQWEsbUNBQW1DLDRCQUE0QiwrQkFBK0IsYUFBYSxtQ0FBbUMsNEJBQTRCLCtCQUErQixhQUFhLG1DQUFtQyw0QkFBNEIsK0JBQStCLGFBQWEsbUNBQW1DLDRCQUE0QiwrQkFBK0IsYUFBYSxndUM7Ozs7Ozs7Ozs7OztBQ0E1OUQ7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDaEQ7QUFDcEMsNEJBQTRCLHlFQUFtQjtBQUMvQztBQUNBLG9DQUFvQyxzREFBSTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUNBQWlDLGdFQUFVO0FBQzNDLDJCQUEyQiw4REFBUSxVQUFVLHlCQUF5QjtBQUN0RTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLGdDQUFnQyxnRUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ2M7QUFDOEI7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0RBQVE7QUFDM0M7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsV0FBVztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixLQUFLLG9CQUFvQjtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCBcIi4vY29tcG9uZW50cy9oZWxsb3dvcmxkXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYWxjdWxhdG9yXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy90aWN0YWN0b2VcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwiY2FsY3VsYXRvci10ZW1wbGF0ZVxcXCI+XFxyXFxuICAgIDxzdHlsZT5cXHJcXG4gICAgICAgIC5jYWxjLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6M2VtO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC43ZW0gMS41ZW0gNGZyO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1lcXVhdGlvbiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2VlZTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtcmVzdWx0IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1idXR0b25zIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNykge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg4KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDkpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWRlY2ltYWwge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgxMCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbmVnYXRlIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWV4ZWN1dGUge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gNTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYWxjLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtZXF1YXRpb25cXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjYWxjRXF1YXRpb25cXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjLXJlc3VsdFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNhbGNFbnRyeVxcXCI+MDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjLWJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjk8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiOFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj44PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjdcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI2XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjY8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiNVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj41PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjM8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiMlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4yPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjFcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIwXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbmVnYXRlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPisvLTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1kZWNpbWFsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPi48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtZGl2aWRlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjMjQ3OzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1tdWx0aXBseVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzIxNTs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbWludXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiM4NzIyOzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1wbHVzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjNDM7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLWV4ZWN1dGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiM2MTs8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlLCBnZXRTZXNzaW9uLCBzYXZlU2Vzc2lvbiB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9jYWxjdWxhdG9yLmh0bWxcIjtcclxuY29uc3QgQ0FMQ19FUVVBVElPTiA9IFwiRElEQUNULkNBTEMuRVFVQVRJT05cIjtcclxuY2xhc3MgQ2FsY3VsYXRvckNvbXBvbmVudCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJjYWxjdWxhdG9yLXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2sgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbnVtYmVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlICsgYnRuLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1uZWdhdGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpICogLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtZGVjaW1hbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSB0aGlzLmNhbGNFbnRyeS52YWx1ZSArIFwiLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLWRpdmlkZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiIC9cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbXVsdGlwbHlcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiAqXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW1pbnVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgLVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1wbHVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgK1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1leGVjdXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWF0aW9uID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHRsID0gdGhpcy5ldmFsdWF0ZUVxdWF0aW9uKGVxdWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gZXF1YXRpb24gKyBcIiA9IFwiICsgdHRsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uID0gbmV3IE9ic2VydmFibGUoZ2V0U2Vzc2lvbihDQUxDX0VRVUFUSU9OLCBcIlwiKSk7XHJcbiAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24uc3Vic2NyaWJlKCh2YWwpID0+IHNhdmVTZXNzaW9uKENBTENfRVFVQVRJT04sIHZhbCkpO1xyXG4gICAgICAgIHRoaXMuY2FsY0VudHJ5ID0gbmV3IE9ic2VydmFibGUoXCIwXCIpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MoKTtcclxuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsYy1idXR0b25zXCIpO1xyXG4gICAgICAgIGJ1dHRvbkFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYnV0dG9uQ2xpY2spO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYWxjLWJ1dHRvbnNcIik7XHJcbiAgICAgICAgYnV0dG9uQXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5idXR0b25DbGljayk7XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUVxdWF0aW9uKGVxdWF0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZXFQYXJ0cyA9IGVxdWF0aW9uLnRyaW0oKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCB0dGwgPSBwYXJzZUZsb2F0KGVxUGFydHNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgZXFQYXJ0cy5sZW5ndGg7IHggKz0gMikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KGVxUGFydHNbeCArIDFdKTtcclxuICAgICAgICAgICAgY29uc3Qgb3AgPSBlcVBhcnRzW3hdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCArPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCAtPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCAqPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHR0bCAvPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR0bDtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RpZGFjdC1jYWxjdWxhdG9yJywgQ2FsY3VsYXRvckNvbXBvbmVudCk7XHJcbiIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UgfSBmcm9tIFwiLi4vZGlkYWN0L2NvbXBvbmVudGJhc2VcIjtcclxuY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCBoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGhpLmlubmVyVGV4dCA9IFwiSGVsbG8gV29ybGRcIjtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoaGkpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGVsbG8td29ybGQnLCBIZWxsb1dvcmxkKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZSBpZD1cXFwidGljdGFjdG9lLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLnR0dC1nYW1lIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJlbSAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4yNWZyO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudHR0LW1lc3NhZ2Uge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICAgICAgY29sb3I6eWVsbG93Z3JlZW47XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEuMmVtO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnJlc2V0R2FtZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudHR0LWJvYXJkIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8zO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoMSl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDIpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNCl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDUpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg2KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNyl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDgpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg5KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidHR0LWdhbWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHR0LW1lc3NhZ2VcXFwiIGRhdGEtYmluZD1cXFwidGV4dDptZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwicmVzZXRHYW1lXFxcIj5SZXNldDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHR0LWJvYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiMFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzBdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiMVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzFdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiMlxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzJdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiM1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzNdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiNFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzRdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiNVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzVdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiNlxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzZdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiN1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzddXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdhbWVDZWxsXFxcIiB2YWx1ZT1cXFwiOFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNlbGxzWzhdXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UsIE9ic2VydmFibGUsIENvbXB1dGVkIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmltcG9ydCBodG1sIGZyb20gXCIuL3RpY3RhY3RvZS5odG1sXCI7XHJcbmNsYXNzIFRpY1RhY1RvZUdhbWUgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwidGljdGFjdG9lLXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMudXNlclBpY2tlZCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBldi50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FtZUNlbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbYnRuLnZhbHVlXS52YWx1ZSA9IHRoaXMuY3VycmVudFBsYXllci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPT09IFwiWFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlID0gXCJPXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPSBcIlhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRm9yV2lucygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXNldEdhbWUgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9IFwiWFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gbmV3IE9ic2VydmFibGUoXCJYXCIpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG5ldyBDb21wdXRlZCgoKSA9PiBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWV9J3MgVHVybiFgLCBbdGhpcy5jdXJyZW50UGxheWVyXSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgOTsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgT2JzZXJ2YWJsZShcIlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnR0dC1ib2FyZFwiKTtcclxuICAgICAgICAoX2EgPSBib2FyZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnVzZXJQaWNrZWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRHYW1lXCIpO1xyXG4gICAgICAgIChfYiA9IHJlc2V0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVzZXRHYW1lKTtcclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MoKTtcclxuICAgIH1cclxuICAgIGNoZWNrRm9yV2lucygpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaW5uaW5nIENvbWJvcyBhcmUgMSwyLDN8NCw1LDZ8Nyw4LDl8MSw1LDl8Myw1LDd8MSw0LDd8Miw1LDh8Myw2LDlcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB3aW5zID0gW1xyXG4gICAgICAgICAgICBbMSwgMiwgM10sXHJcbiAgICAgICAgICAgIFs0LCA1LCA2XSxcclxuICAgICAgICAgICAgWzcsIDgsIDldLFxyXG4gICAgICAgICAgICBbMSwgNSwgOV0sXHJcbiAgICAgICAgICAgIFszLCA1LCA3XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFszLCA2LCA5XVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IHdpbm5lcjtcclxuICAgICAgICB3aW5zLmZvckVhY2goKGNvbWJvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmNlbGxzW2NvbWJvWzBdIC0gMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLmNlbGxzW2NvbWJvWzFdIC0gMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNlbGxzW2NvbWJvWzJdIC0gMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChhICYmIGIgJiYgYyAmJiBhID09IGIgJiYgYiA9PSBjKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5uZXIgPSBhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICBhbGVydChgQ29uZ3JhdHVsYXRpb25zISAke3dpbm5lcn0gaGFzIHdvbiB0aGUgZ2FtZS5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudHR0LWJvYXJkXCIpO1xyXG4gICAgICAgIChfYSA9IGJvYXJkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXNlclBpY2tlZCk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5yZXNldEdhbWVcIik7XHJcbiAgICAgICAgKF9iID0gcmVzZXRCdXR0b24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEdhbWUpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkaWRhY3QtdGljdGFjdG9lXCIsIFRpY1RhY1RvZUdhbWUpO1xyXG4iLCIvKipcclxuICogYmluZGluZ3MgY29udGFpbnMgc2V0IG9mIGZ1bmN0aW9ucyB0aGF0IGJpbmRcclxuICogYW4gZWxlbWVudCB0byBhbnkgb2JzZXJ2YWJsZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uXHJcbiAqIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bmJpbmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBiaW5kaW5ncyA9IHtcclxuICAgIHZhbHVlOiAoaW5wdXQsIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiBpbnB1dC52YWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlT2JzID0gKCkgPT4gb2JzZXJ2YWJsZS52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUlucHV0KTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB0ZXh0OiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4gZWxlbS5pbm5lclRleHQgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBodG1sOiAoZWxlbSwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4gZWxlbS5pbm5lckhUTUwgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZVRleHQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qIFlvdSBhZGQgbW9yZSBoZXJlICovXHJcbn07XHJcbiIsImltcG9ydCB7IGJpbmRpbmdzIH0gZnJvbSBcIi4vYmluZGluZ3NcIjtcclxuZXhwb3J0IHsgT2JzZXJ2YWJsZSwgQ29tcHV0ZWQgfSBmcm9tIFwiLi9vYnNlcnZhYmxlXCI7XHJcbmV4cG9ydCB7IHNhdmVMb2NhbCwgc2F2ZVNlc3Npb24sIHNlcnZlckpzb24sIGdldExvY2FsLCBnZXRTZXNzaW9uIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG4vKipcclxuICogRmluZHMgYSBTdWJzY3JpYmFibGUgb24gYW4gT2JqZWN0IGJ5IGluc3BlY3RpbmcgaXQncyBwcm9wZXJ0aWVzXHJcbiAqIEBwYXJhbSB0aGlzIE9iamVjdCB0byBmaW5kIGEgUHJvcGVydHkgT25cclxuICogQHBhcmFtIHByb3BOYW1lIFN0cmluZyBSZXByZXNlbnRhdGlvbiBvZiB0aGUgUHJvcGVydHlcclxuICovXHJcbmZ1bmN0aW9uIGdldE9ic2VydmFibGUocHJvcE5hbWUpIHtcclxuICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKFwiW1wiKSA+IDAgJiYgcHJvcE5hbWUuaW5kZXhPZihcIl1cIikgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgYXJyUHJvcCA9IHByb3BOYW1lLnJlcGxhY2UoJ10nLCAnJykuc3BsaXQoXCJbXCIpO1xyXG4gICAgICAgIGlmIChhcnJQcm9wLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpYmFibGUgPSB0aGlzW2FyclByb3BbMF1dW2FyclByb3BbMV1dO1xyXG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJhYmxlICYmIHN1YnNjcmliYWJsZS5zdWJzY3JpYmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpc1twcm9wTmFtZV0gJiYgdGhpc1twcm9wTmFtZV0uc3Vic2NyaWJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpZGFjdENvbXBvbmVudEJhc2UgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBEaWRhY3QgQ29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCB0aGUgVGVtcGxhdGUgSUQgZm9yIHRoZSBDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSBodG1sIHRoZSBIVE1MIGluY2x1ZGluZyB0aGUgdGVtcGxhdGUgdGFnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlSWQsIGh0bWwpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhcHBsaWVzIGJpbmRpbmcgbG9naWMgdG8gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgICogd2l0aCBhIGRhdGEtYmluZCBhdHRyaWJ1dGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFwcGx5QmluZGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5zaGFkb3dSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWJpbmRdXCIpLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluZExpc3QgPSAoX2EgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSBiaW5kTGlzdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGJpbmRpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbYmluZGVyVHlwZSwgcHJvcE5hbWVdID0gYmluZGluZy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRlciA9IGJpbmRpbmdzW2JpbmRlclR5cGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9icyA9IGdldE9ic2VydmFibGUuY2FsbCh0aGlzLCBwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiaW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYmluZGluZyBbJHtiaW5kaW5nfV0gY291bGQgbm90IGJlIGFkZGVkLiBUaGVyZSBpcyBub3Qgc3VjaCBiaW5kaW5nIHR5cGUuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb2JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGJpbmRpbmcgWyR7YmluZGluZ31dIGNvdWxkIG5vdCBiZSBhZGRlZC4gVGhlcmUgaXMgbm90IHN1Y2ggYmluZGluZyB0eXBlLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmluZGVyICYmIG9icykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzLnB1c2goYmluZGVyKGVsZW0sIG9icykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlbW92ZXMgYmluZGluZyBsb2dpYyBmcm9tIGFsbCBlbGVtZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICh0aGlzLmFjdGl2ZUJpbmRpbmdzKS5mb3JFYWNoKHJlbW92ZUJpbmRpbmcgPT4gcmVtb3ZlQmluZGluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVCaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3RpdmVCaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgICAgICAgICBpZiAoIXRlbXBsICYmIGh0bWwpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICAgICAgICAgIGlmICghdGVtcGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgYSA8dGVtcGxhdGU+IHdpdGggaWQ9XCIke3RlbXBsYXRlSWR9XCIgYCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ29tcG9uZW50IGlzIE1pc3NpbmcgVGVtcGxhdGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHRlbXBsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0RnJvbShzdG9yZSwgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICBjb25zdCBqc29uID0gc3RvcmUuZ2V0SXRlbShuYW1lKTtcclxuICAgIGlmIChqc29uID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2F2ZVRvKHN0b3JlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIHN0b3JlLnNldEl0ZW0obmFtZSwganNvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdG9yZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEl0ZW0gZnJvbSBTZXNzaW9uIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBEZWZhdWx0IHZhbHVlIGlmIG5vdCBwcm92aWRlZCBpZiBub3QgcHJvdmlkZWQgcmV0dXJucyBudWxsXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgSXRlbSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gZ2V0RnJvbShzZXNzaW9uU3RvcmFnZSwgbmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuLyoqXHJcbiAqIFNhdmVzIGFuIEl0ZW0gaW50byBTZXNzaW9uIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIHZhbHVlIE5ldyBWYWx1ZSB0byBiZSBTdG9yZWRcclxuICogQHJldXJucyBQcm9taXNlIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudGx5IHN0b3JlZCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdmVTZXNzaW9uID0gKG5hbWUsIHZhbHVlKSA9PiBzYXZlVG8oc2Vzc2lvblN0b3JhZ2UsIG5hbWUsIHZhbHVlKTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSXRlbSBmcm9tIExvY2FsIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBEZWZhdWx0IHZhbHVlIGlmIG5vdCBwcm92aWRlZCByZXR1cm5zIG51bGxcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBJdGVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldExvY2FsID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gZ2V0RnJvbShsb2NhbFN0b3JhZ2UsIG5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbi8qKlxyXG4gKiBTYXZlcyBhbiBJdGVtIGludG8gTG9jYWwgU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gdmFsdWUgTmV3IFZhbHVlIHRvIGJlIFN0b3JlZFxyXG4gKiBAcmV1cm5zIFByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50bHkgc3RvcmVkIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZUxvY2FsID0gKG5hbWUsIHZhbHVlKSA9PiBzYXZlVG8obG9jYWxTdG9yYWdlLCBuYW1lLCB2YWx1ZSk7XHJcbi8qKlxyXG4gKiBIZWxwZXIgdG8gRXhlY3V0ZSBQcm9taXNlIGFuZCBpbnNwZWN0IHRoZSByZXNwb25zZSBDb2RlXHJcbiAqIEBwYXJhbSByZXF1ZXN0IHRoZSBSZXF1ZXN0IHRvIHNlbmQgKGUuZy4gbmV3IFJlcXVlc3QoJ3VybCcpKVxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBkYXRhLiBSZWplY3RzIGlmIG5vdCBkYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VydmVySnNvbihyZXF1ZXN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG1zZykgPT4gcmVqZWN0KG1zZykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChgJHtyZXNwb25zZS5zdGF0dXN9IC0gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHJlamVjdChyZWFzb24pKTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxldHMgdXMgb2JzZXJ2ZSBhIHZhbHVlIGZvciBjaGFuZ2VzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIGRlZmF1bHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5KCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKHRoaXMuX3ZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBTdWJzY3JpYmVyXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlc1xyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBTdWJzY3JpYmVyXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgbm90IGJlIGNhbGxlZCBhbnkgbG9uZ2VyIHdoZW4gdGhlIHZhbHVlIHVwZGF0ZXNcclxuICAgICAqL1xyXG4gICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBPYnNlcnZhYmxlXHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBPYnNlcnZhYmxlXHJcbiAgICAgKiBOb3RpZnlpbmcgYW55IFN1YnNjcmliZXIgaWYgdGhlIHZhbHVlIGlzIG5ld1xyXG4gICAgICovXHJcbiAgICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFsbG93cyBjb21wb3NpdGlvbiBvZiBhIHZhbHVlIGJhc2VkIHVwb24gb2JzZXJ2aW5nIG90aGVyIGNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wdXRlZCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTmV3IENvbXB1dGVkIFZhbHVlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgRnVuY3Rpb24gdGhlIHJlc3VsdHMgaW4gdGhlIFZhbHVlXHJcbiAgICAgKiBAcGFyYW0gZGVwcyBPYnNlcnZhYmxlcyB0aGF0IHRyaWdnZXIgdGhpcyBDb21wdXRlZCB0byBVcGRhdGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGRlcHMpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSgpKTtcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGVwcy5mb3JFYWNoKGRlcCA9PiBkZXAuc3Vic2NyaWJlKGxpc3RlbmVyKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIENvbXB1dGVkIFJlc3VsdFxyXG4gICAgICovXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3QgcG9zc2libGUgdG8gc2V0IHZhbHVlIG9mIENvbXB1dGVkXHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZShfKSB7XHJcbiAgICAgICAgdGhyb3cgXCJDYW5ub3Qgc2V0IGNvbXB1dGVkIHByb3BlcnR5XCI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==