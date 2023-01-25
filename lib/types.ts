/* eslint-disable unused-imports/no-unused-vars */
export type ResumeViewType = {
  contact: {
    name: string;
    email: string;
    phone: string;
    job: string;
    country: string;
    website: string;
    city: string;
    state: string;
    linkedin: string;
  };
  experience: {
    id: string;
    role: string;
    company: string;
    location: string;
    end_time: string;
    start_time: string;
    details: string;
  };
  projects: {
    id: string;
    title: string;
    organization: string;
    start_time: string;
    end_time: string;
    details: string;
  };
  education: {
    id: string;
    qualification: string;
    institution: string;
    location: string;
    time: string;
    qpa: string;
  };
  testimonials: {
    id: string;
    name: string;
    department: string;
    time: string;
    importance: string;
    relevant: string;
  };
  coursework: {
    id: string;
    name: string;
    institution: string;
    time: string;
    skill: string;
    applied_skills: string;
  };
  involvement: {
    id: string;
    role: string;
    organization: string;
    institution: string;
    end_time: string;
    start_time: string;
    details: string;
  };
  skills: {
    id: string;
    skill: string;
  };
  summary: {
    summary: string;
  };
  finished: {};
};

export type DataType = {
  contact: Partial<ResumeViewType['contact']>;
  experience: Array<ResumeViewType['experience']>;
  projects: Array<ResumeViewType['projects']>;
  education: Array<ResumeViewType['education']>;
  testimonials: Array<ResumeViewType['testimonials']>;
  coursework: Array<ResumeViewType['coursework']>;
  involvement: Array<ResumeViewType['involvement']>;
  skills: Array<ResumeViewType['skills']>;
  summary: Partial<ResumeViewType['summary']>;
  finished: Partial<{}>;
};

export type HandleChangeType = {
  handleChange: (
    e: { target: { name: string; value: string } },
    date?: string,
    customName?: string
  ) => void;
};

export interface FormType<T extends keyof ResumeViewType> extends HandleChangeType {
  values: ResumeViewType[T];
  errors?: Partial<ResumeViewType[T]>;
  handleSubmit: (e: { preventDefault: () => void }) => string | undefined;
}

export type ErrorsType = {
  contact: Partial<ResumeViewType['contact']>;
  experience: Partial<ResumeViewType['experience']>;
  projects: Partial<ResumeViewType['projects']>;
  education: Partial<ResumeViewType['education']>;
  testimonials: Partial<ResumeViewType['testimonials']>;
  coursework: Partial<ResumeViewType['coursework']>;
  involvement: Partial<ResumeViewType['involvement']>;
  skills: Partial<ResumeViewType['skills']>;
  summary: Partial<ResumeViewType['summary']>;
  finished: Partial<{}>;
};
