function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`flex justify-between items-center px-8 py-4 rounded-xl font-semibold mb-2 cursor-pointer transition-colors duration-200 ${
        todo.done
          ? "text-gray-400 bg-green-300"
          : "bg-sky-100 text-gray-700 hover:text-sky-600"
      }`}
      onClick={() => onToggle(todo.id)}
    >
      <span className={todo.done ? "line-through" : ""}>{todo.title}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className="cursor-pointer ml-2 px-3 py-1 bg-red-100 rounded-lg hover:bg-red-300"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
