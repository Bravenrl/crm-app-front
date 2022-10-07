import { useContext } from 'react';
import { initialSortValue, SortContext } from '../../providers/sort-provider';
import { TypeTableHeaders } from '../../types';
import styles from './sort.module.scss';

type SortProps = { name: keyof TypeTableHeaders };

function Sort({ name }: SortProps): JSX.Element {
  const { sort, setSort } = useContext(SortContext);

  return (
    <div className={styles.sort}>
      {sort.order && sort.name === name && (
        <button
          className={styles.buttonReset}
          onClick={() => {
            setSort(initialSortValue.sort);
          }}
        ></button>
      )}
      <button
        onClick={() => {
          setSort({ order: 'asc', name });
        }}
        className={`${styles.button} ${styles.buttonUp} ${
          sort.order === 'asc' && sort.name === name ? styles.buttonActive : ''
        }`}
      ></button>
      <button
        onClick={() => {
          setSort({ order: 'desc', name });
        }}
        className={`${styles.button} ${
          sort.order === 'desc' && sort.name === name ? styles.buttonActive : ''
        } ${styles.buttonDown}`}
      ></button>
    </div>
  );
}

export default Sort;
