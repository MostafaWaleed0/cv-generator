import { ErrorsType } from 'lib/types';

/**
 * Checks if an object of errors is not empty for a given key.
 *
 * @param {ErrorsType} errors - The object containing errors to check.
 * @param {keyof ErrorsType} key - The key of the errors object to check.
 * @returns {boolean} Returns true if the errors object is not empty, false otherwise.
 */
export const checkErrors = (errors: ErrorsType, key: keyof ErrorsType): boolean => {
  return errors && Object.keys(errors[key]).length > 0;
};
