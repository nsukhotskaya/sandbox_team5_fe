import dayjs from 'dayjs';

export const initialValues = {
  name: '',
  startDate: dayjs(new Date()).format('YYYY/MM/DD'),
  endDate: dayjs(new Date()).format('YYYY/MM/DD'),
  requirements: '',
  maxCandidateCount: 0,
  registrationStartDate: dayjs(new Date()).format('YYYY/MM/DD'),
  registrationFinishDate: dayjs(new Date()).format('YYYY/MM/DD'),
  languageTypes: [],
  internshipStatusType: 'Open',
  imageLink: '',
  internshipStacks: [],
  locations: [],
  spreadSheetId: '',
  users: [],
};
