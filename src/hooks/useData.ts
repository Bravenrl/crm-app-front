import { TypeItem } from '../types';
import { useFilter } from './useFilter';
import { useSort } from './useSort';

export const useData = (data: TypeItem[]) => {
  const filteredData = useFilter(data);
  const sortedData = useSort(filteredData);
  return sortedData;
};
