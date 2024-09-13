import React, { useReducer } from "react";

interface State {
  isOpen: boolean;
}

interface Action {
  type: "OPEN_MODAL" | "CLOSE_MODAL";
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    default:
      throw new Error("Unknown action type");
  }
};

const initialState: State = { isOpen: false };

const modalStyles: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
};

const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

const buttonStyles: React.CSSProperties = {
  marginTop: "10px",
  padding: "10px 15px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "#fff",
  cursor: "pointer",
  borderRadius: "5px",
};

export const ModalExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        style={buttonStyles}
        onClick={() => dispatch({ type: "OPEN_MODAL" })}
      >
        Open Modal
      </button>
      {state.isOpen && (
        <>
          <div
            style={overlayStyles}
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          />
          <div style={modalStyles}>
            <h2>Modal Title</h2>
            <p>Some content inside the modal.</p>
            <button
              style={buttonStyles}
              onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            >
              Close Modal
            </button>
          </div>
        </>
      )}
    </div>
  );
};
