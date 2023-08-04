import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { IExampleButtonProps } from './interfaces';
import { exampleButtonStyles } from './styles';
import { MEASURES } from '../../styles';



const ExampleButton = ({text, onPress, color: backgroundColor, textColor, disabled = false}: IExampleButtonProps) => (
  <View style={[exampleButtonStyles.buttonContainer, {opacity: disabled ? MEASURES.opacity.disabledOpacity : MEASURES.opacity.enabledOpacity}]} >
    <TouchableOpacity
      style={[exampleButtonStyles.button, !!backgroundColor && {backgroundColor}]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={MEASURES.opacity.activeOpacity}>
      <Text style={[exampleButtonStyles.buttonText, !!textColor && {color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export { ExampleButton };