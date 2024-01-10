export default {
    get: (key: string): string | undefined => {
        return localStorage.getItem(key);
    },
    set: (key: string, value: string) => {
        return localStorage.setItem(key, value);
    },
    delete: (key: string) => {
        return localStorage.removeItem(key);
    },
    clear: () => {
        return localStorage.clear();
    }
}