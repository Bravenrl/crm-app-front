import { useData } from '../../hooks/useData';
import { mockData } from '../../mock';
import Pagination from '../pagination/pagination';
import Table from '../table/table';

type TableWrapperProps = {};

function TableWrapper({}: TableWrapperProps): JSX.Element {
  const items = useData();
  return (
        <div>
      <Table items={items} />
      <Pagination itemsLength={mockData.length} />
    </div>
  );
}

export default TableWrapper;
