import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import { IExampleButtonStyles } from './interfaces';
import { COLORS, FONTSIZES, MEASURES } from '../../styles';

const exampleButtonStyles = StyleSheet.create<IExampleButtonStyles>({
  button: {
    paddingVertical: MEASURES.margins.normal,
    paddingHorizontal: MEASURES.margins.medium,
    borderRadius: MEASURES.borders.normalCornerRadius,
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
  buttonText: {
    color: COLORS.whiteColor,
    fontSize: FONTSIZES.normal,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export {exampleButtonStyles};
