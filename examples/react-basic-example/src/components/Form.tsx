import React, { useState, useReducer, ChangeEvent } from "react";

interface UserInfo {
  name: string;
  email: string;
}

export const UserForm = () => {
  const [user, setUser] = useState<UserInfo>({ name: "", email: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="flex-column">
      <h2>User Form</h2>
      <div className="form-group flex-column">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Name: {user.name}</label>
      </div>
      <div className="form-group flex-column">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleInputChange}
        />
        <label>Email: {user.email}</label>
      </div>
    </div>
  );
};

// Define types for the state and actions
interface State {
  name: string;
  age: number;
}

interface Action {
  type: "incremented_age" | "changed_name";
  nextName?: string;
}

// Reducer function with types
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName || state.name,
        age: state.age,
      };
    }
    default:
      throw new Error("Unknown action: " + action.type);
  }
};

// Initial state with types
const initialState: State = { name: "Kien Dinh", age: 27 };

export const EditorForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = () => {
    dispatch({ type: "incremented_age" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  };

  return (
    <>
      <input
        className="input"
        value={state.name}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Increment age
      </button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
};
