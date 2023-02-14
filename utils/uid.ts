/**
 * Generates a unique identifier string by combining the current timestamp with a random string.
 *
 * @returns {string} A unique identifier string.
 */
export const uniqueid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
