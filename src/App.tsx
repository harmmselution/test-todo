import { TodoPageLayout } from './layouts/TodoPageLayout/TodoPageLayout.tsx';
import { Header } from './components/Header/Header.tsx';

function App() {
  return (
    <TodoPageLayout>
      <Header />
    </TodoPageLayout>
  );
}

export default App;
