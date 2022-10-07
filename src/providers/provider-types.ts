import { Dispatch, SetStateAction } from 'react';
import { TypeFilterExtraParams, TypeFilterMainParams, TypeTableHeaders } from '../types';

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export type TypeSort = {
  order: 'asc' | 'desc' | '';
  name: keyof TypeTableHeaders | '';
};

export type TypeFilter = {
    main: keyof TypeFilterMainParams | '';
    extra: keyof TypeFilterExtraParams | '';
    value: string;
  };
  
export type TypePageContext = {
    page: number;
    setPage: TypeSetState<number>;
  };
  
export type TypeSortContext = {
  sort: TypeSort;
  setSort: TypeSetState<TypeSort>;
};

export type TypeFilterContext = {
    filter: TypeFilter;
    setFilter: TypeSetState<TypeFilter>;
  };

export type TypeProvider = {
  children: JSX.Element | JSX.Element[];
};
