import { TextStyle, ViewStyle } from "react-native";

interface IExampleButtonProps {
    onPress: () => void;
    text: string;
    color?: string;
    textColor?: string;
  };
  
  interface IExampleButtonStyles {
    button: ViewStyle;
    buttonText: TextStyle;
    buttonContainer: ViewStyle;
}

  export type { IExampleButtonProps, IExampleButtonStyles };