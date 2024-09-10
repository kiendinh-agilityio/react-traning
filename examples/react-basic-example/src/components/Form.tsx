import React, { useState } from "react";

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
