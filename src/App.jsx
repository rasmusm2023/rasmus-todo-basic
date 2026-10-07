import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Clean the house", done: false },
    { id: 2, title: "Do the laundry", done: false },
    { id: 3, title: "Buy groceries", done: false },
  ]);

  function handleAddTodo(title) {
    setTodos((prev) => [...prev, { id: Date.now(), title, done: false }]);
  }

  function handleToggleDone(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <main className="max-w-4xl mx-auto mt-10 p-16 w-2xl bg-gray-50 rounded-xl shadow-lg border-gray-200 border">
      <TodoHeader count={todos.length} />
      <TodoList
        todos={todos}
        onToggle={handleToggleDone}
        onDelete={handleDeleteTodo}
      />
      <TodoForm onAdd={handleAddTodo} />
    </main>
  );
}

export default App;
