import { useState } from "react";

function TodoList() {
  const [todos] = useState([
    "Buy groceries",
    "Clean the house",
    "Walk the dog",
  ]);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedTodoIndex(index);
  };

  return (
    <div>
      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              className={`list-group-item ${
                selectedTodoIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {todo}
            </li>
          ))}
        </ul>
      ) : (
        <p>No to-dos</p>
      )}
    </div>
  );
}

export default TodoList;
