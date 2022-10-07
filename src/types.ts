export type TypeItem = {
    id: number;
    date: string;
    name: string;
    count: number;
    distance: number;
}

export type TypeTableHeaders = {
    date: string,
    name: string,
    count: string,
    distance: string,
  };
  
  export type TypeFilterParams = {
    equal: string,
    less: string,
    more: string,
    includes: string,
  };
  