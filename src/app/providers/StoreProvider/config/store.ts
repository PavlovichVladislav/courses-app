import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { ReduxStoreWithManager, StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  console.log(asyncReducers);

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    preloadedState: initialState,
    devTools: IS_DEV,
    reducer: reducerManager.reduce,
  }) as ReduxStoreWithManager;

  store.reducerManager = reducerManager;

  return store;
};
