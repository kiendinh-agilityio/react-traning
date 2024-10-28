import { Paragraph } from '@/components/common';

interface StatusProps {
  value: string;
}

const Status = ({ value }: StatusProps) => (
  <div
    className={`flex justify-center items-center w-[70px] h-[25px] border rounded-lg font-helveticaBold font-bold text-white ${
      value === 'Active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
    }`}
  >
    <Paragraph value={value} />
  </div>
);

export default Status;
