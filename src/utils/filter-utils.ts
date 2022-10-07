import { FilterExtraParams, FilterMainParams } from '../const';
import { TypeFilter } from '../providers/provider-types';
import {
  TypeFilterExtraParams,
  TypeFilterMainParams,
  TypeItem,
} from '../types';

export const filterByField = (filter: TypeFilter) => {
  return (item: TypeItem) => {
    const mainParam = filter.main as keyof Omit<
      TypeFilterMainParams,
      'default'
    >;
    const extraParam = filter.extra as keyof Omit<
      TypeFilterExtraParams,
      'default'
    >;

    if (FilterMainParams[mainParam] === FilterMainParams.date) {
      console.log('first');
      return filterByDate(item[mainParam] as string, extraParam, filter.value);
    }

    if (FilterMainParams[mainParam] === FilterMainParams.name) {
      return filterByString(
        item[mainParam] as string,
        extraParam,
        filter.value
      );
    }
    return filterByNumber(item[mainParam] as number, extraParam, filter.value);
  };
};

const filterByDate = (
  item: string,
  extra: keyof Omit<TypeFilterExtraParams, 'default'>,
  value: string
) => {
  const date = Date.parse(item.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
  const targetDate = Date.parse(value.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

  switch (FilterExtraParams[extra]) {
    case FilterExtraParams.equal:
      return date === targetDate;
    case FilterExtraParams.includes:
      return item.includes(value);
    case FilterExtraParams.less:
      return date < targetDate;
    case FilterExtraParams.more:
      return date > targetDate;
    default:
      break;
  }
};

const filterByString = (
  item: string,
  extra: keyof Omit<TypeFilterExtraParams, 'default'>,
  value: string
) => {
  const string = item.toUpperCase();
  const targetString = value.toUpperCase();

  switch (FilterExtraParams[extra]) {
    case FilterExtraParams.equal:
      return string === targetString;
    case FilterExtraParams.includes:
      return string.includes(targetString);
    case FilterExtraParams.less:
      return string < targetString;
    case FilterExtraParams.more:
      return string > targetString;
    default:
      break;
  }
};

const filterByNumber = (
  item: number,
  extra: keyof Omit<TypeFilterExtraParams, 'default'>,
  value: string
) => {
  switch (FilterExtraParams[extra]) {
    case FilterExtraParams.equal:
      return item === +value;
    case FilterExtraParams.includes:
      return item.toString().includes(value);
    case FilterExtraParams.less:
      return item < +value;
    case FilterExtraParams.more:
      return item > +value;
    default:
      break;
  }
};
