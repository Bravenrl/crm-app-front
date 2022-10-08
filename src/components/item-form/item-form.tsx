import { useContext } from 'react';
import { api } from '../../api/api';
import { TableHeaders } from '../../const';
import { DataContext } from '../../providers/data-provider';
import { TypeItem, TypeItemFormFields, TypeTableHeaders } from '../../types';
import { getType } from '../../utils/item-utils';
import styles from './item-form.module.scss';

function ItemForm(): JSX.Element {
  const { data, setData } = useContext(DataContext);

  const postData = async (formData: TypeTableHeaders) => {
    const { data: item } = await api.post<TypeItem>('/item', formData);
    console.log(item);
    const newData = [...data, item];

    setData(newData);
  };

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & TypeItemFormFields
  > = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form);
    console.log(form.date);
    const { date, name, count, distance } = form;
    postData({
      date: date.value,
      name: name.value,
      count: count.value,
      distance: distance.value,
    });
  };

  return (
    <div className={styles.filter}>
      <form onSubmit={handleSubmit}>
        <h1>Добавить</h1>

        {Object.keys(TableHeaders).map((item: string) => {
          const title = TableHeaders[item as keyof TypeTableHeaders];

          const type = getType(title);

          return (
            <label htmlFor='date' key={item}>
              {title}
              <input name={item} id={item} type={type} required />
            </label>
          );
        })}

        <button type='submit'>Add item</button>
      </form>
    </div>
  );
}

export default ItemForm;
