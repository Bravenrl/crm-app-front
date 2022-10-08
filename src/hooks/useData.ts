import { useContext, useEffect, useState } from 'react';
import { api } from '../api/api';
import { DataContext } from '../providers/data-provider';
import { TypeItem } from '../types';
import { useFilter } from './useFilter';
import { useSort } from './useSort';

export const useData = () => {
  const {data, setData} = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data } = await api.get<TypeItem[]>('/item');
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = useFilter(data);
  const sortedData = useSort(filteredData);
  return { items: sortedData, isLoading };
};
