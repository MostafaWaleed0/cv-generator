import { FormInput, CustomDate } from 'components/form';
import { FormType } from 'lib/types';

const Coursework: React.FC<FormType<'coursework'>> = ({
  values,
  errors,
  handleChange,
  handleSubmit
}) => (
  <div className="min-w-full">
    <form className="space-y-10">
      <div className="columns-2">
        <FormInput
          value={values.name}
          type="text"
          id="name"
          label="What is the course name?"
          require={true}
          onChange={handleChange}
          error={Boolean(errors?.name)}
          errorMessage={errors?.name ? errors?.name : ''}
          placeholder="Introduction To Computer Science"
        />
        <FormInput
          value={values.institution}
          type="text"
          id="institution"
          label="Where did you take the course?"
          require={false}
          onChange={handleChange}
          placeholder="University of Oxford, Oxford "
        />
        <CustomDate
          id="time"
          label="When did you take the course?"
          handleChange={handleChange}
          dateFormat="yyyy"
          showYearPicker
          options={{
            year: 'numeric'
          }}
          value={values.time}
        />
        <FormInput
          value={values.skill}
          type="text"
          id="skill"
          label="What skill did you use?"
          require={false}
          onChange={handleChange}
          placeholder="Teamwork"
        />
        <FormInput
          value={values.applied_skills}
          type="text"
          id="applied_skills"
          label="How was this skill applied?"
          require={false}
          onChange={handleChange}
          placeholder="Coordinating on code with a small group of people."
        />
      </div>
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

export default Coursework;
