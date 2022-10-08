import './App.scss';
import FilterForm from './components/filter-form/filter-form';
import ItemForm from './components/item-form/item-form';
import TableWrapper from './components/table-wrapper/table-wrapper';
import { DataProvider } from './providers/data-provider';
import { FilterProvider } from './providers/filter-provider';
import { PageProvider } from './providers/page-provider';
import { SortProvider } from './providers/sort-provider';

function App() {
  return (
    <main>
      <DataProvider>
        <PageProvider>
          <FilterProvider>
            <div className='form-wrapper'>
              <FilterForm />
              <ItemForm />
            </div>
            <SortProvider>
              <TableWrapper />
            </SortProvider>
          </FilterProvider>
        </PageProvider>
      </DataProvider>
    </main>
  );
}

export default App;
