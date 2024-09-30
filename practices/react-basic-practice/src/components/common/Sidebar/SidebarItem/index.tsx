interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
  const className = `sidebar-item ${active ? 'bg-white text-dark w-[220px] h-[54px] flex items-center rounded-[15px] cursor-pointer' : ''}`;

  const iconClassName = `flex items-center justify-center w-[30px] h-[30px] rounded-xl border ${
    active ? 'bg-primary border-primary' : 'bg-white border-white'
  }`;

  return label === 'SUPPORT' ? (
    <li className="py-2 px-4 min-w-[180px] text-sm tracking-[1px]">{label}</li>
  ) : (
    <li className={className}>
      <a className="flex items-center gap-4" href="#">
        <span className={iconClassName}>{icon}</span>
        <span>{label}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
