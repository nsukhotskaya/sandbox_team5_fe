import { getFieldLabel } from '../utils';

export const columnDefsInternships = [
  {
    headerName: getFieldLabel('profile.tab.internships.fields.name'),
    field: 'name',
  },
  {
    headerName: getFieldLabel('profile.tab.internships.fields.status'),
    field: 'status',
  },
];

export const columnDefsFeed = [
  {
    headerName: getFieldLabel('profile.tab.feedbacks.fields.fullname'),
    field: 'fullName',
  },
  {
    headerName: getFieldLabel('profile.tab.feedbacks.fields.rating'),
    field: 'rating',
  },
  {
    headerName: getFieldLabel('profile.tab.feedbacks.fields.text'),
    field: 'text',
  },
];
