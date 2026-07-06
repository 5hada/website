import "./App.css";
import { MainPage } from "./components/page/MainPage";
import { TestPage } from "./test/TestPage.test.tsx";

function App() {
  if (import.meta.env.VITE_TEST_MODE) {
    return <TestPage />;
  }
  return (
    <div className="h-screen">
      <MainPage />
    </div>
  );
}

export default App;
