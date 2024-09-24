import { useState, ChangeEvent } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo-list">
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enter job"
          value={newTodo}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
