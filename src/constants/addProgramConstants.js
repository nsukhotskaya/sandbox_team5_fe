import * as Yup from 'yup';
import { getFieldLabel } from '../utils';

export const initialTouched = {
  name: true,
  startDate: true,
  endDate: true,
  requirements: true,
  maxCandidateCount: true,
  registrationStartDate: true,
  registrationFinishDate: true,
  languageTypes: true,
  imageLink: true,
  internshipStacks: true,
  locations: true,
  spreadSheetId: true,
  users: true,
};

export const formValidation = {
  name: Yup.string().required(
    getFieldLabel(getFieldLabel('addprogram.validation.message.string')),
  ),
  requirements: Yup.string().required(
    getFieldLabel('addprogram.validation.message.string'),
  ),
  maxCandidateCount: Yup.number()
    .required(getFieldLabel('addprogram.validation.message.string'))
    .positive()
    .integer(),
  imageLink: Yup.string()
    .url()
    .required(getFieldLabel('addprogram.validation.message.string')),
  spreadSheetId: Yup.string().required(
    getFieldLabel('addprogram.validation.message.string'),
  ),
  internshipStacks: Yup.array()
    .min(1)
    .required(getFieldLabel('addprogram.validation.message.array')),
  locations: Yup.array()
    .min(1)
    .required(getFieldLabel('addprogram.validation.message.array')),
  languageTypes: Yup.array()
    .min(1)
    .required(getFieldLabel('addprogram.validation.message.array')),
};
