import * as Yup from 'yup';
import { getFieldLabel } from '../utils';

export const formValidation = {
  name: Yup.string().required(
    getFieldLabel('addprogram.validation.message.title')
  ),
  requirements: Yup.string().required(
    getFieldLabel('addprogram.validation.message.requirements')
  ),
  maxCandidateCount: Yup.number()
    .required(getFieldLabel('addprogram.validation.message.maxCandidateCount'))
    .positive(getFieldLabel('addprogram.validation.message.positive'))
    .integer(),
  imageLink: Yup.string()
    .url(getFieldLabel('addprogram.validation.message.url'))
    .required(getFieldLabel('addprogram.validation.message.imageLink')),
  spreadSheetId: Yup.string().required(
    getFieldLabel('addprogram.validation.message.spreadSheetId'),
  ),
  internshipStacks: Yup.array()
    .min(1)
    .required(getFieldLabel('addprogram.validation.message.internshipStacks')),
  locations: Yup.array()
    .min(1)
    .required(getFieldLabel('addprogram.validation.message.locations')),
  languageTypes: Yup.array()
    .min(1)
    .required(getFieldLabel('addprogram.validation.message.languageTypes')),
};
