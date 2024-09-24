import { useState, useCallback } from "react";

type Item = {
  id: number;
  name: string;
};

export const SelectableList = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleToggleSelect = useCallback((id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id],
    );
  }, []);

  const items: Item[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleToggleSelect(item.id)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};
