import { useContext } from 'react';
import { FilterExtraParams, FilterMainParams } from '../../const';
import {
  FilterContext,
  initialFilterValue,
} from '../../providers/filter-provider';
import { initialPageValue, PageContext } from '../../providers/page-provider';
import {
  TypeFilterExtraParams,
  TypeFilterFormFields,
  TypeFilterMainParams,
} from '../../types';
import styles from './filter-form.module.scss';

function FilterForm(): JSX.Element {
  const { setFilter } = useContext(FilterContext);
  const { setPage } = useContext(PageContext);

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & TypeFilterFormFields
  > = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { main, extra, value } = form;
    setFilter({
      main: main.value as keyof TypeFilterMainParams,
      extra: extra.value as keyof TypeFilterExtraParams,
      value: value.value,
    });
    setPage(initialPageValue.page);
  };

  return (
    <div className={styles.filter}>
      <form
        onSubmit={handleSubmit}
        onReset={() => {
          setFilter(initialFilterValue.filter);
          setPage(initialPageValue.page);
        }}
      >
        <h1>Фильтр</h1>

        <select name='main' id='main' required defaultValue={''}>
          {Object.keys(FilterMainParams).map((item) => {
            const param = FilterMainParams[item as keyof TypeFilterMainParams];
            const isDefault = param === FilterMainParams.default;
            return (
              <option
                key={item}
                value={isDefault ? '' : item}
                hidden={isDefault}
              >
                {param}
              </option>
            );
          })}
        </select>

        <select required name='extra' id='extra' defaultValue={''}>
          {Object.keys(FilterExtraParams).map((item) => {
            const param =
              FilterExtraParams[item as keyof TypeFilterExtraParams];
            const isDefault = param === FilterExtraParams.default;
            return (
              <option
                key={item}
                value={isDefault ? '' : item}
                hidden={isDefault}
              >
                {param}
              </option>
            );
          })}
        </select>

        <input
          name='value'
          id='value'
          type='text'
          placeholder='type filter value'
          required
        />
        <button type='submit'>Filter</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  );
}

export default FilterForm;
