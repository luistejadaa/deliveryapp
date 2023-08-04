import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { ExampleButton } from './example-button';
import { COLORS } from '../../styles';


export default {
  title: 'ATOMS/ExampleButton',
  component: ExampleButton,
} as ComponentMeta<typeof ExampleButton>;

export const Primary: ComponentStory<typeof ExampleButton> = args => (
  <ExampleButton {...args} />
);

export const PrimaryDisabled: ComponentStory<typeof ExampleButton> = args => (
  <ExampleButton {...args} />
);

export const Secondary: ComponentStory<typeof ExampleButton> = args => (
  <ExampleButton {...args} />
);

export const SecondaryDisabled: ComponentStory<typeof ExampleButton> = args => (
  <ExampleButton {...args} />
);

const textExample = 'Hello World';
Primary.args = {
  text: textExample,
  textColor: COLORS.whiteColor,
  color: COLORS.infoColor,
};

PrimaryDisabled.args = {
  text: textExample,
  textColor: COLORS.whiteColor,
  color: COLORS.infoColor,
  disabled: true,
};

Secondary.args = {
  text: textExample,
  textColor: COLORS.whiteColor,
  color: COLORS.darkColor,
};

SecondaryDisabled.args = {
  text: textExample,
  textColor: COLORS.whiteColor,
  color: COLORS.darkColor,
  disabled: true,
};
