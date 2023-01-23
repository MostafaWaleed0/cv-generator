import { SetStateAction, useState } from 'react';

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, React.Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch {
      throw new Error('error in state');
    }
  });

  const setValue = (value: SetStateAction<T>): void => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(value);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      throw new Error('error in setState');
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
