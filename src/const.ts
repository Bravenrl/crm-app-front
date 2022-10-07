import {
  TypeFilterExtraParams,
  TypeTableHeaders,
  TypeFilterMainParams,
} from './types';

export const ITEMS_PER_PAGE = 10;

export const TableHeaders: TypeTableHeaders = {
  date: 'Дата',
  name: 'Название',
  count: 'Количество',
  distance: 'Расстояние',
};

export const FilterMainParams: TypeFilterMainParams = {
  ...TableHeaders,
  default: '-- select a column --',
};

export const FilterExtraParams: TypeFilterExtraParams = {
  default: '-- select a param --',
  equal: 'Равно',
  less: 'Меньше',
  more: 'Больше',
  includes: 'Включает',
};
