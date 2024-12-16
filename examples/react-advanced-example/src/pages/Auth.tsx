import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '@/utils';

type AuthFormInputs = z.infer<typeof authSchema>;

const AuthPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: AuthFormInputs) => {
    alert(`Login successful!\nEmail: ${data.email}`);
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
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <input
                type='email'
                {...field}
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
            )}
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
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <input
                type='password'
                {...field}
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
            )}
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
