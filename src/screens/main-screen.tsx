import * as React from 'react';
import {Center, VStack} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import TaskItem from '../components/task-item';
export default function MainScreen() {
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <TaskItem subject="Task Item" />

        <ThemeToggle />
      </VStack>
    </Center>
  );
}
