import { ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  initialState?: StateSchema;
  children: ReactNode;
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

let store = createReduxStore();

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  if (initialState) {
    store = createReduxStore(
      initialState,
      asyncReducers as ReducersMapObject<StateSchema>,
    );
  }

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
