import {
  Action, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  user: UserSchema,

  // Асинхронные редьюсеры
  login?: LoginSchema
  profile?: ProfileSchema
}

export type reducersKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: reducersKey, reducer: Reducer) => void;
  remove: (key: reducersKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager?: ReducerManager;
}
