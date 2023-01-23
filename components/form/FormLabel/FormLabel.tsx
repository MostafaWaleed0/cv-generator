import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  label: string;
  require?: boolean;
}

const FormLabel: React.FC<Props> = ({ id, label, require }) => (
  <label
    className="uppercase after:content-['\a'] after:whitespace-pre text-base-700 leading-6 tracking-wider font-mono text-sm md:text-base"
    htmlFor={id}
  >
    {require && <span className="text-black font-bold">*</span>} {label}
  </label>
);

export default FormLabel;
