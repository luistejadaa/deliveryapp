import React from 'react';
import {Text, Touchable, TouchableOpacity} from 'react-native';
import {exampleLabelStyles} from './styles';
import {IExampleLabelProps} from './interfaces';

const ExampleLabel = ({
  text,
  color,
  fontSize,
  backgroundColor,
  onPress
}: IExampleLabelProps) => {
  return (
    <TouchableOpacity
    style={exampleLabelStyles.container}
    onPress={onPress}
    disabled={!!onPress}>
    <Text
      style={[
        exampleLabelStyles.label,
        !!color && {color: color},
        !!fontSize && {fontSize: fontSize},
        !!backgroundColor && {backgroundColor: backgroundColor},
      ]}>
      {text}
    </Text>
    </TouchableOpacity>
  );
};

export {ExampleLabel};
