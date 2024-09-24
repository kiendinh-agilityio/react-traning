interface PureProps {
  guest: number;
}

const Cup = ({ guest }: PureProps) => {
  return <h2>Tea cup for guest #{guest}</h2>;
};

export const TeaSet = () => {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
};
