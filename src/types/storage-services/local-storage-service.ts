export const Get = (key: string) => {
    return window.localStorage.getItem(key);
}

export const Add = (key: string, value: string) => {
    return window.localStorage.setItem(key, value);
}

export const Delete = (key: string) => {
    return window.localStorage.removeItem(key);
}