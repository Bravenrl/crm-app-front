import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { TypeTableHeaders } from '../types';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export type TypeSort = {
  order: 'asc' | 'desc' | '';
  name: keyof TypeTableHeaders | '';
};

type TypeSortContext = {
  sort: TypeSort;
  setSort: TypeSetState<TypeSort>;
};

type TypeSortProvider = {
  children: JSX.Element | JSX.Element[];
};

export const initialSortValue: TypeSortContext = {
  sort: {
    order: '',
    name: '',
  },
  setSort: () => {},
};

export const SortContext = createContext<TypeSortContext>(initialSortValue);

export const SortProvider = ({ children }: TypeSortProvider) => {
  const [sort, setSort] = useState(initialSortValue.sort);

  const value = useMemo(() => ({ sort, setSort }), [sort]);

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
