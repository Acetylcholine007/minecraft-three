export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    if (value) return JSON.parse(value);
  }
  return null;
};

export const setLocalStorage = <T,>(key: string, value: T) => {
  if (typeof window !== 'undefined')
    window.localStorage.setItem(key, JSON.stringify(value));
};
