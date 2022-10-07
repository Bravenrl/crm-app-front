import Sort from '../../sort/sort';
import styles from './table-head.module.scss';

type TableHeadProps = {};

function TableHead({}: TableHeadProps): JSX.Element {
  return (
    <thead>
      <tr>
        <th scope='col'>
          <div className={styles.content}>
            <span>Дата</span>
          </div>
        </th>
        <th scope='col'>
          <div className={styles.content}>
            <span>Название</span>
            <Sort />
          </div>
        </th>
        <th scope='col'>Количество</th>
        <th scope='col'>Расстояние</th>
      </tr>
    </thead>
  );
}

export default TableHead;
