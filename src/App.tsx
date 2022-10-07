import './App.scss';
import FilterForm from './components/filter-form/filter-form';
import TableWrapper from './components/table-wrapper/table-wrapper';
import { PageProvider } from './providers/page-provider';

function App() {
  return (
    <main>
      <FilterForm />
      <PageProvider>
        <TableWrapper />
      </PageProvider>
    </main>
  );
}

export default App;
