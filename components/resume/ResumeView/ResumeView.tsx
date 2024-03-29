import {
  Contact,
  Coursework,
  Education,
  Experience,
  Involvement,
  Projects,
  Skills,
  Summary,
  Testimonials
} from 'components/generator';
import Resume from 'layouts/Resume';
import useLocalStorage from 'lib/hooks/useLocalStorage';
import { DataType, ErrorsType, ResumeViewType } from 'lib/types';
import React, { useCallback, useMemo, useState } from 'react';
import { checkErrors, checkProps, uniqueid, validate } from 'utils';
import ItemsList from '../ItemsList';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const ResumeView: React.FC = () => {
  const [values, setValues] = useLocalStorage<ResumeViewType>('values', {
    contact: {
      name: '',
      image: '',
      email: '',
      phone: '',
      job: '',
      country: '',
      website: '',
      city: '',
      state: '',
      linkedin: ''
    },
    experience: {
      id: '',
      role: '',
      company: '',
      location: '',
      end_time: '',
      start_time: '',
      details: ''
    },
    projects: {
      id: '',
      title: '',
      organization: '',
      start_time: '',
      end_time: '',
      details: ''
    },
    education: {
      id: '',
      qualification: '',
      institution: '',
      location: '',
      time: '',
      qpa: ''
    },
    testimonials: {
      id: '',
      name: '',
      department: '',
      time: '',
      importance: '',
      relevant: ''
    },
    coursework: {
      id: '',
      name: '',
      institution: '',
      time: '',
      skill: '',
      applied_skills: ''
    },
    involvement: {
      id: '',
      role: '',
      organization: '',
      institution: '',
      end_time: '',
      start_time: '',
      details: ''
    },
    skills: {
      id: '',
      skill: ''
    },
    summary: {
      summary: ''
    },
    finished: {}
  });
  const reset: ResumeViewType = useMemo(
    () => ({
      contact: {
        name: '',
        email: '',
        image: '',
        phone: '',
        job: '',
        country: '',
        website: '',
        city: '',
        state: '',
        linkedin: ''
      },
      experience: {
        id: '',
        role: '',
        company: '',
        location: '',
        end_time: '',
        start_time: '',
        details: ''
      },
      projects: {
        id: '',
        title: '',
        end_time: '',
        start_time: '',
        organization: '',
        details: ''
      },
      education: {
        id: '',
        qualification: '',
        institution: '',
        location: '',
        time: '',
        qpa: ''
      },
      testimonials: {
        id: '',
        name: '',
        department: '',
        time: '',
        importance: '',
        relevant: ''
      },
      coursework: {
        id: '',
        name: '',
        institution: '',
        time: '',
        skill: '',
        applied_skills: ''
      },
      involvement: {
        id: '',
        role: '',
        organization: '',
        institution: '',
        end_time: '',
        start_time: '',
        details: ''
      },
      skills: {
        id: '',
        skill: ''
      },
      summary: {
        summary: ''
      },
      finished: {}
    }),
    []
  );

  const [errors, setErrors] = useState<ErrorsType>({
    contact: {},
    experience: {},
    projects: {},
    education: {},
    testimonials: {},
    coursework: {},
    involvement: {},
    skills: {},
    summary: {},
    finished: {}
  });
  const [step, setStep] = useLocalStorage('step', 0);
  const [data, setData] = useLocalStorage<DataType>('data', {
    contact: {},
    projects: [],
    experience: [],
    education: [],
    testimonials: [],
    coursework: [],
    involvement: [],
    skills: [],
    summary: {},
    finished: {}
  });

  const handleChange = useCallback(
    (key: keyof ResumeViewType) => {
      return (
        e: { target: { name: string; value: string } },
        date?: string,
        customName?: string
      ) => {
        const { name, value } = e.target;
        setValues((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            [name ?? customName]: value ?? date
          }
        }));
      };
    },
    [setValues]
  );

  const handleSubmit = useCallback(
    (key: keyof ResumeViewType) => {
      return (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const inputErrors = validate(values);
        const successMassage = 'Your information is saved 😀';

        if (checkErrors(inputErrors, key)) {
          const errorMassage = '❌ Error: The required input must be filled in';
          return (
            setErrors((prev) => ({
              ...prev,
              [key]: inputErrors[key]
            })),
            toast(errorMassage)
          );
        }
        toast(successMassage);

        setErrors({
          contact: {},
          experience: {},
          projects: {},
          education: {},
          testimonials: {},
          coursework: {},
          involvement: {},
          skills: {},
          summary: {},
          finished: {}
        });

        setData((prev) => ({
          ...prev,
          [key]: checkProps(values, key, 'id')
            ? [...(prev[key] as []), { ...values[key], id: uniqueid() }]
            : { ...prev[key], ...values[key] }
        }));

        if (checkProps(values, key, 'id')) {
          setValues((prev) => ({ ...prev, [key]: { ...prev[key], ...reset[key] } }));
        }
      };
    },
    [reset, setData, setValues, values]
  );

  const handleDeleteItem = useCallback(
    (_data: DataType, key: keyof DataType, _id: string) => {
      return () => {
        setData((prev) => ({
          ...prev,
          [key]: [...(_data[key] as [])].filter(({ id }) => id !== _id)
        }));
      };
    },
    [setData]
  );

  const handleEditItem = useCallback(
    (_data: DataType, key: keyof DataType, _id: string) => {
      const findIndex = (_data[key] as []).findIndex(({ id }) => id === _id);
      const filterData = { ...(_data[key] as []) }[findIndex];

      return () => {
        setValues((prev) => ({ ...prev, [key]: filterData }));
        handleDeleteItem(_data, key, _id)();
      };
    },
    [handleDeleteItem, setValues]
  );

  const handleSetStep = (index: number) => {
    return (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setStep(index);
    };
  };

  const resumeStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Experience
              values={values.experience}
              errors={errors.experience}
              handleChange={handleChange('experience')}
              handleSubmit={handleSubmit('experience')}
            />
            <ul role="list">
              {data.experience?.map(({ id, company }) => (
                <ItemsList
                  key={id}
                  title={company}
                  handleDelete={handleDeleteItem(data, 'experience', id)}
                  handleEdit={handleEditItem(data, 'experience', id)}
                />
              ))}
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <Projects
              values={values.projects}
              errors={errors.projects}
              handleChange={handleChange('projects')}
              handleSubmit={handleSubmit('projects')}
            />
            <ul role="list">
              {data.projects?.map(({ id, title }) => {
                return (
                  <ItemsList
                    key={id}
                    title={title}
                    handleDelete={handleDeleteItem(data, 'projects', id)}
                    handleEdit={handleEditItem(data, 'projects', id)}
                  />
                );
              })}
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <Education
              values={values.education}
              errors={errors.education}
              handleChange={handleChange('education')}
              handleSubmit={handleSubmit('education')}
            />
            <ul role="list">
              {data.education?.map(({ id, qualification }) => {
                return (
                  <ItemsList
                    key={id}
                    title={qualification}
                    handleDelete={handleDeleteItem(data, 'education', id)}
                    handleEdit={handleEditItem(data, 'education', id)}
                  />
                );
              })}
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <Testimonials
              values={values.testimonials}
              errors={errors.testimonials}
              handleChange={handleChange('testimonials')}
              handleSubmit={handleSubmit('testimonials')}
            />
            <ul role="list">
              {data.testimonials?.map(({ id, name }) => {
                return (
                  <ItemsList
                    key={id}
                    title={name}
                    handleDelete={handleDeleteItem(data, 'testimonials', id)}
                    handleEdit={handleEditItem(data, 'testimonials', id)}
                  />
                );
              })}
            </ul>
          </>
        );
      case 5:
        return (
          <>
            <Coursework
              values={values.coursework}
              errors={errors.coursework}
              handleChange={handleChange('coursework')}
              handleSubmit={handleSubmit('coursework')}
            />
            <ul role="list">
              {data.coursework?.map(({ id, name }) => {
                return (
                  <ItemsList
                    key={id}
                    title={name}
                    handleDelete={handleDeleteItem(data, 'coursework', id)}
                    handleEdit={handleEditItem(data, 'coursework', id)}
                  />
                );
              })}
            </ul>
          </>
        );
      case 6:
        return (
          <>
            <Involvement
              values={values.involvement}
              errors={errors.involvement}
              handleChange={handleChange('involvement')}
              handleSubmit={handleSubmit('involvement')}
            />
            <ul role="list">
              {data.involvement?.map(({ id, organization }) => {
                return (
                  <ItemsList
                    key={id}
                    title={organization}
                    handleDelete={handleDeleteItem(data, 'involvement', id)}
                    handleEdit={handleEditItem(data, 'involvement', id)}
                  />
                );
              })}
            </ul>
          </>
        );
      case 7:
        return (
          <>
            <Skills
              values={values.skills}
              errors={errors.skills}
              handleChange={handleChange('skills')}
              handleSubmit={handleSubmit('skills')}
            />
            <ul role="list">
              {data.skills?.map(({ id, skill }) => {
                return (
                  <ItemsList
                    key={id}
                    title={skill}
                    handleDelete={handleDeleteItem(data, 'skills', id)}
                    handleEdit={handleEditItem(data, 'skills', id)}
                  />
                );
              })}
            </ul>
          </>
        );
      case 8:
        return (
          <Summary
            values={values.summary}
            handleChange={handleChange('summary')}
            handleSubmit={handleSubmit('summary')}
          />
        );
      case 9:
        return <Resume data={data} />;
      default:
        return (
          <Contact
            values={values.contact}
            errors={errors.contact}
            handleChange={handleChange('contact')}
            handleSubmit={handleSubmit('contact')}
          />
        );
    }
  };

  return (
    <div className="container my-20">
      <ul role="list" className="flex flex-wrap justify-center gap-3 uppercase mb-2">
        {Object.keys(values).map((item, index) => (
          <li key={item} className="bg-pink-500 text-base-0 py-1 px-2 rounded-md">
            <button type="button" onClick={handleSetStep(index)} className="uppercase">
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-base-0 p-7 lg:p-20 rounded-lg border-2 border-base-700 overflow-hidden space-y-16 ">
        {Object.keys(values)[step]?.length ? <h2>{Object.keys(values)[step]}</h2> : ''}
        {resumeStep()}
      </div>
      <Toaster
        containerClassName="w-4xl"
        containerStyle={{}}
        toastOptions={{
          className: 'min-w-fit w-[30rem] h-20',
          duration: 1500
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease'
            }}
          />
        )}
      </Toaster>
    </div>
  );
};

export default ResumeView;
