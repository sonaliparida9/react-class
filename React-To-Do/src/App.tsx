import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToDoHome } from "./componetns/to-do-home";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="text-center">
          <h1>To-Do</h1>
        </header>
        <Routes>
          <Route path="/" element={<ToDoHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
