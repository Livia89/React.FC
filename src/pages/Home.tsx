import { Text, Input, Button, Row, Column, List } from 'components';
import { useState } from 'react';

export const Home = () => {
  const [taskname, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);

  const handleOKButton = () => {
    if (!taskname) return;
    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskname });
      return copy;
    });
    setTaskName(' ');
  };
  return (
    <div>
      <Column width="600px" margin="0 auto">
        <Text my="10px" fontSize="bodyLarge" paddingLeft={10} fontWeight="bold">
          Tasks
        </Text>
        <Row width="100%">
          <Input
            placeholder="Enter a task name here..."
            value={taskname}
            flex="1"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Button onClick={handleOKButton}>OK</Button>
        </Row>
        <List items={tasks} />
      </Column>
    </div>
  );
};
