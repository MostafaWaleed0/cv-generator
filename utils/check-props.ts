import { ResumeViewType } from 'lib/types';

export const checkProps = (
  obj: ResumeViewType,
  key: keyof ResumeViewType,
  prop: string
): boolean => {
  return Object.prototype.hasOwnProperty.call(obj[key], prop);
};
