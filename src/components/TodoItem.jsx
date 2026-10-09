function TodoItem({ todo, onToggle, onDelete }) {
  return (
    //* 6.Tillbaka i TodoItem ser vi hur todo.done styr utseendet.
    // Är den true blir bakgrunden grön och texten får line-through.
    // Gränssnittet styrs alltså helt av datan.*//
    <li
      className={`flex justify-between items-center px-8 py-4 rounded-xl font-semibold mb-2 cursor-pointer transition-colors duration-200 ${
        todo.done
          ? "text-gray-400 bg-green-300"
          : "bg-sky-100 text-gray-700 hover:text-sky-600"
      }`}
      //* 4. Nästa funktion är att markera en uppgift som klar.
      // I TodoItem har hela <li>-elementet en onClick som anropar onToggle med uppgiftens id.*//
      onClick={() => onToggle(todo.id)}
    >
      <span className={todo.done ? "line-through" : ""}>{todo.title}</span>
      <button
        type="button"
        //* 7. Sista funktionen är att ta bort en uppgift. Knappen i TodoItem ligger inuti <li>,
        // som redan har en onClick för att växla done. Därför anropar jag e.stopPropagation() här.
        // Utan den raden skulle ett klick på krysset också trigga växlingen på <li>.
        // Sedan anropar knappen onDelete med uppgiftens id.*//
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
