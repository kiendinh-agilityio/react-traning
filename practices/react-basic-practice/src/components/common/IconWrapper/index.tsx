interface IconWrapperProps {
  icon: React.ReactNode;
  active?: boolean;
}

const IconWrapper = ({ icon, active }: IconWrapperProps) => {
  const iconClassName = `flex items-center justify-center w-[30px] h-[30px] rounded-xl border drop-shadow-[0px_3.5px_5.5px_0px_#00000005] ${
    active ? 'bg-primary border-primary' : 'bg-white border-white'
  }`;

  return <span className={iconClassName}>{icon}</span>;
};

export default IconWrapper;
