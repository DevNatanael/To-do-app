/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback} from 'react';
import {PanGestureHandlerProps} from 'react-native-gesture-handler';
import {
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInputChangeEventData,
} from 'react-native';
import {
  Box,
  HStack,
  useTheme,
  themeTools,
  useColorModeValue,
  Input,
} from 'native-base';
import Check from './animated-checkbox';
import AnimatedTaskLabel from './animated-task-label';
import SwipeView from './swipable-view';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean;
  onToggleCheckBox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  onChangeSubject?: (subject: string) => void;
  onFinishEditing?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const [checked, setChecked] = React.useState(false);
  const {
    isEditing,
    onToggleCheckBox,
    subject,
    onPressLabel,
    onRemove,
    onChangeSubject,
    onFinishEditing,
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

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject],
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
          <Icon name="trash-o" size={22} color="#fff" />
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
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={checked}
            onPress={onPressLabel}>
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeView>
  );
};

export default TaskItem;
