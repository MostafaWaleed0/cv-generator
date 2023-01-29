import { FormInput } from 'components/form';
import { FormType } from 'lib/types';

const Contact: React.FC<FormType<'contact'>> = ({ values, errors, handleChange, handleSubmit }) => (
  <div className="min-w-full space-y-10">
    <form className="space-y-10">
      <div className="columns-2">
        <FormInput
          value={values.name}
          type="text"
          id="name"
          label="full name"
          require={true}
          onChange={handleChange}
          placeholder="Anton Larsson"
          error={Boolean(errors?.name)}
          errorMessage={errors?.name ? errors?.name : ''}
        />
        <FormInput
          value={values.job}
          type="text"
          id="job"
          label="job title"
          require={true}
          onChange={handleChange}
          placeholder="Journalistic"
          error={Boolean(errors?.job)}
          errorMessage={errors?.job ? errors?.job : ''}
        />
        <FormInput
          value={values.email}
          type="text"
          id="email"
          label="email address"
          require={true}
          onChange={handleChange}
          placeholder="antonlarsson@po.edu"
          error={Boolean(errors?.email)}
          errorMessage={errors?.email ? errors?.email : ''}
        />
        <FormInput
          value={values.phone}
          type="text"
          id="phone"
          label="phone number"
          require={true}
          onChange={handleChange}
          placeholder="(621) 799-5548"
          error={Boolean(errors?.phone)}
          errorMessage={errors?.phone ? errors?.phone : ''}
        />
        <FormInput
          value={values.website}
          type="text"
          id="website"
          label="personal website"
          require={false}
          onChange={handleChange}
          placeholder="https://antonlarsson.com"
          error={Boolean(errors?.website)}
          errorMessage={errors?.website ? errors?.website : ''}
        />
        <FormInput
          value={values.linkedin}
          type="text"
          id="linkedin"
          label="linkedin"
          require={false}
          onChange={handleChange}
          placeholder="in/antonlarsson"
        />
        <FormInput
          value={values.country}
          type="text"
          id="country"
          label="country"
          require={false}
          onChange={handleChange}
          placeholder="United States"
        />
        <FormInput
          value={values.state}
          type="text"
          id="state"
          label="state"
          require={false}
          onChange={handleChange}
          placeholder="California"
        />
        <FormInput
          value={values.city}
          type="text"
          id="city"
          label="city"
          require={false}
          onChange={handleChange}
          placeholder="Adelanto"
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

export default Contact;
