import { useMemo, useState, ChangeEvent } from "react";

// Define the type for the props of the Item component
interface ItemProps {
  items: string[];
  filterText: string;
}

// Component to render a filtered list of items
const Item = ({ items, filterText }: ItemProps) => {
  // Function to filter the list based on the filter text
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.includes(filterText));
  }, [items, filterText]); // Recalculate only when items or filterText change

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Component for filtering and displaying a list of items
export const FilterList = () => {
  const [filterText, setFilterText] = useState<string>("");
  const items: string[] = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="border">
      <h3>Fruit List</h3>
      <input
        className="input"
        type="text"
        value={filterText}
        onChange={handleChange}
        placeholder="Filter items"
      />
      <Item items={items} filterText={filterText} />
    </div>
  );
};
