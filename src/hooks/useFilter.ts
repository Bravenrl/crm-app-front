import { useContext, useMemo } from 'react';
import { FilterContext } from '../providers/filter-provider';
import { TypeItem } from '../types';
import { filterByField } from '../utils/filter-utils';

export const useFilter = (data: TypeItem[]) => {
  const { filter } = useContext(FilterContext);

  const filteredData = useMemo(() => {
    if (!filter.main) {
      return data;
    }
    return data.filter(filterByField(filter));
  }, [data, filter]);

  return filteredData;;
};
