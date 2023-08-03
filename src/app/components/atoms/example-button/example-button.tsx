import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { IExampleButtonProps } from './interfaces';
import { exampleButtonStyles } from './styles';



export const ExampleButton = ({text, onPress, color, textColor}: IExampleButtonProps) => (
  <View style={exampleButtonStyles.buttonContainer}>
    <TouchableOpacity
      style={[exampleButtonStyles.button, !!color && {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[exampleButtonStyles.buttonText, !!textColor && {color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
