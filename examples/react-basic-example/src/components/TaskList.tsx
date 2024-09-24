import { useState } from "react";

// Define the shape of a Todo item
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// Define the props for TaskList component
interface TaskListProps {
  todos: Todo[];
  onChangeTodo: (updatedTodo: Todo) => void;
  onDeleteTodo: (id: number) => void;
}

export const TaskList = ({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: TaskListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

// Define the props for Task component
interface TaskProps {
  todo: Todo;
  onChange: (updatedTodo: Todo) => void;
  onDelete: (id: number) => void;
}

const Task = ({ todo, onChange, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          className="input"
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button className="btn btn-primary" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button className="btn btn-secondary" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
};

// Define the props for AddTodo component
interface AddTodoProps {
  onAddTodo: (title: string) => void;
}

export const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        className="input"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
};

// Main TaskApp component
let nextId = 3;
const initialTodos: Todo[] = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export const TaskApp = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (nextTodo: Todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  };

  const handleDeleteTodo = (todoId: number) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};
