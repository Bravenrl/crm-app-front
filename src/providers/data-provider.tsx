import { createContext, useMemo, useState } from 'react';
import { TypeDataContext, TypeProvider } from './provider-types';

export const initialDataValue: TypeDataContext = {
  data: [],
  setData: () => {},
};

export const DataContext = createContext<TypeDataContext>(initialDataValue);

export const DataProvider = ({ children }: TypeProvider) => {
  const [data, setData] = useState(initialDataValue.data);

  const value = useMemo(() => ({ data, setData }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
