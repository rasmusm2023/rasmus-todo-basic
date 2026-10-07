function TodoHeader({ count }) {
  return (
    <header>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>
      <h2 className="text-md font-normal text-gray-600 mb-4 italic">
        {count} {count === 1 ? "todo" : "todos"} for today.
      </h2>
    </header>
  );
}

export default TodoHeader;
