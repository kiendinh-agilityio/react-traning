interface ItemProps {
  name: string;
  isPacked: boolean;
}

const Item = ({ name, isPacked }: ItemProps) => {
  return (
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );
};

export const PackingList = () => {
  return (
    <section className="packing-list">
      <h3>Sally Ride's Packing List</h3>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
};
