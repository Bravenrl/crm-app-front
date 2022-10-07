import styles from './filter-form.module.scss';

type FilterFormProps = {};

function FilterForm({}: FilterFormProps): JSX.Element {
  return (
    <div className={styles.filter}>
      <form action=''>
        <h1>Фильтр</h1>
        <select name='title' id=''>
          <option value = '' hidden disabled selected>
            {' '}
            -- select a column --{' '}
          </option>
          <option value=''>Дата</option>
          <option value=''>Название</option>
          <option value=''>Количество</option>
          <option value=''>Расстояние</option>
        </select>

        <select name='params' id=''>
          <option value = '' hidden disabled selected>
            {' '}
            -- select a param --{' '}
          </option>
          <option value=''>Рвано</option>
          <option value=''>Содержит</option>
          <option value=''>Больше</option>
          <option value=''>Меньше</option>
        </select>
        <input type='text' name='value' placeholder='type filter value' />
        <button type='submit'>Filter</button>
      </form>
    </div>
  );
}

export default FilterForm;
