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

  //* 3. Här i App.jsx ligger handleAddTodo. Jag använder setTodos med en funktion,
  // där currentTodos är den senaste versionen av listan. Med spread-operatorn
  // kopierar jag alla befintliga uppgifter till en ny array och lägger till den nya uppgiften sist,
  //  med ett id från Date.now(), titeln och done satt till false. Jag använder inte .push(),
  // eftersom det skulle mutera den gamla arrayen. Då skulle React inte se att något ändrats.
  // Nu får React en ny array, ser att state har ändrats och renderar om gränssnittet.*//1
  function handleAddTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), title, done: false },
    ]);
  }

  //* 5. onToggle är handleToggleDone i App.jsx. Här använder jag currentTodos.map för att gå igenom
  //  alla uppgifter. Om uppgiftens id matchar det id jag fick in, skapar jag en kopia av uppgiften
  //  där done är omvänt, med { ...todo, done: !todo.done }. Alla andra uppgifter lämnas som de är.
  //  Resultatet blir återigen en ny array, så jag muterar inget.*//
  function handleToggleDone(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  //* 8. onDelete är handleDeleteTodo i App.jsx. Den använder currentTodos.filter och behåller alla uppgifter
  //  utom den vars id matchar. Det ger en ny array utan den borttagna uppgiften, och React renderar om.*//
  function handleDeleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  //* 9. Sammanfattningsvis ligger allt state i App, och det skickas ner till barnkomponenterna som props.
  //  Komponenterna anropar funktioner som skickas ner, och App uppdaterar state.
  // Varje gång skapar jag en ny array med spread, map eller filter istället för att mutera den gamla.
  // På så sätt upptäcker React ändringen och uppdaterar gränssnittet.*//
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
