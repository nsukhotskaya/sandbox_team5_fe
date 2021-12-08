import * as Yup from 'yup';
import { getFieldLabel } from '../utils';

export const tableCandidateInfoFields = [
  'internshipName',
  'stackType',
  'location',
  'registrationDate',
  'languageType',
  'bestContactTime',
  'englishLevelType',
  'professionalCertificates',
  'currentJob',
  'otherInfo',
  'education',
  'isPlanningToJoin',
  'links',
];

export const candidateEditValidation = {
  firstName: Yup.string()
    .strict()
    .matches(
      `^[a-zA-Z]+$`,
      getFieldLabel('candidate.info.validation.message.firstName'),
    )
    .required(),
  lastName: Yup.string()
    .strict()
    .matches(
      `^[a-zA-Z]+$`,
      getFieldLabel('candidate.info.validation.message.lastName'),
    )
    .required(),
  phone: Yup.number()
    .required(getFieldLabel('candidate.info.validation.message.phone'))
    .integer(),
};
