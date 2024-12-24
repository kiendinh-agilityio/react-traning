import BuggyMenuItem from './BuggyMenuItem';

const Sidebar = () => {
  const menuItems = ['Home', 'About', 'Contact'];

  return (
    <div style={{ width: '250px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Sidebar</h2>
      <ul>
        {menuItems.map((item, index) => (
          <BuggyMenuItem key={index} name={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
