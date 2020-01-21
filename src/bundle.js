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
    constructor(templateId) {
        var _a;
        super();
        /**
         * applies binding logic to all elements
         * with a data-bind attribute
         */
        this.applyBindings = () => {
            document.querySelectorAll("[data-bind]").forEach(elem => {
                var _a, _b;
                const bindList = (_a = elem.getAttribute("data-bind")) === null || _a === void 0 ? void 0 : _a.split(',');
                (_b = bindList) === null || _b === void 0 ? void 0 : _b.forEach((binding) => {
                    const [binderType, propName] = binding.split(':');
                    if (binderType in _bindings__WEBPACK_IMPORTED_MODULE_0__["bindings"]) {
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
            const templ = document.getElementById(templateId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsb3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvYmluZGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9jb21wb25lbnRiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L29ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWlDOzs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQUE7QUFBOEQ7QUFDOUQseUJBQXlCLHlFQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDYztBQUM4QjtBQUMzRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGtEQUFRO0FBQzlDLGlEQUFpRCxrREFBUTtBQUN6RDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsS0FBSyxvQkFBb0I7QUFDbkU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVsbG93b3JsZFwiO1xyXG4iLCJpbXBvcnQgeyBEaWRhY3RDb21wb25lbnRCYXNlIH0gZnJvbSBcIi4uL2RpZGFjdC9jb21wb25lbnRiYXNlXCI7XHJcbmNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBEaWRhY3RDb21wb25lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBoaS5pbm5lclRleHQgPSBcIkhlbGxvIFdvcmxkXCI7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGhpKTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hlbGxvLXdvcmxkJywgSGVsbG9Xb3JsZCk7XHJcbiIsIi8qKlxyXG4gKiBiaW5kaW5ncyBjb250YWlucyBzZXQgb2YgZnVuY3Rpb25zIHRoYXQgYmluZFxyXG4gKiBhbiBlbGVtZW50IHRvIGFueSBvYnNlcnZhYmxlIGFuZCByZXR1cm5zIGEgZnVuY3Rpb25cclxuICogdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuYmluZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJpbmRpbmdzID0ge1xyXG4gICAgdmFsdWU6IChpbnB1dCwgb2JzZXJ2YWJsZSkgPT4ge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IGlucHV0LnZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1cGRhdGVPYnMgPSAoKSA9PiBvYnNlcnZhYmxlLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlSW5wdXQpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZU9icyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVPYnMpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdXBkYXRlT2JzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRleHQ6IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgZWxlbS5pbm5lclRleHQgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiBlbGVtLmlubmVyVGV4dCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGh0bWw6IChlbGVtLCBvYnNlcnZhYmxlKSA9PiB7XHJcbiAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBvYnNlcnZhYmxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiBlbGVtLmlubmVySFRNTCA9IG9ic2VydmFibGUudmFsdWU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUodXBkYXRlVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51bnN1YnNjcmliZSh1cGRhdGVUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyogWW91IGFkZCBtb3JlIGhlcmUgKi9cclxufTtcclxuIiwiaW1wb3J0IHsgYmluZGluZ3MgfSBmcm9tIFwiLi9iaW5kaW5nc1wiO1xyXG5leHBvcnQgeyBPYnNlcnZhYmxlLCBDb21wdXRlZCB9IGZyb20gXCIuL29ic2VydmFibGVcIjtcclxuZXhwb3J0IHsgc2F2ZUxvY2FsLCBzYXZlU2Vzc2lvbiwgc2VydmVySnNvbiwgZ2V0TG9jYWwsIGdldFNlc3Npb24gfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmV4cG9ydCBjbGFzcyBEaWRhY3RDb21wb25lbnRCYXNlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVJZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFwcGxpZXMgYmluZGluZyBsb2dpYyB0byBhbGwgZWxlbWVudHNcclxuICAgICAgICAgKiB3aXRoIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYXBwbHlCaW5kaW5ncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWJpbmRdXCIpLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluZExpc3QgPSAoX2EgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSBiaW5kTGlzdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGJpbmRpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbYmluZGVyVHlwZSwgcHJvcE5hbWVdID0gYmluZGluZy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kZXJUeXBlIGluIGJpbmRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmluZGluZ3MucHVzaChiaW5kaW5nc1tiaW5kZXJUeXBlXShlbGVtLCB0aGlzW3Byb3BOYW1lXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYmluZGluZyBbJHtiaW5kaW5nfV0gY291bGQgbm90IGJlIGFkZGVkLiBUaGVyZSBpcyBub3Qgc3VjaCBiaW5kaW5nIHR5cGUuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZW1vdmVzIGJpbmRpbmcgbG9naWMgZnJvbSBhbGwgZWxlbWVudHNcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlbW92ZUJpbmRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAodGhpcy5hY3RpdmVCaW5kaW5ncykuZm9yRWFjaChyZW1vdmVCaW5kaW5nID0+IHJlbW92ZUJpbmRpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQmluZGluZ3MgPSBbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQmluZGluZ3MgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICBpZiAodGVtcGxhdGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZCh0ZW1wbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIGdldEZyb20oc3RvcmUsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgY29uc3QganNvbiA9IHN0b3JlLmdldEl0ZW0obmFtZSk7XHJcbiAgICBpZiAoanNvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNhdmVUbyhzdG9yZSwgbmFtZSwgdmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICBzdG9yZS5zZXRJdGVtKG5hbWUsIGpzb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RvcmUucmVtb3ZlSXRlbShuYW1lKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogUmV0dXJucyBhbiBJdGVtIGZyb20gU2Vzc2lvbiBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgRGVmYXVsdCB2YWx1ZSBpZiBub3QgcHJvdmlkZWQgaWYgbm90IHByb3ZpZGVkIHJldHVybnMgbnVsbFxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEl0ZW0sIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IChuYW1lLCBkZWZhdWx0VmFsdWUpID0+IGdldEZyb20oc2Vzc2lvblN0b3JhZ2UsIG5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbi8qKlxyXG4gKiBTYXZlcyBhbiBJdGVtIGludG8gU2Vzc2lvbiBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSB2YWx1ZSBOZXcgVmFsdWUgdG8gYmUgU3RvcmVkXHJcbiAqIEByZXVybnMgUHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnRseSBzdG9yZWQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlU2Vzc2lvbiA9IChuYW1lLCB2YWx1ZSkgPT4gc2F2ZVRvKHNlc3Npb25TdG9yYWdlLCBuYW1lLCB2YWx1ZSk7XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEl0ZW0gZnJvbSBMb2NhbCBTdG9yYWdlXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIFN0b3JlZCBJdGVtXHJcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgRGVmYXVsdCB2YWx1ZSBpZiBub3QgcHJvdmlkZWQgcmV0dXJucyBudWxsXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgSXRlbSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhbCA9IChuYW1lLCBkZWZhdWx0VmFsdWUpID0+IGdldEZyb20obG9jYWxTdG9yYWdlLCBuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4vKipcclxuICogU2F2ZXMgYW4gSXRlbSBpbnRvIExvY2FsIFN0b3JhZ2VcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgU3RvcmVkIEl0ZW1cclxuICogQHBhcmFtIHZhbHVlIE5ldyBWYWx1ZSB0byBiZSBTdG9yZWRcclxuICogQHJldXJucyBQcm9taXNlIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudGx5IHN0b3JlZCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdmVMb2NhbCA9IChuYW1lLCB2YWx1ZSkgPT4gc2F2ZVRvKGxvY2FsU3RvcmFnZSwgbmFtZSwgdmFsdWUpO1xyXG4vKipcclxuICogSGVscGVyIHRvIEV4ZWN1dGUgUHJvbWlzZSBhbmQgaW5zcGVjdCB0aGUgcmVzcG9uc2UgQ29kZVxyXG4gKiBAcGFyYW0gcmVxdWVzdCB0aGUgUmVxdWVzdCB0byBzZW5kIChlLmcuIG5ldyBSZXF1ZXN0KCd1cmwnKSlcclxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggZGF0YS4gUmVqZWN0cyBpZiBub3QgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZlckpzb24ocmVxdWVzdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmZXRjaChyZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA1MDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChtc2cpID0+IHJlamVjdChtc2cpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoYCR7cmVzcG9uc2Uuc3RhdHVzfSAtICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiByZWplY3QocmVhc29uKSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcclxuICogQ2xhc3MgdGhhdCBsZXRzIHVzIG9ic2VydmUgYSB2YWx1ZSBmb3IgY2hhbmdlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIG5vdGlmeSgpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcih0aGlzLl92YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgU3Vic2NyaWJlclxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXNcclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgU3Vic2NyaWJlclxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIG5vdCBiZSBjYWxsZWQgYW55IGxvbmdlciB3aGVuIHRoZSB2YWx1ZSB1cGRhdGVzXHJcbiAgICAgKi9cclxuICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZSh0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgT2JzZXJ2YWJsZVxyXG4gICAgICovXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgT2JzZXJ2YWJsZVxyXG4gICAgICogTm90aWZ5aW5nIGFueSBTdWJzY3JpYmVyIGlmIHRoZSB2YWx1ZSBpcyBuZXdcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbHVlKHZhbCkge1xyXG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBhbGxvd3MgY29tcG9zaXRpb24gb2YgYSB2YWx1ZSBiYXNlZCB1cG9uIG9ic2VydmluZyBvdGhlciBjaGFuZ2VzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcHV0ZWQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIE5ldyBDb21wdXRlZCBWYWx1ZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIEZ1bmN0aW9uIHRoZSByZXN1bHRzIGluIHRoZSBWYWx1ZVxyXG4gICAgICogQHBhcmFtIGRlcHMgT2JzZXJ2YWJsZXMgdGhhdCB0cmlnZ2VyIHRoaXMgQ29tcHV0ZWQgdG8gVXBkYXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBkZXBzKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUoKSk7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUoKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRlcHMuZm9yRWFjaChkZXAgPT4gZGVwLnN1YnNjcmliZShsaXN0ZW5lcikpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBDb21wdXRlZCBSZXN1bHRcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTm90IHBvc3NpYmxlIHRvIHNldCB2YWx1ZSBvZiBDb21wdXRlZFxyXG4gICAgICovXHJcbiAgICBzZXQgdmFsdWUoXykge1xyXG4gICAgICAgIHRocm93IFwiQ2Fubm90IHNldCBjb21wdXRlZCBwcm9wZXJ0eVwiO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=