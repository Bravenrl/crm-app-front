import { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

type TypePageContext = {
  page: number;
  setPage: TypeSetState<number>;
};

type TypePageProvider = {
  children: JSX.Element | JSX.Element[];
};

export const initialPageValue = { page: 1, setPage: () => {} };

export const PageContext = createContext<TypePageContext>(initialPageValue);

export const PageProvider = ({ children }: TypePageProvider) => {
  const [page, setPage] = useState(initialPageValue.page);

  const value = useMemo(() => ({page, setPage}), [page])

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};
