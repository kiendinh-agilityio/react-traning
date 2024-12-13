import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type AuthFormInputs = {
  email: string;
  password: string;
};

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const onSubmit = (data: AuthFormInputs) => {
    console.log('Form Data:', data);
    navigate('/product');
  };

  return (
    <div
      style={{
        padding: '32px',
        maxWidth: '400px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '16px',
          textAlign: 'center',
        }}
      >
        Login
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
            }}
          >
            Email
          </label>
          <input
            type='email'
            {...register('email', { required: 'Email is required' })}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              borderRadius: '4px',
              width: '100%',
              outline: 'none',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
            }}
          >
            Password
          </label>
          <input
            type='password'
            {...register('password', { required: 'Password is required' })}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              borderRadius: '4px',
              width: '100%',
              outline: 'none',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type='submit'
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
