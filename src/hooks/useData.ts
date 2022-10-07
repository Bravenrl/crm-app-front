import { useContext } from 'react';
import { ITEMS_PER_PAGE } from '../const';
import { mockData } from '../mock';
import { PageContext } from '../providers/page-provider';
import { useSort } from './useSort';

export const useData = () => {
  const { page } = useContext(PageContext);

  const lastIndex = page * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;

  const sortedData = useSort(mockData);

  const data = sortedData.slice(firstIndex, lastIndex);
  return data;
};
