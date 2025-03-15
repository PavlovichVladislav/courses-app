import type { Meta, StoryObj } from '@storybook/react';
import icon from 'shared/assets/icons/Profile.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/decorators/ThemeDecorator/ThemeDecorator';
import { Icon } from './Icon';

const meta = {
  title: 'shared/Icon',
  component: Icon,
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    Svg: icon,
  },
};

export const Dark: Story = {
  args: {
    Svg: icon,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Orange: Story = {
  args: {
    Svg: icon,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
