import { useData } from '../../hooks/useData';
import { usePage } from '../../hooks/usePage';
import Pagination from '../pagination/pagination';
import Table from '../table/table';
import styles from './table-wrapper.module.scss';

function TableWrapper(): JSX.Element {
  const { items, isLoading } = useData();
  const pageItems = usePage(items);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div>
          <Table items={pageItems} />
          <Pagination itemsLength={items.length} />
        </div>
      )}
    </>
  );
}

export default TableWrapper;
