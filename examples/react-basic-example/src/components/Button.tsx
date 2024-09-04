interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  const handleClick = () => {
    alert('You clicked me!');
  };

  return (
    <button className='btn' onClick={handleClick}>
      {label}
    </button>
  );
};
