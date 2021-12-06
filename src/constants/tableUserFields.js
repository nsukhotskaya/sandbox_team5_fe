import { getFieldLabel } from '../utils';

export const columnDefsUsers = [
  {
    headerNames: getFieldLabel('internship.page.table.fullname'),
    field: 'userName',
  },
  { headerNames: getFieldLabel('internship.page.table.role'), field: 'role' },
  {
    headerNames: getFieldLabel('internship.page.table.position'),
    field: 'position',
  },
];
