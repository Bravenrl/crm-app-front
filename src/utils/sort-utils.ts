
import { TypeSort } from '../providers/provider-types';
import { TypeItem, TypeTableHeaders } from '../types';

export const sortByField = (sort: TypeSort) => {
  return (a: TypeItem, b: TypeItem) => {
    if (sort.order === 'desc') {
      return a[sort.name as keyof TypeTableHeaders] <
        b[sort.name as keyof TypeTableHeaders]
        ? 1
        : -1;
    }
    return a[sort.name as keyof TypeTableHeaders] >
      b[sort.name as keyof TypeTableHeaders]
      ? 1
      : -1;
  };
};
