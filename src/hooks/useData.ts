import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { TypeItem } from '../types';
import { useFilter } from './useFilter';
import { useSort } from './useSort';

export const useData = () => {
  const [data, setData] = useState<TypeItem[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data } = await api.get<TypeItem[]>('/item');
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = useFilter(data);
  const sortedData = useSort(filteredData);
  return { items: sortedData, isLoading };
};
