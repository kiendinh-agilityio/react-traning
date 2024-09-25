interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => (
  <h1 className="flex justify-center font-helveticaBold text-dark text-[18px] leading-[25px] font-bold">
    {text}
  </h1>
);

export default Heading;
