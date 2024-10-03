import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem',
    isOpen: true,
    onClose: () => {},
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos 
      delectus quo corrupti quaerat ut hic illo, officiis voluptas quasi beatae repellendus 
      temporibus aut quam libero similique quibusdam, dolorum ad!`,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Light: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos 
      delectus quo corrupti quaerat ut hic illo, officiis voluptas quasi beatae repellendus 
      temporibus aut quam libero similique quibusdam, dolorum ad!`,
  },
};
