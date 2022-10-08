export type TypeItem = {
  id: number;
  date: string;
  name: string;
  count: number;
  distance: number;
};

export type TypeTableHeaders = {
  date: string;
  name: string;
  count: string;
  distance: string;
};

export type TypeFilterMainParams = TypeTableHeaders & {
  default: string;
};

export type TypeFilterExtraParams = {
  default: string;
  equal: string;
  less: string;
  more: string;
  includes: string;
};

export type TypeFilterFormFields = {
  main: HTMLSelectElement;
  extra: HTMLSelectElement;
  value: HTMLInputElement;
};

export type TypeItemFormFields = {
  date: HTMLInputElement;
  name: HTMLInputElement;
  count: HTMLInputElement;
  distance: HTMLInputElement;
};

