import { ErrorsType, ResumeViewType } from 'lib/types';

/**
 * Checks if a string is empty or only contains whitespace.
 *
 * @param {string} validate - The string to validate.
 * @returns {boolean} True if the string is empty or only contains whitespace; false otherwise.
 */
const checkInput = (validate: string) => !validate || validate.trim() === '';

/**
 * Tests a string against a regular expression.
 *
 * @param {RegExp} reg - The regular expression to test against.
 * @param {string} validate - The string to test.
 * @returns {boolean} True if the string does not match the regular expression; false otherwise.
 */
const testInput = (reg: RegExp, validate: string) => !reg.test(validate);

export const validate = ({
  contact,
  experience,
  projects,
  education,
  testimonials,
  coursework,
  involvement,
  skills
}: ResumeViewType) => {
  const WEBSITE =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/iu; // Don't be shocked
  const EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const PHONE = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/im;

  const errors: ErrorsType = {
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
  };

  if (checkInput(contact.name)) {
    errors.contact.name = 'Full name is required';
  }

  if (checkInput(contact.job)) {
    errors.contact.job = 'Job title is required';
  }
  if (checkInput(contact.email)) {
    errors.contact.email = 'Email address is required';
  } else if (testInput(EMAIL, contact.email)) {
    errors.contact.email = 'Invalid email address';
  }

  if (checkInput(contact.phone)) {
    errors.contact.phone = 'Phone number is required';
  } else if (testInput(PHONE, contact.phone)) {
    errors.contact.phone = 'Invalid phone number';
  }

  if (!checkInput(contact.website) && testInput(WEBSITE, contact.website)) {
    errors.contact.website = 'Invalid URL';
  }

  if (checkInput(experience.company)) {
    errors.experience.company = 'Company is required';
  }

  if (checkInput(projects.title)) {
    errors.projects.title = 'Project title is required';
  }

  if (checkInput(education.qualification)) {
    errors.education.qualification = 'Degree is required';
  }

  if (checkInput(testimonials.name)) {
    errors.testimonials.name = 'Testimonials name is required';
  }

  if (checkInput(coursework.name)) {
    errors.coursework.name = 'Coursework name is required';
  }

  if (checkInput(involvement.organization)) {
    errors.involvement.organization = 'Organization name is required';
  }

  if (checkInput(skills.skill)) {
    errors.skills.skill = 'Skill is required';
  }

  return errors;
};
