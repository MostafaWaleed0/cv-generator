import { FormInput, FormTextArea, RangeMonth } from 'components/form';
import { FormType } from 'lib/types';

const Projects: React.FC<FormType<'projects'>> = ({
  values,
  errors,
  handleChange,
  handleSubmit
}) => (
  <div className="min-w-full">
    <form className="space-y-10">
      <div className="grid grid-cols-2 gap-16 items-end">
        <FormInput
          value={values.title}
          type="text"
          id="title"
          label="project title"
          require={true}
          onChange={handleChange}
          placeholder="Volunteer"
          error={!!errors?.title}
          errorMessage={errors?.title ? errors?.title : ''}
        />
        <FormInput
          value={values.organization}
          type="text"
          id="organization"
          label="In which organization did you implement your project?"
          require={false}
          onChange={handleChange}
          placeholder="Habitat for Humanity"
        />
        <RangeMonth
          startTime={values.start_time}
          handleChange={handleChange}
          firstLabel="When did you start working on the project?"
          lastLabel="When did you finish working on the project?"
          options={{
            year: 'numeric',
            month: 'long'
          }}
        />
      </div>
      <FormTextArea
        value={values.details}
        type="text"
        id="details"
        label="Describe what you did"
        require={false}
        onChange={handleChange}
        placeholder="Volunteered to help renovate a house and managed a team of 6."
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

export default Projects;
