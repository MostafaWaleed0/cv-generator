import { FormTextArea } from 'components/form';
import { FormType } from 'lib/types';

const Skills: React.FC<FormType<'skills'>> = ({ values, errors, handleChange, handleSubmit }) => (
  <div className="min-w-full">
    <form className="space-y-10">
      <FormTextArea
        value={values.skill}
        type="text"
        id="skill"
        label="add your skills"
        require={true}
        onChange={handleChange}
        error={!!errors?.skill}
        errorMessage={errors?.skill ? errors?.skill : ''}
        placeholder="Soft Skills: Leadership, Teamwork, Time Management"
      />
      <button
        onClick={(e) => handleSubmit(e, 'skills')}
        type="submit"
        className="flex items-center justify-center w-full bg-base-0 py-3 px-4 rounded border-4 border-base-450 focus-visible:border-base-700 hover:border-base-700 transition-all uppercase"
      >
        save
      </button>
    </form>
  </div>
);

export default Skills;
