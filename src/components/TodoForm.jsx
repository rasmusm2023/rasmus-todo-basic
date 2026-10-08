import { useState } from "react";

//* Hur en ny uppgift skapas.Här i TodoForm har jag ett lokalt state som heter newTitle,
// som lagrar det användaren skriver i fältet. När formuläret skickas körs handleSubmit.
// Först anropar jag e.preventDefault() så att sidan inte laddas om. Sedan trimmar jag texten och
// avbryter om den är tom, så att man inte kan lägga till tomma uppgifter.*//
function TodoForm({ onAdd }) {
  const [newTitle, setNewTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;

    //* Sedan anropar jag onAdd med titeln. onAdd är en prop, och den är i själva verket
    //  funktionen handleAddTodo från App.*//
    onAdd(title);
    setNewTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex mt-8 gap-2">
      <input
        className="flex-1 min-w-0 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        placeholder="Type new todo..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button
        className="rounded-xl px-4 py-2 whitespace-nowrap bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
