import { getFieldLabel } from '../utils';

export const columnDefsEmployees = [
  {
    headerNames: getFieldLabel('internship.page.table.fullname'),
    field: 'fullName',
  },
  { headerNames: getFieldLabel('internship.page.table.role'), field: 'role' },
  {
    headerNames: getFieldLabel('internship.page.table.position'),
    field: 'position',
  },
  { headerNames: getFieldLabel('internship.page.table.team'), field: 'team' },
];
