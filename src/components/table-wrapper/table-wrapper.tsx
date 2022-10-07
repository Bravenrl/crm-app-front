import { useData } from '../../hooks/useData';
import { usePage } from '../../hooks/usePage';
import { mockData } from '../../mock';
import Pagination from '../pagination/pagination';
import Table from '../table/table';

function TableWrapper(): JSX.Element {
  const items = useData(mockData);
  const pageItems = usePage(items);
  console.log(items)
  return (
        <div>
      <Table items={pageItems} />
      <Pagination itemsLength={items.length} />
    </div>
  );
}

export default TableWrapper;
