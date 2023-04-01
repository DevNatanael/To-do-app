import * as React from 'react';
import {Text, Box, Center, VStack, useColorModeValue} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import Check from '../components/animated-checkbox';
export default function MainScreen() {
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Check />
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Ola</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
