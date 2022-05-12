import { Column } from 'components/Column';
import { Text } from 'components/Text';

export type ListItemProps = {
  label: string;
};

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return (
    <Column p="20px" borderRadius="4px" width="100%" bg="rgba(0,0,0,0.2)" mb="10px" borderLeft="5px solid #fff">
      <Text>{label}</Text>
    </Column>
  );
};
