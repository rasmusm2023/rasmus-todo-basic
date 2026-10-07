import { useState } from "react";

function TodoForm({ onAdd }) {
  const [newTitle, setNewTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;

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
