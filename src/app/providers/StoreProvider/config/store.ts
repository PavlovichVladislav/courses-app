import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from '../types/StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<StateSchema>({
    preloadedState: initialState,
    devTools: IS_DEV,
    reducer,
  });
};
