export interface BuggyMenuItemProps {
  name: string;
}

const BuggyMenuItem = ({ name }: BuggyMenuItemProps) => {
  const handleClick = () => {
    if (name === 'About') {
      throw new Error("Error when clicking on 'About' menu item!");
    }
    alert(`Navigating to ${name}`);
  };

  return (
    <li>
      <button onClick={handleClick}>{name}</button>
    </li>
  );
};

export default BuggyMenuItem;
