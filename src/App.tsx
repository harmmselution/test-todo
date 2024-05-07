import { TodoPageLayout } from './layouts/TodoPageLayout/TodoPageLayout.tsx';
import { Header } from './components/Header/Header.tsx';
import { TodosContainer } from './components/TodosContainer/TodosContainer.tsx';

function App() {
  return (
    <TodoPageLayout>
      <Header />
      <TodosContainer />
    </TodoPageLayout>
  );
}

export default App;
