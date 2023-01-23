import { FormError, FormLabel } from 'components/form';
import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  [x: string]: any;
  id: string;
  label: string;
  error?: boolean;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

const FormTextArea: React.FC<Props> = ({
  id,
  label,
  error = false,
  require,
  errorMessage = '',
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}) => {
  const variableAttribute = { [variablePropName]: variablePropValue };

  return (
    <div>
      <FormLabel id={id} label={label} require={require} />
      <textarea
        {...props}
        name={id}
        id={id}
        rows={10}
        spellCheck="false"
        autoComplete="off"
        className="mt-1 p-2 border-2 border-base-500 w-full outline-none focus:border-base-900"
        {...(error ? variableAttribute : '')}
      ></textarea>
      <FormError error={error} id={id} errorMessage={errorMessage} />
    </div>
  );
};

export default FormTextArea;
