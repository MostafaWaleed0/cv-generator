interface Props {
  id: string;
  error: boolean;
  errorMessage: string;
}

const FormError: React.FC<Props> = ({ error, id, errorMessage }) => (
  <>
    {error && (
      <p id={`${id}_error`} className="absolute text-red-600 mt-3 text-base md:text-xl">
        * {errorMessage}
      </p>
    )}
  </>
);

export default FormError;
