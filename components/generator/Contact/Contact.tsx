import { FormInput } from 'components/form';
import useLocalStorage from 'lib/hooks/useLocalStorage';
import { FormType } from 'lib/types';
import Image from 'next/image';
import { useCallback } from 'react';

const Contact: React.FC<FormType<'contact'>> = ({ values, errors, handleChange, handleSubmit }) => {
  const [imageName, setImageName] = useLocalStorage<string>('imageName', '');
  const [fileName, setFileName] = useLocalStorage<string>('fileName', '');
  const placeholderImage = '/static/images/generic-profile-placeholder-v3.png';

  const handleImgChange = useCallback(
    (e: { target: { name: string; files: any } }) => {
      const { name, files } = e.target;
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageData: any = reader.result;
        handleChange({
          target: { name: name, value: imageData }
        });
      };

      setImageName(name);
      setFileName(file.name);
    },
    [handleChange, setFileName, setImageName]
  );

  const handleDeleteImage = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      handleChange({
        target: { name: imageName, value: '' }
      });
      setFileName('');
    },
    [handleChange, imageName, setFileName]
  );

  return (
    <div className="min-w-full space-y-10">
      <form className="space-y-10">
        <div className="flex flex-col items-start gap-y-5">
          <Image
            src={values.image || placeholderImage}
            width={270}
            height={270}
            alt={values.image ? values.name : 'placeholder image'}
            className="h-44 w-44 object-cover"
          />
          <div className="relative flex flex-col w-full border-b-2 border-base-500 focus:border-base-900 uppercase text-base-700 leading-6 tracking-wider font-mono text-sm md:text-base">
            <label htmlFor="image" className="h-full pb-12">
              Add your profile picture
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleImgChange}
                accept=".png, .jpg, .jpeg"
                autoComplete="off"
                spellCheck="false"
                aria-required={false}
                className="sr-only"
              />
            </label>
            <span className="absolute bottom-0 mb-2 font-sans normal-case">{fileName}</span>
          </div>
          <button
            type="button"
            onClick={handleDeleteImage}
            className="bg-pink-500 text-base-0 py-1 px-2 rounded-md"
          >
            Remove Image
          </button>
        </div>
        <hr />
        <div className="columns-2">
          <FormInput
            value={values.name}
            type="text"
            id="name"
            label="full name"
            require
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
            require
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
            require
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
            require
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
};

export default Contact;
