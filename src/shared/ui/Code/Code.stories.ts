import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: `
      import type { Meta, StoryObj } from '@storybook/react';
      import { Code } from './Code';

      const meta = {
        title: 'shared/Code',
        component: Code,
        args: {},
      } satisfies Meta<typeof Code>;

      export default meta;
      type Story = StoryObj<typeof meta>;

      export const Primary: Story = {
        args: {
          children:
        },
      };
    `,
  },
};
