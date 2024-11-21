import { useState } from 'react';

// import common components
import { Input, Button, Heading } from '@/components/common';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (fieldName: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleLogin = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <div className="flex flex-col text-center">
      <Heading level={3}>Log In</Heading>
      <form className="flex flex-col gap-8 my-10">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange('email')}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange('password')}
        />
      </form>
      <Button onClick={handleLogin}>LOG IN</Button>
    </div>
  );
};

export default LoginForm;
