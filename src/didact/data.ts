function getFrom<T>(store:Storage, name:string, defaultValue?:T): T | null {
    const json = store.getItem(name);
    if (json === null) {
        return defaultValue || null;
    } else {
        return JSON.parse(json);
    }
}
function saveTo<T>(store:Storage, name:string, value?:T | null) {
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
 * @returns Promise that resolves to the Item, or null if not found
 */
export const getSession = (name:string, defaultValue?:any) => getFrom(sessionStorage, name, defaultValue);

/**
 * Saves an Item into Session Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns Promise that returns the currently stored value
 */
export const saveSession = (name:string, value: any) => saveTo(sessionStorage, name, value);

/**
 * Returns an Item from Local Storage
 * @param name Name of the Stored Item
 * @param defaultValue Default value if not provided returns null
 * @returns Promise that resolves to the Item, or null if not found
 */
export const getLocal = (name:string, defaultValue?:any) => getFrom(localStorage, name, defaultValue);

/**
 * Saves an Item into Local Storage
 * @param name Name of the Stored Item
 * @param value New Value to be Stored
 * @reurns Promise that returns the currently stored value
 */
export const saveLocal = (name:string, value: any) => saveTo(localStorage, name, value);

/**
 * Helper to Execute Promise and inspect the response Code
 * @param request the Request to send (e.g. new Request('url'))
 * @returns Promise that resolves with data. Rejects if not data
 */
export function serverJson(request: Request) {
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