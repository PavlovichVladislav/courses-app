import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator: (initialState: Partial<StateSchema>) => Decorator = (initialState) => (
  (Story) => (
    <StoreProvider initialState={initialState as StateSchema}>
      <Story />
    </StoreProvider>
  )
);
