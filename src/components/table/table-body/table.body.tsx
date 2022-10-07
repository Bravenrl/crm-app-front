import { TypeItem } from '../../../types';

type TableBodyProps = { items: TypeItem[] };

function TableBody({ items }: TableBodyProps): JSX.Element {
  return (
    <tbody>
      {items.map((item) => {
        return (
          <tr key={item.id} className='table_row'>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.distance}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
