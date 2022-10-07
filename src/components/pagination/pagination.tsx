import { usePagination } from '../../hooks/usePagination';
import styles from './pagination.module.scss';

type PaginationProps = { itemsLength: number };

function Pagination({ itemsLength }: PaginationProps): JSX.Element {
  const { page, setPage, pageNumbers } = usePagination(itemsLength);

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        <li>
          {pageNumbers.map((pageNumber) => (
            <button
              type='button'
              key={pageNumber}
              className={`${styles.button} ${
                page === pageNumber ? styles.buttonActive : ''
              }`}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
