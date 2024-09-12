import { useRef } from "react";

export const MultipleInput = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (nameRef.current && emailRef.current) {
      alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
    }
  };

  return (
    <div className="multiple">
      <h3>Information User</h3>
      <div className="multiple-input">
        <input
          className="input"
          ref={nameRef}
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="input"
          ref={emailRef}
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <button className="btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
