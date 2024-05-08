import { TodoPageLayout } from "./layouts/TodoPageLayout/TodoPageLayout.tsx";
import { Header } from "./components/Header/Header.tsx";
import { TodosContent } from "./components/TodosContent/TodosContent.tsx";

function App() {
  return (
    <TodoPageLayout>
      <Header />
      <TodosContent />
    </TodoPageLayout>
  );
}

export default App;
