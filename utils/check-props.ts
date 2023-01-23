import { ResumeViewType } from 'lib/types';

export const checkProps = (
  obj: ResumeViewType,
  key: keyof ResumeViewType,
  prop: string
): boolean => {
  return obj[key].hasOwnProperty(prop);
};
