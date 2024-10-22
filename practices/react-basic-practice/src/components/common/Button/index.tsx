interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'transparent';
  isDisabled?: boolean;
  onClick?: () => void;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  isDisabled,
  onClick,
  label,
  icon,
  className,
}: ButtonProps) => {
  // Conditional class name based on variant and disabled state
  const baseClass = ` 
    w-40 px-[22px] py-2.5 
    font-helveticaBold font-bold rounded-xl ${isDisabled ? 'primary opacity-50 cursor-not-allowed' : variant}
  `;

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick} disabled={isDisabled}>
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
