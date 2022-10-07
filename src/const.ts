import { TypeFilterParams, TypeTableHeaders } from "./types";

export const ITEMS_PER_PAGE = 10;

export const TableHeaders: TypeTableHeaders = {
  date: 'Дата',
  name: 'Название',
  count: 'Количество',
  distance: 'Расстояние',
};

export const FilterParams: TypeFilterParams = {
  equal: 'Равно',
  less: 'Меньше',
  more: 'Больше',
  includes: 'Включает',
};
