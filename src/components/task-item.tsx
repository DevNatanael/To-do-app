/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback} from 'react';
import {PanGestureHandlerProps} from 'react-native-gesture-handler';
import {Pressable, Text} from 'react-native';
import {
  Box,
  HStack,
  Icon,
  useTheme,
  themeTools,
  useColorModeValue,
} from 'native-base';
import Check from './animated-checkbox';
import AnimatedTaskLabel from './animated-task-label';
import SwipeView from './swipable-view';
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  onToggleCheckBox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const [checked, setChecked] = React.useState(false);
  const {
    onToggleCheckBox,
    subject,
    onPressLabel,
    onRemove,
    simultaneousHandlers,
  } = props;
  const theme = useTheme();

  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400'),
  );

  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500'),
  );

  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white'),
  );

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText'),
  );

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600'),
  );

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}>
          <Text>A</Text>
        </Box>
      }>
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckBox}>
            <Check
              highlightColor={highlightColor}
              boxOutlineColor={boxStroke}
              setChecked={setChecked}
              value={checked}
            />
          </Pressable>
        </Box>
        <AnimatedTaskLabel
          textColor={activeTextColor}
          inactiveTextColor={doneTextColor}
          strikethrough={checked}>
          {subject}
        </AnimatedTaskLabel>
      </HStack>
    </SwipeView>
  );
};

export default TaskItem;
