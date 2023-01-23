import { ErrorsType } from 'lib/types';

export const checkErrors = (errors: ErrorsType, key: keyof ErrorsType): boolean => {
  return errors && Object.keys(errors[key]).length > 0;
};
