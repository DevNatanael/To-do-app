import * as React from 'react';
import {Center, VStack} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import TaskItem from '../components/task-item';
export default function MainScreen() {
  const [subject, setSubject] = React.useState('Tarefa...');
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <TaskItem
          isEditing={isEditing}
          subject={subject}
          onChangeSubject={setSubject}
          onFinishEditing={() => setIsEditing(false)}
          onPressLabel={() => setIsEditing(true)}
        />

        <ThemeToggle />
      </VStack>
    </Center>
  );
}
