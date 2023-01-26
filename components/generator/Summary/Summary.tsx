import { FormTextArea } from 'components/form';
import { FormType } from 'lib/types';

const Summary: React.FC<FormType<'summary'>> = ({ values, handleChange, handleSubmit }) => (
  <div className="min-w-full">
    <form className="space-y-10">
      <FormTextArea
        value={values.summary}
        type="text"
        id="summary"
        label="add your skills"
        require={false}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="flex items-center justify-center w-full bg-base-0 py-3 px-4 rounded border-4 border-base-450 focus-visible:border-base-700 hover:border-base-700 transition-all uppercase"
      >
        save
      </button>
    </form>
  </div>
);

export default Summary;
