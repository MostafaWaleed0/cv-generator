import { FormInput, FormTextArea, RangeMonth } from 'components/form';
import { FormType } from 'lib/types';

const Experience: React.FC<FormType<'experience'>> = ({
  values,
  errors,
  handleChange,
  handleSubmit
}) => (
  <div className="min-w-full">
    <form className="space-y-10">
      <div className="grid grid-cols-2 gap-16 items-end">
        <FormInput
          value={values.role}
          type="text"
          id="role"
          label="What was your role at the company?"
          require={false}
          onChange={handleChange}
          placeholder="Journalistic"
        />
        <FormInput
          value={values.company}
          type="text"
          id="company"
          label="For which company did you work?"
          require={true}
          onChange={handleChange}
          placeholder="Washington Post"
          error={!!errors?.company}
          errorMessage={errors?.company ? errors?.company : ''}
        />
        <RangeMonth
          startTime={values.start_time}
          handleChange={handleChange}
          firstLabel="When did you start working with the company?"
          lastLabel="When did you finish working with the company?"
          options={{
            year: 'numeric',
            month: 'long'
          }}
        />
        <FormInput
          value={values.location}
          type="text"
          id="location"
          label="Where was the company located?"
          require={false}
          onChange={handleChange}
          placeholder="New York, NY"
        />
      </div>
      <FormTextArea
        value={values.details}
        type="text"
        id="details"
        label="What did you do in the company?"
        require={false}
        onChange={handleChange}
      />

      <button
        onClick={(e) => handleSubmit(e, 'experience')}
        type="submit"
        className="flex items-center justify-center w-full bg-base-0 py-3 px-4 rounded border-4 border-base-450 focus-visible:border-base-700 hover:border-base-700 transition-all uppercase"
      >
        save
      </button>
    </form>
  </div>
);

export default Experience;
