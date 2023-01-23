import { FormInput, FormTextArea, RangeMonth } from 'components/form';
import { FormType } from 'lib/types';

const Involvement: React.FC<FormType<'involvement'>> = ({
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
          label="What is your role in the organization?"
          require={false}
          onChange={handleChange}
          placeholder="Selected Member"
          autoFocus
        />
        <FormInput
          value={values.organization}
          type="text"
          id="organization"
          label="What organization did you work for?"
          require={true}
          onChange={handleChange}
          placeholder="Literature Student Association"
          error={!!errors?.organization}
          errorMessage={errors?.organization ? errors?.organization : ''}
        />
        <RangeMonth
          startTime={values.start_time}
          handleChange={handleChange}
          firstLabel="When did you start working with the organization?"
          lastLabel="When did you take the course?"
          options={{
            year: 'numeric',
            month: 'long'
          }}
        />
        <FormInput
          value={values.institution}
          type="text"
          id="institution"
          label="In which college was the organization based?"
          require={false}
          onChange={handleChange}
          placeholder="University of Oxford, Oxford "
        />
      </div>
      <FormTextArea
        value={values.details}
        type="text"
        id="details"
        label="What did you do in the organization?"
        require={false}
        onChange={handleChange}
        placeholder="Participate in forums and discussions presented by leading thinkers and philosophers associated with the university."
      />
      <button
        onClick={(e) => handleSubmit(e, 'involvement')}
        type="submit"
        className="flex items-center justify-center w-full bg-base-0 py-3 px-4 rounded border-4 border-base-450 focus-visible:border-base-700 hover:border-base-700 transition-all uppercase"
      >
        save
      </button>
    </form>
  </div>
);

export default Involvement;
