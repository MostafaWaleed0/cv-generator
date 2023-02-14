import { ResumeViewType } from 'lib/types';

/**
 * Checks if an object property exists.
 *
 * @param {ResumeViewType} obj - The object to check.
 * @param {keyof ResumeViewType} key - The key of the object to check.
 * @param {string} prop - The name of the property to check for.
 * @returns {boolean} Returns true if the property exists, false otherwise.
 */
export const checkProps = (
  obj: ResumeViewType,
  key: keyof ResumeViewType,
  prop: string
): boolean => {
  return Object.prototype.hasOwnProperty.call(obj[key], prop);
};
