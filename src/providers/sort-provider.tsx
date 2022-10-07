import {
  createContext,
  useMemo,
  useState,
} from 'react';
import { TypeProvider, TypeSortContext } from './provider-types';

export const initialSortValue: TypeSortContext = {
  sort: {
    order: '',
    name: '',
  },
  setSort: () => {},
};

export const SortContext = createContext<TypeSortContext>(initialSortValue);

export const SortProvider = ({ children }: TypeProvider) => {
  const [sort, setSort] = useState(initialSortValue.sort);

  const value = useMemo(() => ({ sort, setSort }), [sort]);

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
