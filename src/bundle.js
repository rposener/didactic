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
                // Get the complted items back
                const toAdd = this.data.filter(i => i.completed).map(td => new TodoItem(td));
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
        this.data = await Object(_didact_componentbase__WEBPACK_IMPORTED_MODULE_0__["serverJson"])(req);
        this.todoItems.value = this.data.map((todo) => new TodoItem(todo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2RvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2JpbmRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvY29tcG9uZW50YmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEtBQUssb0JBQW9CO0FBQ25FO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL2hlbGxvd29ybGRcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhbGN1bGF0b3JcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3RpY3RhY3RvZVwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdG9kb1wiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJjYWxjdWxhdG9yLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLmNhbGMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdlbSAxLjVlbSA0ZnI7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWVxdWF0aW9uIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1yZXN1bHQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDUpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNikge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg3KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDgpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoOSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtZGVjaW1hbCB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDEwKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1uZWdhdGUge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtZXhlY3V0ZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyA1O1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1O1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbjxkaXYgY2xhc3M9XFxcImNhbGMtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FsYy1lcXVhdGlvblxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmNhbGNFcXVhdGlvblxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtcmVzdWx0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2FsY0VudHJ5XFxcIj4wPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+OTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI4XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjg8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiN1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj43PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjZcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI1XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiNFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj40PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIyXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjI8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiMVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4xPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjBcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1uZWdhdGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+Ky8tPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLWRlY2ltYWxcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+LjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1kaXZpZGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiMyNDc7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW11bHRpcGx5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjMjE1OzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1taW51c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzg3MjI7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLXBsdXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiM0Mzs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtZXhlY3V0ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzYxOzwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UsIE9ic2VydmFibGUsIGdldFNlc3Npb24sIHNhdmVTZXNzaW9uIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmltcG9ydCBodG1sIGZyb20gXCIuL2NhbGN1bGF0b3IuaHRtbFwiO1xyXG5jb25zdCBDQUxDX0VRVUFUSU9OID0gXCJESURBQ1QuQ0FMQy5FUVVBVElPTlwiO1xyXG5jbGFzcyBDYWxjdWxhdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImNhbGN1bGF0b3ItdGVtcGxhdGVcIiwgaHRtbCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbGljayA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhckVxdWF0aW9uT25OZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRXF1YXRpb25Pbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBldi50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1udW1iZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUgKyBidG4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW5lZ2F0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSkgKiAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1kZWNpbWFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IHRoaXMuY2FsY0VudHJ5LnZhbHVlICsgXCIuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtZGl2aWRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgL1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1tdWx0aXBseVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiICpcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbWludXNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiAtXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLXBsdXNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiArXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLWV4ZWN1dGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0dGwgPSB0aGlzLmV2YWx1YXRlRXF1YXRpb24oZXF1YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSBlcXVhdGlvbiArIFwiID0gXCIgKyB0dGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24gPSBuZXcgT2JzZXJ2YWJsZShnZXRTZXNzaW9uKENBTENfRVFVQVRJT04sIFwiXCIpKTtcclxuICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi5zdWJzY3JpYmUoKHZhbCkgPT4gc2F2ZVNlc3Npb24oQ0FMQ19FUVVBVElPTiwgdmFsKSk7XHJcbiAgICAgICAgdGhpcy5jYWxjRW50cnkgPSBuZXcgT2JzZXJ2YWJsZShcIjBcIik7XHJcbiAgICAgICAgdGhpcy5jbGVhckVxdWF0aW9uT25OZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYWxjLWJ1dHRvbnNcIik7XHJcbiAgICAgICAgYnV0dG9uQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5idXR0b25DbGljayk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhbGMtYnV0dG9uc1wiKTtcclxuICAgICAgICBidXR0b25BcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJ1dHRvbkNsaWNrKTtcclxuICAgIH1cclxuICAgIGV2YWx1YXRlRXF1YXRpb24oZXF1YXRpb24pIHtcclxuICAgICAgICBjb25zdCBlcVBhcnRzID0gZXF1YXRpb24udHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IHR0bCA9IHBhcnNlRmxvYXQoZXFQYXJ0c1swXSk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCBlcVBhcnRzLmxlbmd0aDsgeCArPSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQoZXFQYXJ0c1t4ICsgMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBvcCA9IGVxUGFydHNbeF07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3ApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsICs9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsIC09IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsICo9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdHRsIC89IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHRsO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGlkYWN0LWNhbGN1bGF0b3InLCBDYWxjdWxhdG9yQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5jbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgaGkuaW5uZXJUZXh0ID0gXCJIZWxsbyBXb3JsZFwiO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChoaSk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWxsby13b3JsZCcsIEhlbGxvV29ybGQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJ0aWN0YWN0b2UtdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICAudHR0LWdhbWUge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmVtIDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjI1ZnI7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50dHQtbWVzc2FnZSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgICAgICBjb2xvcjp5ZWxsb3dncmVlbjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMS4yZW07XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAucmVzZXRHYW1lIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50dHQtYm9hcmQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLzM7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCgxKXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoMil7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDMpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg0KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNSl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDYpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg3KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoOCl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDkpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0dHQtZ2FtZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0dHQtbWVzc2FnZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0Om1lc3NhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJyZXNldEdhbWVcXFwiPlJlc2V0PC9idXR0b24+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0dHQtYm9hcmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbMF1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIxXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbMV1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIyXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbMl1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCIzXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbM11cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbNF1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI1XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbNV1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI2XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbNl1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI3XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbN11cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2FtZUNlbGxcXFwiIHZhbHVlPVxcXCI4XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2VsbHNbOF1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSwgT2JzZXJ2YWJsZSwgQ29tcHV0ZWQgfSBmcm9tIFwiLi4vZGlkYWN0L2NvbXBvbmVudGJhc2VcIjtcclxuaW1wb3J0IGh0bWwgZnJvbSBcIi4vdGljdGFjdG9lLmh0bWxcIjtcclxuY2xhc3MgVGljVGFjVG9lR2FtZSBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0aWN0YWN0b2UtdGVtcGxhdGVcIiwgaHRtbCk7XHJcbiAgICAgICAgdGhpcy51c2VyUGlja2VkID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2LnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJnYW1lQ2VsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tidG4udmFsdWVdLnZhbHVlID0gdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPSBcIk9cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9IFwiWFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JXaW5zKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlc2V0R2FtZSA9IChldikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlID0gXCJYXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBuZXcgT2JzZXJ2YWJsZShcIlhcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IENvbXB1dGVkKCgpID0+IGAke3RoaXMuY3VycmVudFBsYXllci52YWx1ZX0ncyBUdXJuIWAsIFt0aGlzLmN1cnJlbnRQbGF5ZXJdKTtcclxuICAgICAgICB0aGlzLmNlbGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA5OyBjKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKG5ldyBPYnNlcnZhYmxlKFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudHR0LWJvYXJkXCIpO1xyXG4gICAgICAgIChfYSA9IGJvYXJkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXNlclBpY2tlZCk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5yZXNldEdhbWVcIik7XHJcbiAgICAgICAgKF9iID0gcmVzZXRCdXR0b24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEdhbWUpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgfVxyXG4gICAgY2hlY2tGb3JXaW5zKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbm5pbmcgQ29tYm9zIGFyZSAxLDIsM3w0LDUsNnw3LDgsOXwxLDUsOXwzLDUsN3wxLDQsN3wyLDUsOHwzLDYsOVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHdpbnMgPSBbXHJcbiAgICAgICAgICAgIFsxLCAyLCAzXSxcclxuICAgICAgICAgICAgWzQsIDUsIDZdLFxyXG4gICAgICAgICAgICBbNywgOCwgOV0sXHJcbiAgICAgICAgICAgIFsxLCA1LCA5XSxcclxuICAgICAgICAgICAgWzMsIDUsIDddLFxyXG4gICAgICAgICAgICBbMSwgNCwgN10sXHJcbiAgICAgICAgICAgIFsyLCA1LCA4XSxcclxuICAgICAgICAgICAgWzMsIDYsIDldXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgd2lubmVyO1xyXG4gICAgICAgIHdpbnMuZm9yRWFjaCgoY29tYm8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMuY2VsbHNbY29tYm9bMF0gLSAxXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHRoaXMuY2VsbHNbY29tYm9bMV0gLSAxXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY2VsbHNbY29tYm9bMl0gLSAxXS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKGEgJiYgYiAmJiBjICYmIGEgPT0gYiAmJiBiID09IGMpIHtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYENvbmdyYXR1bGF0aW9ucyEgJHt3aW5uZXJ9IGhhcyB3b24gdGhlIGdhbWUuYCk7XHJcbiAgICAgICAgICAgIH0sIDE1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudHR0LWJvYXJkXCIpO1xyXG4gICAgICAgIChfYSA9IGJvYXJkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXNlclBpY2tlZCk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5yZXNldEdhbWVcIik7XHJcbiAgICAgICAgKF9iID0gcmVzZXRCdXR0b24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXNldEdhbWUpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkaWRhY3QtdGljdGFjdG9lXCIsIFRpY1RhY1RvZUdhbWUpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlIGlkPVxcXCJ0b2RvLWxpc3QtdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICAudG9kby1oZWFkZXIge1xcclxcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50b2RvLXN0YXR1cyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby1saXN0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMC41ZW0gc29saWQgIzMzMztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tYXJlYSB7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvZG8tc3RhdHVzXFxcIj5Ub3RhbCBJdGVtczogXFxyXFxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OnRvZG9Db3VudFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ0b2RvLXNvcnRcXFwiPlNvcnQgVG9nZ2xlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ0b2RvLWhpZGVcXFwiPlNob3cgLyBIaWRlIENvbXBsZXRlZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWFyZWFcXFwiIGRhdGEtYmluZD1cXFwiY2hpbGRyZW46dG9kb0l0ZW1zXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48dGVtcGxhdGUgaWQ9XFxcInRvZG8taXRlbS10ZW1wbGF0ZVxcXCI+XFxyXFxuICAgIDxzdHlsZT5cXHJcXG4gICAgICAgIC50b2RvLWl0ZW0ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby1jaGVjayB7XFxyXFxuICAgICAgICAgICAgZmxleDogLjI1O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tdGV4dCB7XFxyXFxuICAgICAgICAgICAgZmxleDogLjc1O1xcclxcbiAgICAgICAgfVxcclxcbiAgICA8L3N0eWxlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwidG9kby1jaGVja1xcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOmNvbXBsZXRlZFxcXCIgLz5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2RvLXRleHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0b2RvVGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlLCBzZXJ2ZXJKc29uLCBDb21wdXRlZCB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi90b2RvLmh0bWxcIjtcclxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwidG9kby1saXN0LXRlbXBsYXRlXCIsIGh0bWwpO1xyXG4gICAgICAgIHRoaXMuc29ydFRvZG9zID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNjXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ID0gXCJkZXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydCA9IFwiYXNjXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc29ydCA9PT0gXCJhc2NcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRvZG9UaXRsZS52YWx1ZS5sb2NhbGVDb21wYXJlKGIudG9kb1RpdGxlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnRvZG9UaXRsZS52YWx1ZS5sb2NhbGVDb21wYXJlKGEudG9kb1RpdGxlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLm5vdGlmeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b2dnbGVDb21wbGV0ZWQgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhpZGRlbiA9ICF0aGlzLmNvbXBsZXRlSGlkZGVuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZUhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUgPSB0aGlzLnRvZG9JdGVtcy52YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uY29tcGxldGVkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbXBsdGVkIGl0ZW1zIGJhY2tcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvQWRkID0gdGhpcy5kYXRhLmZpbHRlcihpID0+IGkuY29tcGxldGVkKS5tYXAodGQgPT4gbmV3IFRvZG9JdGVtKHRkKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUuc3BsaWNlKHRoaXMudG9kb0l0ZW1zLnZhbHVlLmxlbmd0aCwgMCwgLi4udG9BZGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLm5vdGlmeSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZShbXSk7XHJcbiAgICAgICAgdGhpcy5zb3J0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlSGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2RvQ291bnQgPSBuZXcgQ29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMudmFsdWUubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSwgW3RoaXMudG9kb0l0ZW1zXSk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50b2RvLXNvcnRcIik7XHJcbiAgICAgICAgKF9hID0gc29ydEJ0bikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNvcnRUb2Rvcyk7XHJcbiAgICAgICAgY29uc3QgaGlkZUJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8taGlkZVwiKTtcclxuICAgICAgICAoX2IgPSBoaWRlQnRuKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlQ29tcGxldGVkKTtcclxuICAgICAgICB0aGlzLmxvYWRUb2RvcygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbG9hZFRvZG9zKCkge1xyXG4gICAgICAgIC8vIExvYWQgRGF0YVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2RvcycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgY2FjaGU6ICduby1zdG9yZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBhd2FpdCBzZXJ2ZXJKc29uKHJlcSk7XHJcbiAgICAgICAgdGhpcy50b2RvSXRlbXMudmFsdWUgPSB0aGlzLmRhdGEubWFwKCh0b2RvKSA9PiBuZXcgVG9kb0l0ZW0odG9kbykpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3Qgc29ydEJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc29ydFwiKTtcclxuICAgICAgICAoX2EgPSBzb3J0QnRuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc29ydFRvZG9zKTtcclxuICAgICAgICBjb25zdCBoaWRlQnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1oaWRlXCIpO1xyXG4gICAgICAgIChfYiA9IGhpZGVCdG4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVDb21wbGV0ZWQpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0b2RvLWl0ZW0tdGVtcGxhdGVcIik7XHJcbiAgICAgICAgdGhpcy50b2RvVGl0bGUgPSBuZXcgT2JzZXJ2YWJsZShpdGVtLnRpdGxlKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG5ldyBPYnNlcnZhYmxlKGl0ZW0uY29tcGxldGVkKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRvZG8tbGlzdFwiLCBUb2RvTGlzdCk7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRvZG8taXRlbVwiLCBUb2RvSXRlbSk7XHJcbiIsIi8qKlxyXG4gKiBiaW5kaW5ncyBjb250YWlucyBzZXQgb2YgZnVuY3Rpb25zIHRoYXQgYmluZFxyXG4gKiBhbiBlbGVtZW50IHRvIGFueSBvYnNlcnZhYmxlIGFuZCByZXR1cm5zIGEgZnVuY3Rpb25cclxuICogdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuYmluZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJpbmRpbmdzID0ge1xyXG4gICAgdmFsdWU6IChpbnB1dCwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IGlucHV0LnZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVPYnMgPSAoKSA9PiBvYnNlcnZhYmxlLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRleHQ6IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgZWxlbS5pbm5lclRleHQgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiBlbGVtLmlubmVyVGV4dCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGh0bWw6IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiBlbGVtLmlubmVySFRNTCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNoZWNrZWQ6IChpbnB1dCwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC50eXBlICE9PSBcImNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgIHRocm93IFwiY2hlY2tlZCBiaW5kaW5nIGNhbiBvbmx5IGJlIHVzZWQgb24gY2hlY2tib3hlc1wiO1xyXG4gICAgICAgIC8vIHNldCBEZWZhdWx0XHJcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IChvYnNlcnZhYmxlLnZhbHVlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cGRhdGVPYnMgPSAoKSA9PiBvYnNlcnZhYmxlLnZhbHVlID0gaW5wdXQuY2hlY2tlZDtcclxuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjaGlsZHJlbjogKGVsZW0sIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVDaGlsZHJlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB3aGlsZSAoZWxlbS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgbmV3IGNoaWxkcmVuIGluIG9yZGVyXHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudmFsdWUuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUNoaWxkcmVuKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZUNoaWxkcmVuKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyogWW91IGFkZCBtb3JlIGhlcmUgKi9cclxufTtcclxuIiwiaW1wb3J0IHsgYmluZGluZ3MgfSBmcm9tIFwiLi9iaW5kaW5nc1wiO1xyXG5leHBvcnQgeyBPYnNlcnZhYmxlLCBDb21wdXRlZCB9IGZyb20gXCIuL29ic2VydmFibGVcIjtcclxuZXhwb3J0IHsgc2F2ZUxvY2FsLCBzYXZlU2Vzc2lvbiwgc2VydmVySnNvbiwgZ2V0TG9jYWwsIGdldFNlc3Npb24gfSBmcm9tIFwiLi9kYXRhXCI7XHJcbi8qKlxyXG4gKiBGaW5kcyBhIFN1YnNjcmliYWJsZSBvbiBhbiBPYmplY3QgYnkgaW5zcGVjdGluZyBpdCdzIHByb3BlcnRpZXNcclxuICogQHBhcmFtIHRoaXMgT2JqZWN0IHRvIGZpbmQgYSBQcm9wZXJ0eSBPblxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIHRoZSBQcm9wZXJ0eVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0T2JzZXJ2YWJsZShwcm9wTmFtZSkge1xyXG4gICAgaWYgKHByb3BOYW1lLmluZGV4T2YoXCJbXCIpID4gMCAmJiBwcm9wTmFtZS5pbmRleE9mKFwiXVwiKSA+IDApIHtcclxuICAgICAgICBjb25zdCBhcnJQcm9wID0gcHJvcE5hbWUucmVwbGFjZSgnXScsICcnKS5zcGxpdChcIltcIik7XHJcbiAgICAgICAgaWYgKGFyclByb3AubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliYWJsZSA9IHRoaXNbYXJyUHJvcFswXV1bYXJyUHJvcFsxXV07XHJcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmFibGUgJiYgc3Vic2NyaWJhYmxlLnN1YnNjcmliZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliYWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzW3Byb3BOYW1lXSAmJiB0aGlzW3Byb3BOYW1lXS5zdWJzY3JpYmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1twcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlkYWN0Q29tcG9uZW50QmFzZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIERpZGFjdCBDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIHRoZSBUZW1wbGF0ZSBJRCBmb3IgdGhlIENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIGh0bWwgdGhlIEhUTUwgaW5jbHVkaW5nIHRoZSB0ZW1wbGF0ZSB0YWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVJZCwgaHRtbCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFwcGxpZXMgYmluZGluZyBsb2dpYyB0byBhbGwgZWxlbWVudHNcclxuICAgICAgICAgKiB3aXRoIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmluZF1cIikuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5kTGlzdCA9IChfYSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGJpbmRMaXN0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYmluZGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtiaW5kZXJUeXBlLCBwcm9wTmFtZV0gPSBiaW5kaW5nLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluZGVyID0gYmluZGluZ3NbYmluZGVyVHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzID0gZ2V0T2JzZXJ2YWJsZS5jYWxsKHRoaXMsIHByb3BOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJpbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBiaW5kaW5nIFske2JpbmRpbmd9XSBjb3VsZCBub3QgYmUgYWRkZWQuIFRoZXJlIGlzIG5vdCBzdWNoIGJpbmRpbmcgdHlwZS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvYnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYmluZGluZyBbJHtiaW5kaW5nfV0gY291bGQgbm90IGJlIGFkZGVkLiBUaGVyZSBpcyBub3Qgc3VjaCBiaW5kaW5nIHR5cGUuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kZXIgJiYgb2JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmluZGluZ3MucHVzaChiaW5kZXIoZWxlbSwgb2JzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVtb3ZlcyBiaW5kaW5nIGxvZ2ljIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgKHRoaXMuYWN0aXZlQmluZGluZ3MpLmZvckVhY2gocmVtb3ZlQmluZGluZyA9PiByZW1vdmVCaW5kaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICAgICAgICAgIGlmICghdGVtcGwgJiYgaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgICAgICAgaWYgKCF0ZW1wbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCBhIDx0ZW1wbGF0ZT4gd2l0aCBpZD1cIiR7dGVtcGxhdGVJZH1cIiBgKTtcclxuICAgICAgICAgICAgICAgIHRocm93ICdDb21wb25lbnQgaXMgTWlzc2luZyBUZW1wbGF0ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKF9hID0gdGhpcy5zaGFkb3dSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQodGVtcGwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXRGcm9tKHN0b3JlLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGNvbnN0IGpzb24gPSBzdG9yZS5nZXRJdGVtKG5hbWUpO1xyXG4gICAgaWYgKGpzb24gPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzYXZlVG8oc3RvcmUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgc3RvcmUuc2V0SXRlbShuYW1lLCBqc29uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0b3JlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSXRlbSBmcm9tIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIGlmIG5vdCBwcm92aWRlZCByZXR1cm5zIG51bGxcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBJdGVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKHNlc3Npb25TdG9yYWdlLCBuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4vKipcclxuICogU2F2ZXMgYW4gSXRlbSBpbnRvIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gdmFsdWUgTmV3IFZhbHVlIHRvIGJlIFN0b3JlZFxyXG4gKiBAcmV1cm5zIFByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50bHkgc3RvcmVkIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZVNlc3Npb24gPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhzZXNzaW9uU3RvcmFnZSwgbmFtZSwgdmFsdWUpO1xyXG4vKipcclxuICogUmV0dXJucyBhbiBJdGVtIGZyb20gTG9jYWwgU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIHJldHVybnMgbnVsbFxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEl0ZW0sIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0TG9jYWwgPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKGxvY2FsU3RvcmFnZSwgbmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuLyoqXHJcbiAqIFNhdmVzIGFuIEl0ZW0gaW50byBMb2NhbCBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSB2YWx1ZSBOZXcgVmFsdWUgdG8gYmUgU3RvcmVkXHJcbiAqIEByZXVybnMgUHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnRseSBzdG9yZWQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlTG9jYWwgPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhsb2NhbFN0b3JhZ2UsIG5hbWUsIHZhbHVlKTtcclxuLyoqXHJcbiAqIEhlbHBlciB0byBFeGVjdXRlIFByb21pc2UgYW5kIGluc3BlY3QgdGhlIHJlc3BvbnNlIENvZGVcclxuICogQHBhcmFtIHJlcXVlc3QgdGhlIFJlcXVlc3QgdG8gc2VuZCAoZS5nLiBuZXcgUmVxdWVzdCgndXJsJykpXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGRhdGEuIFJlamVjdHMgaWYgbm90IGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2ZXJKc29uKHJlcXVlc3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobXNnKSA9PiByZWplY3QobXNnKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gcmVqZWN0KHJlYXNvbikpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENsYXNzIHRoYXQgbGV0cyB1cyBvYnNlcnZlIGEgdmFsdWUgZm9yIGNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBub3RpZnkoKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIodGhpcy5fdmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHNob3VsZCBub3QgYmUgY2FsbGVkIGFueSBsb25nZXIgd2hlbiB0aGUgdmFsdWUgdXBkYXRlc1xyXG4gICAgICovXHJcbiAgICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UodGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqIE5vdGlmeWluZyBhbnkgU3Vic2NyaWJlciBpZiB0aGUgdmFsdWUgaXMgbmV3XHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWxsb3dzIGNvbXBvc2l0aW9uIG9mIGEgdmFsdWUgYmFzZWQgdXBvbiBvYnNlcnZpbmcgb3RoZXIgY2hhbmdlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXB1dGVkIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBOZXcgQ29tcHV0ZWQgVmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBGdW5jdGlvbiB0aGUgcmVzdWx0cyBpbiB0aGUgVmFsdWVcclxuICAgICAqIEBwYXJhbSBkZXBzIE9ic2VydmFibGVzIHRoYXQgdHJpZ2dlciB0aGlzIENvbXB1dGVkIHRvIFVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZGVwcykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlKCkpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC5zdWJzY3JpYmUobGlzdGVuZXIpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgQ29tcHV0ZWQgUmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE5vdCBwb3NzaWJsZSB0byBzZXQgdmFsdWUgb2YgQ29tcHV0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbHVlKF8pIHtcclxuICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgY29tcHV0ZWQgcHJvcGVydHlcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9