import React, { FormEvent } from "react";

export const Signup: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Send</button>
    </form>
  );
};
