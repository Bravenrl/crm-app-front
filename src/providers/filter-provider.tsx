import {
    createContext,
    useMemo,
    useState,
  } from 'react';
import { TypeFilterContext, TypeProvider } from './provider-types';
  
  
  export const initialFilterValue: TypeFilterContext = {
    filter: {
        main: '',
        extra: '',
        value: '',
    },
    setFilter: () => {},
  };
  
  export const FilterContext = createContext<TypeFilterContext>(initialFilterValue);
  
  export const FilterProvider = ({ children }: TypeProvider) => {
    const [filter, setFilter] = useState(initialFilterValue.filter);
  
    const value = useMemo(() => ({filter, setFilter }), [filter]);
  
    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
  };
  