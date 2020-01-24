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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2RvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2JpbmRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvY29tcG9uZW50YmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsS0FBSyxvQkFBb0I7QUFDbkU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVsbG93b3JsZFwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FsY3VsYXRvclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvdGljdGFjdG9lXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy90b2RvXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGUgaWQ9XFxcImNhbGN1bGF0b3ItdGVtcGxhdGVcXFwiPlxcclxcbiAgICA8c3R5bGU+XFxyXFxuICAgICAgICAuY2FsYy1jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOjNlbTtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2VtIDEuNWVtIDRmcjtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtZXF1YXRpb24ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNlZWU7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLXJlc3VsdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoNSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1udW1iZXI6bnRoLWNoaWxkKDcpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoOCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmNhbGMtbnVtYmVyOm50aC1jaGlsZCg5KSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1kZWNpbWFsIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW51bWJlcjpudGgtY2hpbGQoMTApIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5jYWxjLW5lZ2F0ZSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FsYy1leGVjdXRlIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDU7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIDwvc3R5bGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FsYy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjLWVxdWF0aW9uXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6Y2FsY0VxdWF0aW9uXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FsYy1yZXN1bHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjYWxjRW50cnlcXFwiPjA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FsYy1idXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiOVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj45PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjhcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+ODwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI3XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjc8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiNlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj42PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+NTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCI0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiM1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4zPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW51bWJlclxcXCIgdmFsdWU9XFxcIjJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+MjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1udW1iZXJcXFwiIHZhbHVlPVxcXCIxXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjE8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbnVtYmVyXFxcIiB2YWx1ZT1cXFwiMFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4wPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW5lZ2F0ZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4rLy08L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtZGVjaW1hbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4uPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLWRpdmlkZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzI0Nzs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtbXVsdGlwbHlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+JiMyMTU7PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYWxjLW1pbnVzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjODcyMjs8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhbGMtcGx1c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4mIzQzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2FsYy1leGVjdXRlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPiYjNjE7PC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgRGlkYWN0Q29tcG9uZW50QmFzZSwgT2JzZXJ2YWJsZSwgZ2V0U2Vzc2lvbiwgc2F2ZVNlc3Npb24gfSBmcm9tIFwiLi4vZGlkYWN0L2NvbXBvbmVudGJhc2VcIjtcclxuaW1wb3J0IGh0bWwgZnJvbSBcIi4vY2FsY3VsYXRvci5odG1sXCI7XHJcbmNvbnN0IENBTENfRVFVQVRJT04gPSBcIkRJREFDVC5DQUxDLkVRVUFUSU9OXCI7XHJcbmNsYXNzIENhbGN1bGF0b3JDb21wb25lbnQgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiY2FsY3VsYXRvci10ZW1wbGF0ZVwiLCBodG1sKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyRXF1YXRpb25Pbk5leHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJFcXVhdGlvbk9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2LnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW51bWJlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSArIGJ0bi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtbmVnYXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLWRlY2ltYWxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gdGhpcy5jYWxjRW50cnkudmFsdWUgKyBcIi5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1kaXZpZGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jYWxjRW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgPSB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSArIFwiIFwiICsgdmFsdWUgKyBcIiAvXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFbnRyeS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjLW11bHRpcGx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuY2FsY0VudHJ5LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlID0gdGhpcy5jYWxjRXF1YXRpb24udmFsdWUgKyBcIiBcIiArIHZhbHVlICsgXCIgKlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjRW50cnkudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FsYy1taW51c1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiIC1cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtcGx1c1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZSArIFwiICtcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNhbGMtZXhlY3V0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmNhbGNFbnRyeS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcXVhdGlvbiA9IHRoaXMuY2FsY0VxdWF0aW9uLnZhbHVlICsgXCIgXCIgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR0bCA9IHRoaXMuZXZhbHVhdGVFcXVhdGlvbihlcXVhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbi52YWx1ZSA9IGVxdWF0aW9uICsgXCIgPSBcIiArIHR0bDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0VudHJ5LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRXF1YXRpb25Pbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGNFcXVhdGlvbiA9IG5ldyBPYnNlcnZhYmxlKGdldFNlc3Npb24oQ0FMQ19FUVVBVElPTiwgXCJcIikpO1xyXG4gICAgICAgIHRoaXMuY2FsY0VxdWF0aW9uLnN1YnNjcmliZSgodmFsKSA9PiBzYXZlU2Vzc2lvbihDQUxDX0VRVUFUSU9OLCB2YWwpKTtcclxuICAgICAgICB0aGlzLmNhbGNFbnRyeSA9IG5ldyBPYnNlcnZhYmxlKFwiMFwiKTtcclxuICAgICAgICB0aGlzLmNsZWFyRXF1YXRpb25Pbk5leHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseUJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uQXJlYSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhbGMtYnV0dG9uc1wiKTtcclxuICAgICAgICBidXR0b25BcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJ1dHRvbkNsaWNrKTtcclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmluZGluZ3MoKTtcclxuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsYy1idXR0b25zXCIpO1xyXG4gICAgICAgIGJ1dHRvbkFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYnV0dG9uQ2xpY2spO1xyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVFcXVhdGlvbihlcXVhdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGVxUGFydHMgPSBlcXVhdGlvbi50cmltKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICBsZXQgdHRsID0gcGFyc2VGbG9hdChlcVBhcnRzWzBdKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IGVxUGFydHMubGVuZ3RoOyB4ICs9IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VGbG9hdChlcVBhcnRzW3ggKyAxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wID0gZXFQYXJ0c1t4XTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgICAgICAgICB0dGwgKz0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi1cIjpcclxuICAgICAgICAgICAgICAgICAgICB0dGwgLT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIipcIjpcclxuICAgICAgICAgICAgICAgICAgICB0dGwgKj0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgICAgICAgICB0dGwgLz0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0dGw7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkaWRhY3QtY2FsY3VsYXRvcicsIENhbGN1bGF0b3JDb21wb25lbnQpO1xyXG4iLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBoaS5pbm5lclRleHQgPSBcIkhlbGxvIFdvcmxkXCI7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGhpKTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hlbGxvLXdvcmxkJywgSGVsbG9Xb3JsZCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGUgaWQ9XFxcInRpY3RhY3RvZS10ZW1wbGF0ZVxcXCI+XFxyXFxuICAgIDxzdHlsZT5cXHJcXG4gICAgICAgIC50dHQtZ2FtZSB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZW0gMWZyO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuMjVmcjtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnR0dC1tZXNzYWdlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgICAgIGNvbG9yOnllbGxvd2dyZWVuO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxLjJlbTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5yZXNldEdhbWUge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnR0dC1ib2FyZCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvMztcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGwge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDEpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCgyKXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoMyl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDQpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg1KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoNil7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZUNlbGw6bnRoLWNoaWxkKDcpe1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWVDZWxsOm50aC1jaGlsZCg4KXtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lQ2VsbDpudGgtY2hpbGQoOSl7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIDwvc3R5bGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInR0dC1nYW1lXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR0dC1tZXNzYWdlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6bWVzc2FnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInJlc2V0R2FtZVxcXCI+UmVzZXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInR0dC1ib2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjBcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1swXVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjFcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1sxXVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjJcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1syXVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjNcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1szXVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1s0XVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1s1XVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjZcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1s2XVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjdcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1s3XVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnYW1lQ2VsbFxcXCIgdmFsdWU9XFxcIjhcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpjZWxsc1s4XVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlLCBPYnNlcnZhYmxlLCBDb21wdXRlZCB9IGZyb20gXCIuLi9kaWRhY3QvY29tcG9uZW50YmFzZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwiLi90aWN0YWN0b2UuaHRtbFwiO1xyXG5jbGFzcyBUaWNUYWNUb2VHYW1lIGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInRpY3RhY3RvZS10ZW1wbGF0ZVwiLCBodG1sKTtcclxuICAgICAgICB0aGlzLnVzZXJQaWNrZWQgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImdhbWVDZWxsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW2J0bi52YWx1ZV0udmFsdWUgPSB0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyLnZhbHVlID09PSBcIlhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci52YWx1ZSA9IFwiT1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnZhbHVlID0gXCJYXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGVja0ZvcldpbnMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVzZXRHYW1lID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIudmFsdWUgPSBcIlhcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IG5ldyBPYnNlcnZhYmxlKFwiWFwiKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgQ29tcHV0ZWQoKCkgPT4gYCR7dGhpcy5jdXJyZW50UGxheWVyLnZhbHVlfSdzIFR1cm4hYCwgW3RoaXMuY3VycmVudFBsYXllcl0pO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDk7IGMrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2gobmV3IE9ic2VydmFibGUoXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50dHQtYm9hcmRcIik7XHJcbiAgICAgICAgKF9hID0gYm9hcmQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy51c2VyUGlja2VkKTtcclxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0R2FtZVwiKTtcclxuICAgICAgICAoX2IgPSByZXNldEJ1dHRvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlc2V0R2FtZSk7XHJcbiAgICAgICAgdGhpcy5hcHBseUJpbmRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBjaGVja0ZvcldpbnMoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2lubmluZyBDb21ib3MgYXJlIDEsMiwzfDQsNSw2fDcsOCw5fDEsNSw5fDMsNSw3fDEsNCw3fDIsNSw4fDMsNiw5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgd2lucyA9IFtcclxuICAgICAgICAgICAgWzEsIDIsIDNdLFxyXG4gICAgICAgICAgICBbNCwgNSwgNl0sXHJcbiAgICAgICAgICAgIFs3LCA4LCA5XSxcclxuICAgICAgICAgICAgWzEsIDUsIDldLFxyXG4gICAgICAgICAgICBbMywgNSwgN10sXHJcbiAgICAgICAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICAgICAgICBbMywgNiwgOV1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCB3aW5uZXI7XHJcbiAgICAgICAgd2lucy5mb3JFYWNoKChjb21ibykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5jZWxsc1tjb21ib1swXSAtIDFdLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gdGhpcy5jZWxsc1tjb21ib1sxXSAtIDFdLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jZWxsc1tjb21ib1syXSAtIDFdLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoYSAmJiBiICYmIGMgJiYgYSA9PSBiICYmIGIgPT0gYykge1xyXG4gICAgICAgICAgICAgICAgd2lubmVyID0gYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgQ29uZ3JhdHVsYXRpb25zISAke3dpbm5lcn0gaGFzIHdvbiB0aGUgZ2FtZS5gKTtcclxuICAgICAgICAgICAgfSwgMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50dHQtYm9hcmRcIik7XHJcbiAgICAgICAgKF9hID0gYm9hcmQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy51c2VyUGlja2VkKTtcclxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0R2FtZVwiKTtcclxuICAgICAgICAoX2IgPSByZXNldEJ1dHRvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlc2V0R2FtZSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRpZGFjdC10aWN0YWN0b2VcIiwgVGljVGFjVG9lR2FtZSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGUgaWQ9XFxcInRvZG8tbGlzdC10ZW1wbGF0ZVxcXCI+XFxyXFxuICAgIDxzdHlsZT5cXHJcXG4gICAgICAgIC50b2RvLWhlYWRlciB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvZG8tc3RhdHVzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50b2RvLWxpc3Qge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwLjVlbSBzb2xpZCAjMzMzO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby1hcmVhIHtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIDwvc3R5bGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvZG8tbGlzdFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1zdGF0dXNcXFwiPlRvdGFsIEl0ZW1zOiBcXHJcXG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6dG9kb0NvdW50XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInRvZG8tc29ydFxcXCI+U29ydCBUb2dnbGU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInRvZG8taGlkZVxcXCI+U2hvdyAvIEhpZGUgQ29tcGxldGVkPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvZG8tYXJlYVxcXCIgZGF0YS1iaW5kPVxcXCJjaGlsZHJlbjp0b2RvSXRlbXNcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjx0ZW1wbGF0ZSBpZD1cXFwidG9kby1pdGVtLXRlbXBsYXRlXFxcIj5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLnRvZG8taXRlbSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50b2RvLWNoZWNrIHtcXHJcXG4gICAgICAgICAgICBmbGV4OiAuMjU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudG9kby10ZXh0IHtcXHJcXG4gICAgICAgICAgICBmbGV4OiAuNzU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIDwvc3R5bGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvZG8taXRlbVxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJ0b2RvLWNoZWNrXFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6Y29tcGxldGVkXFxcIiAvPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRvZG8tdGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OnRvZG9UaXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IERpZGFjdENvbXBvbmVudEJhc2UsIE9ic2VydmFibGUsIHNlcnZlckpzb24sIENvbXB1dGVkIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmltcG9ydCBodG1sIGZyb20gXCIuL3RvZG8uaHRtbFwiO1xyXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIERpZGFjdENvbXBvbmVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0b2RvLWxpc3QtdGVtcGxhdGVcIiwgaHRtbCk7XHJcbiAgICAgICAgdGhpcy5zb3J0VG9kb3MgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnNvcnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2NcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQgPSBcImRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ID0gXCJhc2NcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zb3J0ID09PSBcImFzY1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy52YWx1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudG9kb1RpdGxlLnZhbHVlLmxvY2FsZUNvbXBhcmUoYi50b2RvVGl0bGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy52YWx1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIudG9kb1RpdGxlLnZhbHVlLmxvY2FsZUNvbXBhcmUoYS50b2RvVGl0bGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMubm90aWZ5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNvbXBsZXRlZCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGlkZGVuID0gIXRoaXMuY29tcGxldGVIaWRkZW47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBsZXRlSGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy52YWx1ZSA9IHRoaXMudG9kb0l0ZW1zLnZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXRlbS5jb21wbGV0ZWQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29tcGxldGVkIGl0ZW1zIG5vdCBpbiB0aGUgbGlzdCBiYWNrXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b0FkZCA9IHRoaXMuZGF0YS5maWx0ZXIoaSA9PiBpLmNvbXBsZXRlZCAmJiB0aGlzLnRvZG9JdGVtcy52YWx1ZS5pbmRleE9mKGkpID09IC0xKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy52YWx1ZS5zcGxpY2UodGhpcy50b2RvSXRlbXMudmFsdWUubGVuZ3RoLCAwLCAuLi50b0FkZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMubm90aWZ5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvZG9JdGVtcyA9IG5ldyBPYnNlcnZhYmxlKFtdKTtcclxuICAgICAgICB0aGlzLnNvcnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVIaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvZG9Db3VudCA9IG5ldyBDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvZG9JdGVtcy52YWx1ZS5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgICAgICB9LCBbdGhpcy50b2RvSXRlbXNdKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdGhpcy5hcHBseUJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3Qgc29ydEJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc29ydFwiKTtcclxuICAgICAgICAoX2EgPSBzb3J0QnRuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc29ydFRvZG9zKTtcclxuICAgICAgICBjb25zdCBoaWRlQnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1oaWRlXCIpO1xyXG4gICAgICAgIChfYiA9IGhpZGVCdG4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVDb21wbGV0ZWQpO1xyXG4gICAgICAgIHRoaXMubG9hZFRvZG9zKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBsb2FkVG9kb3MoKSB7XHJcbiAgICAgICAgLy8gTG9hZCBEYXRhXHJcbiAgICAgICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QoJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBjYWNoZTogJ25vLXN0b3JlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclRvZG9zID0gYXdhaXQgc2VydmVySnNvbihyZXEpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHNlcnZlclRvZG9zLm1hcCgodG9kbykgPT4gbmV3IFRvZG9JdGVtKHRvZG8pKTtcclxuICAgICAgICB0aGlzLnRvZG9JdGVtcy52YWx1ZSA9IHRoaXMuZGF0YS5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzKCk7XHJcbiAgICAgICAgY29uc3Qgc29ydEJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc29ydFwiKTtcclxuICAgICAgICAoX2EgPSBzb3J0QnRuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc29ydFRvZG9zKTtcclxuICAgICAgICBjb25zdCBoaWRlQnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1oaWRlXCIpO1xyXG4gICAgICAgIChfYiA9IGhpZGVCdG4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVDb21wbGV0ZWQpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgRGlkYWN0Q29tcG9uZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0b2RvLWl0ZW0tdGVtcGxhdGVcIik7XHJcbiAgICAgICAgdGhpcy50b2RvVGl0bGUgPSBuZXcgT2JzZXJ2YWJsZShpdGVtLnRpdGxlKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IG5ldyBPYnNlcnZhYmxlKGl0ZW0uY29tcGxldGVkKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncygpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncygpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRvZG8tbGlzdFwiLCBUb2RvTGlzdCk7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRvZG8taXRlbVwiLCBUb2RvSXRlbSk7XHJcbiIsIi8qKlxyXG4gKiBiaW5kaW5ncyBjb250YWlucyBzZXQgb2YgZnVuY3Rpb25zIHRoYXQgYmluZFxyXG4gKiBhbiBlbGVtZW50IHRvIGFueSBvYnNlcnZhYmxlIGFuZCByZXR1cm5zIGEgZnVuY3Rpb25cclxuICogdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuYmluZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJpbmRpbmdzID0ge1xyXG4gICAgdmFsdWU6IChpbnB1dCwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IGlucHV0LnZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVPYnMgPSAoKSA9PiBvYnNlcnZhYmxlLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRleHQ6IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgZWxlbS5pbm5lclRleHQgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiBlbGVtLmlubmVyVGV4dCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGh0bWw6IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiBlbGVtLmlubmVySFRNTCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNoZWNrZWQ6IChpbnB1dCwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC50eXBlICE9PSBcImNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgIHRocm93IFwiY2hlY2tlZCBiaW5kaW5nIGNhbiBvbmx5IGJlIHVzZWQgb24gY2hlY2tib3hlc1wiO1xyXG4gICAgICAgIC8vIHNldCBEZWZhdWx0XHJcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IChvYnNlcnZhYmxlLnZhbHVlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cGRhdGVPYnMgPSAoKSA9PiBvYnNlcnZhYmxlLnZhbHVlID0gaW5wdXQuY2hlY2tlZDtcclxuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudW5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjaGlsZHJlbjogKGVsZW0sIG9ic2VydmFibGUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVDaGlsZHJlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB3aGlsZSAoZWxlbS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgbmV3IGNoaWxkcmVuIGluIG9yZGVyXHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudmFsdWUuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHVwZGF0ZUNoaWxkcmVuKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVuc3Vic2NyaWJlKHVwZGF0ZUNoaWxkcmVuKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyogWW91IGFkZCBtb3JlIGhlcmUgKi9cclxufTtcclxuIiwiaW1wb3J0IHsgYmluZGluZ3MgfSBmcm9tIFwiLi9iaW5kaW5nc1wiO1xyXG5leHBvcnQgeyBPYnNlcnZhYmxlLCBDb21wdXRlZCB9IGZyb20gXCIuL29ic2VydmFibGVcIjtcclxuZXhwb3J0IHsgc2F2ZUxvY2FsLCBzYXZlU2Vzc2lvbiwgc2VydmVySnNvbiwgZ2V0TG9jYWwsIGdldFNlc3Npb24gfSBmcm9tIFwiLi9kYXRhXCI7XHJcbi8qKlxyXG4gKiBGaW5kcyBhIFN1YnNjcmliYWJsZSBvbiBhbiBPYmplY3QgYnkgaW5zcGVjdGluZyBpdCdzIHByb3BlcnRpZXNcclxuICogQHBhcmFtIHRoaXMgT2JqZWN0IHRvIGZpbmQgYSBQcm9wZXJ0eSBPblxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIHRoZSBQcm9wZXJ0eVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0T2JzZXJ2YWJsZShwcm9wTmFtZSkge1xyXG4gICAgaWYgKHByb3BOYW1lLmluZGV4T2YoXCJbXCIpID4gMCAmJiBwcm9wTmFtZS5pbmRleE9mKFwiXVwiKSA+IDApIHtcclxuICAgICAgICBjb25zdCBhcnJQcm9wID0gcHJvcE5hbWUucmVwbGFjZSgnXScsICcnKS5zcGxpdChcIltcIik7XHJcbiAgICAgICAgaWYgKGFyclByb3AubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliYWJsZSA9IHRoaXNbYXJyUHJvcFswXV1bYXJyUHJvcFsxXV07XHJcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmFibGUgJiYgc3Vic2NyaWJhYmxlLnN1YnNjcmliZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliYWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzW3Byb3BOYW1lXSAmJiB0aGlzW3Byb3BOYW1lXS5zdWJzY3JpYmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1twcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlkYWN0Q29tcG9uZW50QmFzZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0cyBhIERpZGFjdCBDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIHRoZSBUZW1wbGF0ZSBJRCBmb3IgdGhlIENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIGh0bWwgdGhlIEhUTUwgaW5jbHVkaW5nIHRoZSB0ZW1wbGF0ZSB0YWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVJZCwgaHRtbCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFwcGxpZXMgYmluZGluZyBsb2dpYyB0byBhbGwgZWxlbWVudHNcclxuICAgICAgICAgKiB3aXRoIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmluZF1cIikuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5kTGlzdCA9IChfYSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGJpbmRMaXN0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYmluZGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtiaW5kZXJUeXBlLCBwcm9wTmFtZV0gPSBiaW5kaW5nLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluZGVyID0gYmluZGluZ3NbYmluZGVyVHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzID0gZ2V0T2JzZXJ2YWJsZS5jYWxsKHRoaXMsIHByb3BOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJpbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBiaW5kaW5nIFske2JpbmRpbmd9XSBjb3VsZCBub3QgYmUgYWRkZWQuIFRoZXJlIGlzIG5vdCBzdWNoIGJpbmRpbmcgdHlwZS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvYnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYmluZGluZyBbJHtiaW5kaW5nfV0gY291bGQgbm90IGJlIGFkZGVkLiBUaGVyZSBpcyBub3Qgc3VjaCBiaW5kaW5nIHR5cGUuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kZXIgJiYgb2JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmluZGluZ3MucHVzaChiaW5kZXIoZWxlbSwgb2JzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVtb3ZlcyBiaW5kaW5nIGxvZ2ljIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW1vdmVCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgKHRoaXMuYWN0aXZlQmluZGluZ3MpLmZvckVhY2gocmVtb3ZlQmluZGluZyA9PiByZW1vdmVCaW5kaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICAgICAgICAgIGlmICghdGVtcGwgJiYgaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgICAgICAgaWYgKCF0ZW1wbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCBhIDx0ZW1wbGF0ZT4gd2l0aCBpZD1cIiR7dGVtcGxhdGVJZH1cIiBgKTtcclxuICAgICAgICAgICAgICAgIHRocm93ICdDb21wb25lbnQgaXMgTWlzc2luZyBUZW1wbGF0ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKF9hID0gdGhpcy5zaGFkb3dSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQodGVtcGwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXRGcm9tKHN0b3JlLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGNvbnN0IGpzb24gPSBzdG9yZS5nZXRJdGVtKG5hbWUpO1xyXG4gICAgaWYgKGpzb24gPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzYXZlVG8oc3RvcmUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgc3RvcmUuc2V0SXRlbShuYW1lLCBqc29uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0b3JlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSXRlbSBmcm9tIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIGlmIG5vdCBwcm92aWRlZCByZXR1cm5zIG51bGxcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBJdGVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKHNlc3Npb25TdG9yYWdlLCBuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4vKipcclxuICogU2F2ZXMgYW4gSXRlbSBpbnRvIFNlc3Npb24gU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gdmFsdWUgTmV3IFZhbHVlIHRvIGJlIFN0b3JlZFxyXG4gKiBAcmV1cm5zIFByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50bHkgc3RvcmVkIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZVNlc3Npb24gPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhzZXNzaW9uU3RvcmFnZSwgbmFtZSwgdmFsdWUpO1xyXG4vKipcclxuICogUmV0dXJucyBhbiBJdGVtIGZyb20gTG9jYWwgU3RvcmFnZVxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBTdG9yZWQgSXRlbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIERlZmF1bHQgdmFsdWUgaWYgbm90IHByb3ZpZGVkIHJldHVybnMgbnVsbFxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEl0ZW0sIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0TG9jYWwgPSAobmFtZSwgZGVmYXVsdFZhbHVlKSA9PiBnZXRGcm9tKGxvY2FsU3RvcmFnZSwgbmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuLyoqXHJcbiAqIFNhdmVzIGFuIEl0ZW0gaW50byBMb2NhbCBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSB2YWx1ZSBOZXcgVmFsdWUgdG8gYmUgU3RvcmVkXHJcbiAqIEByZXVybnMgUHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnRseSBzdG9yZWQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlTG9jYWwgPSAobmFtZSwgdmFsdWUpID0+IHNhdmVUbyhsb2NhbFN0b3JhZ2UsIG5hbWUsIHZhbHVlKTtcclxuLyoqXHJcbiAqIEhlbHBlciB0byBFeGVjdXRlIFByb21pc2UgYW5kIGluc3BlY3QgdGhlIHJlc3BvbnNlIENvZGVcclxuICogQHBhcmFtIHJlcXVlc3QgdGhlIFJlcXVlc3QgdG8gc2VuZCAoZS5nLiBuZXcgUmVxdWVzdCgndXJsJykpXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGRhdGEuIFJlamVjdHMgaWYgbm90IGRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2ZXJKc29uKHJlcXVlc3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobXNnKSA9PiByZWplY3QobXNnKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gcmVqZWN0KHJlYXNvbikpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENsYXNzIHRoYXQgbGV0cyB1cyBvYnNlcnZlIGEgdmFsdWUgZm9yIGNoYW5nZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBub3RpZnkoKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIodGhpcy5fdmFsdWUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIFN1YnNjcmliZXJcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHNob3VsZCBub3QgYmUgY2FsbGVkIGFueSBsb25nZXIgd2hlbiB0aGUgdmFsdWUgdXBkYXRlc1xyXG4gICAgICovXHJcbiAgICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UodGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIE9ic2VydmFibGVcclxuICAgICAqIE5vdGlmeWluZyBhbnkgU3Vic2NyaWJlciBpZiB0aGUgdmFsdWUgaXMgbmV3XHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWxsb3dzIGNvbXBvc2l0aW9uIG9mIGEgdmFsdWUgYmFzZWQgdXBvbiBvYnNlcnZpbmcgb3RoZXIgY2hhbmdlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXB1dGVkIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBOZXcgQ29tcHV0ZWQgVmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBGdW5jdGlvbiB0aGUgcmVzdWx0cyBpbiB0aGUgVmFsdWVcclxuICAgICAqIEBwYXJhbSBkZXBzIE9ic2VydmFibGVzIHRoYXQgdHJpZ2dlciB0aGlzIENvbXB1dGVkIHRvIFVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZGVwcykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlKCkpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC5zdWJzY3JpYmUobGlzdGVuZXIpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgQ29tcHV0ZWQgUmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE5vdCBwb3NzaWJsZSB0byBzZXQgdmFsdWUgb2YgQ29tcHV0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbHVlKF8pIHtcclxuICAgICAgICB0aHJvdyBcIkNhbm5vdCBzZXQgY29tcHV0ZWQgcHJvcGVydHlcIjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9