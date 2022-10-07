import './App.scss';
import FilterForm from './components/filter-form/filter-form';
import TableWrapper from './components/table-wrapper/table-wrapper';
import { FilterProvider } from './providers/filter-provider';
import { PageProvider } from './providers/page-provider';
import { SortProvider } from './providers/sort-provider';

function App() {
  return (
    <main>
      <PageProvider>
        <FilterProvider>
          <FilterForm />
          <SortProvider>
            <TableWrapper />
          </SortProvider>
        </FilterProvider>
      </PageProvider>
    </main>
  );
}

export default App;
