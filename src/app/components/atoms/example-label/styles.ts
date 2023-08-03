import {StyleSheet} from 'react-native';
import {IExampleLabelStyles} from './interfaces';
import {COLORS, FONTSIZES} from '../../styles';

const exampleLabelStyles = StyleSheet.create<IExampleLabelStyles>({
  label: {
    color: COLORS.blackColor,
    fontSize: FONTSIZES.small,
    backgroundColor: COLORS.transparentColor,
  },
  container: {
    backgroundColor: COLORS.transparentColor,
    alignItems: 'flex-start',
    flex: 1,
  },
});

export {exampleLabelStyles};
