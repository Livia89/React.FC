import { Column } from 'components';
import { ListItem, ListItemProps } from './ListItem';

type ListProps = {
  items: ListItemProps[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column py="10PX">
      {items.map((item, idx) => (
        <ListItem key={idx} {...item} />
      ))}
    </Column>
  );
};
