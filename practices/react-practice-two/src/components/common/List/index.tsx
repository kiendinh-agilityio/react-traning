// import components
import { Paragraph } from '@/components/common';

interface ListItem {
  id: string;
  value: string;
}

interface ListProps {
  items: ListItem[];
  icon?: React.ReactNode;
}

const List = ({ items, icon }: ListProps) => {
  const renderList = items.map((item) => (
    <li key={item.id} className="flex items-center gap-[18px] text-primary">
      {icon && icon}
      <Paragraph text={item.value} />
    </li>
  ));

  return <ul className="flex flex-col gap-[33px]">{renderList}</ul>;
};

export default List;
