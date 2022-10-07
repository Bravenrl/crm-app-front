import { useContext } from 'react';
import { ITEMS_PER_PAGE } from '../const';
import { mockData } from '../mock';
import { PageContext } from '../providers/page-provider';

export const useData = () => {
  const { page } = useContext(PageContext);
  
  const lastIndex = page * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;

  const data = mockData.slice(firstIndex, lastIndex);
  return data;
};
