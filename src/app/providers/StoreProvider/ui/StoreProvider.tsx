import { ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../types/StateSchema';

interface StoreProviderProps {
  initialState?: StateSchema;
  children: ReactNode;
}

let store = createReduxStore();

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  if (initialState) {
    store = createReduxStore(initialState);
  }

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
