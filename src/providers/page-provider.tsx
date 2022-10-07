import { createContext, useMemo, useState } from 'react';
import { TypePageContext, TypeProvider } from './provider-types';

export const initialPageValue: TypePageContext = { page: 1, setPage: () => {} };

export const PageContext = createContext<TypePageContext>(initialPageValue);

export const PageProvider = ({ children }: TypeProvider) => {
  const [page, setPage] = useState(initialPageValue.page);

  const value = useMemo(() => ({ page, setPage }), [page]);

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
