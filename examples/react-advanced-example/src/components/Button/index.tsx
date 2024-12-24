interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: '10px 20px',
      backgroundColor: disabled ? '#ccc' : '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
  >
    {label}
  </button>
);

export default Button;
