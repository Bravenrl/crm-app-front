import { useContext, useMemo } from 'react';
import { SortContext } from '../providers/sort-provider';
import { TypeItem } from '../types';
import { sortByField } from '../utils/sort-utils';

export const useSort = (data: TypeItem[]) => {
  const { sort } = useContext(SortContext);

  const sortedData = useMemo(() => {
    if (!sort.name) {
      return data;
    }
    return data.slice().sort(sortByField(sort));
  }, [data, sort]);

  return sortedData;
};
