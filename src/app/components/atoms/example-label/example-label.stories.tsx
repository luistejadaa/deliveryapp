import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ExampleLabel} from './example-label';
import { COLORS, FONTSIZES } from '../../styles';

export default {
  title: 'ATOMS/ExampleLabel',
  component: ExampleLabel,
} as ComponentMeta<typeof ExampleLabel>;

const Title: ComponentStory<typeof ExampleLabel> = args => (
  <ExampleLabel {...args} />
);

const Subtitle: ComponentStory<typeof ExampleLabel> = args => (
  <ExampleLabel {...args} />
);

const Normal: ComponentStory<typeof ExampleLabel> = args => (
  <ExampleLabel {...args} />
);

const Medium: ComponentStory<typeof ExampleLabel> = args => (
  <ExampleLabel {...args} />
);

const Small: ComponentStory<typeof ExampleLabel> = args => (
  <ExampleLabel {...args} />
);

const textExample = 'Hello World';

Title.args = {
  text: textExample,
  color: COLORS.blackColor,
  fontSize: FONTSIZES.title,
};

Subtitle.args = {
  text: textExample,
  color: COLORS.blackColor,
  fontSize: FONTSIZES.subtitle,
};

Normal.args = {
  text: textExample,
  color: COLORS.blackColor,
  fontSize: FONTSIZES.normal,
};

Medium.args = {
  text: textExample,
  color: COLORS.blackColor,
  fontSize: FONTSIZES.medium,
};

Small.args = {
  text: textExample,
  color: COLORS.blackColor,
  fontSize: FONTSIZES.small,
};

export {Title, Subtitle, Normal, Small}
