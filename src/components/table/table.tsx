import { TypeItem } from '../../types';
import TableBody from './table-body/table.body';
import TableHead from './table-head/table-head';
import styles from './table.module.scss';

type TableProps = {items: TypeItem[]};

function Table({items}: TableProps): JSX.Element {
  
  return (
    <table className={styles.table}>
      <caption>Таблица</caption>
      <TableHead />
      <TableBody items={items}/>
    </table>
  );
}

export default Table;
