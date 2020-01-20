# Modern Data

By now hopefully you are completely aware of the various different mechanisms to store and retrieve data.  If not or you don't quite know what I'm referring to, let me recap quickly for you the 4 mechanisms:

1. **window.localStorage** is where you can persist *strings* that a user would expect the application not to lose.  This is a great place to store application settings and state.
1. **window.sessionStorage** is a separate area that works just like localStorage except it is cleared as soon as the browser closes.  This is perfect for non-Persistent application state that should persist during the user's visit to your site.  This storage remains intact even if you navigate to other pages and then come back.
1. **window.indexedDB** this is where you can store larger data sets that you'd like keep local to the browser.  It's effectively indexed Key:Value storage with some extra features and abilities.  This topic is too large to cover here, but if you are looking to build a complete app including offline data features, be sure to check it out.
1. **window.fetch()** this is a built-in browser feature similar to the jQuery's ```$.ajax()``` method that works like a ```Promise``` which we can use for async methods and provides easy way to call remote data sources.

## More on localStorage and sessionStorage

I'm going to advocate the use of these within your application.  Nearly every application that uses any kind of setting or data can benefit from these API's.  The caveat to these is that they only store strings. In order to make these more appealing I'm going to demonstrate a pattern that I commonly use to store data using ```JSON``` serialization.

```javascript
function getFrom(store, name, defaultValue) {
    const json = store.getItem(name);
    if (json === null) {
        return defaultValue;
    } else {
        return JSON.parse(json);
    }
}
function saveTo<T>(store,name, value) {
    if (typeof value !== 'undefined' && value !== null) {
        const json = JSON.stringify(value);
        store.setItem(name, json);
    } else {
        store.removeItem(name);
    }
}

/**
 * Returns an Item from Session Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided if not provided returns null
 * @returns the Item, or null if not found
 */
const getSession = (name, defaultValue) => getFrom(sessionStorage, name, defaultValue);

/**
 * Saves an Item into Session Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns nothing
 */
const saveSession = (name, value) => saveTo(sessionStorage, name, value);

/**
 * Returns an Item from Local Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided returns null
 * @returns the Item, or null if not found
 */
const getLocal = (name, defaultValue) => getFrom(localStorage, name, defaultValue);

/**
 * Saves an Item into Local Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns nothing
 */
const saveLocal = (name, value) => saveTo(localStorage, name, value);
```

As you can see the 4 functions allow getting and saving to either Local or Session without any fuss.  Any JSON-serializable object or value can be saved and retrieved seamlessly.


## Remote Data

The fetch API allows us to call servers and work with results no matter the data type in a seamless manner.  There are a couple small things we must get used to though - the fetch API resolves a promise to a response. It has still successfully executed the request, even if the request was a failure (e.g. a 400, 404 or 500 status code).  Since it's so common to need to inspect that data, I recommend a quick wrapper to make this parsing easier.  

The inspection and handling of non-success status codes is something that your application will likely need to handle in a specific way.  This should allow you to create consistent and well handled error responses.

Assuming you are working with just JSON data, you might find a method like this helpful to inspect all calls to your server and resolve/reject based upon the status code from the server.

```javascript
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
            } else if (response.status >= 400 && response.status < 500) {
                response.text()
                    .then((msg) => reject(msg))
                    .catch((err) => reject(err));
            } else {
                reject(`${response.status} - ${response.statusText}`);
            }
        })
        .catch((reason) => reject(reason));
    });
}
```

Wow! You're on a roll.  If it's all making sense so far, continue with the next step and read my [Observability](./OBSERVABILITY.md) documentation.