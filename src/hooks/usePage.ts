import { useContext } from 'react';
import { ITEMS_PER_PAGE } from '../const';
import { PageContext } from '../providers/page-provider';
import { TypeItem } from '../types';

export const usePage = (data: TypeItem[]) => {
  const { page } = useContext(PageContext);

  const lastIndex = page * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;

  return data.slice(firstIndex, lastIndex);
};
