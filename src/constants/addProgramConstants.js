import * as Yup from 'yup';
import { getFieldLabel } from '../utils';

export const formValidation = {
  name: Yup.string().required(
    getFieldLabel('addprogram.validation.message.title'),
  ),
  requirements: Yup.string().required(
    getFieldLabel('addprogram.validation.message.requirements'),
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

export const dataForRenderDatePicker = {
  startData: {
    keyName: 'startDate',
    label: getFieldLabel('addprogram.field.label.startDate'),
  },
  endData: {
    keyName: 'endDate',
    label: getFieldLabel('addprogram.field.label.endDate'),
  },
  registrationStartData: {
    keyName: 'registrationStartDate',
    label: getFieldLabel('addprogram.field.label.registrationStart'),
  },
  registrationFinishData: {
    keyName: 'registrationFinishDate',
    label: getFieldLabel('addprogram.field.label.registrationFinish'),
  },
};

export const dataForRenderTextField = {
  titleData: {
    keyName: 'name',
    label: getFieldLabel('addprogram.field.label.title'),
  },
  requirementsData: {
    keyName: 'requirements',
    label: getFieldLabel('addprogram.field.label.requirements'),
  },
  maxCandidateCountData: {
    keyName: 'maxCandidateCount',
    label: getFieldLabel('addprogram.field.label.candidateCount'),
  },
  spreadSheetId: {
    keyName: 'spreadSheetId',
    label: getFieldLabel('addprogram.field.label.spreadSheetId'),
  },
  imageLink: {
    keyName: 'imageLink',
    label: getFieldLabel('addprogram.field.label.imageLink'),
  },
};

export const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250,
    },
  },
};

export const stringToObject = (array) =>
  array.map((item, index) => ({
    id: index,
    name: item,
  }));

export const formatAllUsers = (array) =>
  array.map((item) => ({
    id: item.id,
    name: item.userName,
  }));

export const checkDataReceived = (...arrays) =>
  arrays.every((array) => array.length !== 0);

export const linkСorrection = (
  oldValue,
  includedPart,
  firstPartOfLink = '',
) => {
  let newLink;
  const oldLink = oldValue;
  if (oldLink.includes(includedPart)) {
    const fieldId = oldLink
      .slice(oldLink.lastIndexOf('/d/') + 3)
      .slice(0, oldLink.slice(oldLink.lastIndexOf('/d/') + 3).indexOf('/'));
    newLink = `${firstPartOfLink}${fieldId}`;
  }
  return newLink || oldLink;
};
