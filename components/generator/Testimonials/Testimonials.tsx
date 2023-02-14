import { FormInput, CustomDate, FormTextArea } from 'components/form';
import { FormType } from 'lib/types';

const Testimonials: React.FC<FormType<'testimonials'>> = ({
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
          label="What is the name of the certificate?"
          require
          onChange={handleChange}
          error={errors?.name}
          placeholder="Project Management Professional (PMP)"
        />
        <FormInput
          value={values.department}
          type="text"
          id="department"
          label="Where did you get the certificate?"
          require={false}
          onChange={handleChange}
          placeholder="Project Management Institute"
        />
        <CustomDate
          id="time"
          label="When did you get the certificate?"
          handleChange={handleChange}
          dateFormat="yyyy"
          showYearPicker
          options={{
            year: 'numeric'
          }}
          value={values.time}
        />
      </div>
      <FormTextArea
        value={values.importance}
        type="text"
        id="importance"
        label="What is the importance of certification?"
        require={false}
        onChange={handleChange}
        placeholder="Certified in a standardized and evolving set of project management principles."
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

export default Testimonials;
