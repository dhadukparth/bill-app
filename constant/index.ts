import { Option } from '@/types';

export const filterStatementButtonList: Option[] = [
  {
    label: 'Last 7 days',
    value: 7,
  },
  {
    label: '30 days',
    value: 30,
  },
  {
    label: '90 days',
    value: 90,
  },
  {
    label: '6 months',
    value: 180,
  },
  {
    label: '1 year',
    value: 365,
  },
];

export const localstorage_keys = {
  welcome: '_qkwlc',
  theme: '_qkttc',
  remember: '_qklrm',
};

export const adminUser = {
  id: '510',
  firstName: 'Parth',
  lastName: 'Admin',
  email: 'parth@gmail.com',
  password: 'Parth@123',
};
