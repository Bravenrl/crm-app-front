import { TableHeaders } from '../const';

export const getType = (title: string) => {
  if (title === TableHeaders.date) {
    return 'date';
  }
  if (title === TableHeaders.name) {
    return 'text';
  }
  return 'number';
};
