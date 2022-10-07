import './App.scss';
import FilterForm from './components/filter-form/filter-form';
import TableWrapper from './components/table-wrapper/table-wrapper';
import { PageProvider } from './providers/page-provider';
import { SortProvider } from './providers/sort-provider';

function App() {
  return (
    <main>
      <FilterForm />
      <SortProvider>
        <PageProvider>
          <TableWrapper />
        </PageProvider>
      </SortProvider>
    </main>
  );
}

export default App;
