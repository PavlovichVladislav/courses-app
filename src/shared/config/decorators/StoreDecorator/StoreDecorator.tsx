import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator: (
  initialState: Partial<StateSchema>,
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) => Decorator = (initialState, asyncReducers) => (
  (Story) => (
    <StoreProvider
      initialState={initialState as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  )
);
