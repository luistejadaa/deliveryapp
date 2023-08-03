import { TextStyle, ViewStyle } from "react-native";

interface IExampleLabelProps {
    text: string;
    color?: string;
    fontSize?: number;
    backgroundColor?: string;
    onPress?: () => void;
}

interface IExampleLabelStyles {
    label: TextStyle;
    container: ViewStyle;
} 

export type { IExampleLabelProps, IExampleLabelStyles };
