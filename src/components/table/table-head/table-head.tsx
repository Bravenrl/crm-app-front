import { TableHeaders } from '../../../const';
import { TypeTableHeaders } from '../../../types';
import Sort from '../../sort/sort';
import styles from './table-head.module.scss';

type TableHeadProps = {};

function TableHead({}: TableHeadProps): JSX.Element {
  return (
    <thead>
      <tr>
        {Object.keys(TableHeaders).map((item: string) => {
          const name = TableHeaders[item as keyof TypeTableHeaders];
          return (
            <th scope='col' key={item}>
              <div className={styles.content}>
                <span>{name}</span>
                {name !== TableHeaders.date && <Sort name = {item as keyof TypeTableHeaders}/>}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
