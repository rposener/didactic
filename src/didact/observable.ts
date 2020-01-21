/**
 * Class that lets us observe a value for changes
 */
export class Observable<T> implements ISubscribable<T> {
    _listeners:Array<(value:T)=> void>;
    _value: T;
    /**
     * Creates an Observable
     * @param value default value
     */
    constructor(value:T) {
        this._listeners = [];
        this._value = value;
    }

    notify():void {
        this._listeners.forEach(listener => listener(this._value));
    }

    /**
     * Adds a Subscriber
     * @param listener function that gets called whenever the value changes
     */
    subscribe(listener:(value:T)=> void):void {
        this._listeners.push(listener);
    }

    /**
     * Removes a Subscriber
     * @param listener function that should not be called any longer when the value updates
     */
    unsubscribe(listener:(value:T)=> void) {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }

    /**
     * Gets the value of the Observable
     */
    get value():T {
        return this._value;
    }

    /**
     * Sets the value of the Observable
     * Notifying any Subscriber if the value is new
     */
    set value(val:T) {
        if (val !== this._value) {
            this._value = val;
            this.notify();
        }
    }
}

/**
 * Class that allows composition of a value based upon observing other changes
 */
export class Computed<R> extends Observable<any> {

    /**
     * Creates a New Computed Value
     * @param value Function the results in the Value
     * @param deps Observables that trigger this Computed to Update
     */
    constructor(value:()=>R, deps:Array<Observable<any>>) {
        super(value());
        const listener = () => {
            this._value = value();
            this.notify();
        }
        deps.forEach(dep => dep.subscribe(listener));
    }

    /**
     * Gets the Computed Result
     */
    get value():R {
        return this._value;
    }

    /**
     * Not possible to set value of Computed
     */
    set value(_) {
        throw "Cannot set computed property";
    }
}

export interface ISubscribable<T>{

    /**
     * Adds a Subscriber
     * @param listener function that gets called whenever the value changes
     */
    subscribe(listener:(value:T)=> void);

    /**
     * Removes a Subscriber
     * @param listener function that should not be called any longer when the value updates
     */
    unsubscribe(listener:(value:T)=> void);

    /**
     * The Current Value of the Subscribable
     */
    value: T;
}