import { FormInput, CustomDate } from 'components/form';
import { FormType } from 'lib/types';

const Education: React.FC<FormType<'education'>> = ({
  values,
  errors,
  handleChange,
  handleSubmit
}) => (
  <div className="min-w-full">
    <form className="space-y-10">
      <div className="grid grid-cols-2 gap-16 items-end">
        <FormInput
          value={values.qualification}
          type="text"
          id="qualification"
          label="what is your degree?"
          require={true}
          onChange={handleChange}
          placeholder="Bachelor of Arts in English Language and Literature"
          error={Boolean(errors?.qualification)}
          errorMessage={errors?.qualification ? errors?.qualification : ''}
        />
        <FormInput
          value={values.institution}
          type="text"
          id="institution"
          label="Where did you get your degree?"
          require={false}
          onChange={handleChange}
          placeholder="University of Oxford, Oxford"
        />
        <CustomDate
          id="time"
          label="When did you get your degree?"
          handleChange={handleChange}
          dateFormat="yyyy"
          showYearPicker
          options={{
            year: 'numeric'
          }}
          value={values.time}
        />
        <FormInput
          value={values.location}
          type="text"
          id="location"
          label="Where is the institution located?"
          require={false}
          onChange={handleChange}
          placeholder="Oxford, England"
        />
        <FormInput
          value={values.qpa}
          type="text"
          id="qpa"
          label="qpa"
          require={false}
          onChange={handleChange}
          placeholder="3.73 GPA"
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

export default Education;
