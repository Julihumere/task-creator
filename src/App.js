import "./App.css";
import TaskForm from "./Componentes/TaskForm";
import TaskList from "./Componentes/TaskList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-purple-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/form" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
