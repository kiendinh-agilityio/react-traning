import logoIcon from '@/assets/icons/logo-icon.svg';

const Logo = () => (
  <div className="flex justify-center items-center gap-12">
    <a href="#" className="flex justify-center items-center gap-2">
      <img width="22px" height="22px" src={logoIcon} alt="Logo" />
      <span className="text-sm font-bold">PURITY UI DASHBOARD</span>
    </a>
  </div>
);

export default Logo;
