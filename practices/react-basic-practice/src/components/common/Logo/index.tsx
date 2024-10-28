import { PurityIcon } from '@/components/common/Icons';

const Logo = () => (
  <div className="flex justify-center items-center gap-12 gradient-border mb-7">
    <a href="/" className="flex justify-center items-center gap-2 pb-7">
      <PurityIcon />
      <span className="font-helveticaBold text-sm font-bold">PURITY UI DASHBOARD</span>
    </a>
  </div>
);

export default Logo;
