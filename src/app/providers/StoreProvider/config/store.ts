import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from '../types/StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    preloadedState: initialState,
    devTools: IS_DEV,
    reducer,
  });
};
