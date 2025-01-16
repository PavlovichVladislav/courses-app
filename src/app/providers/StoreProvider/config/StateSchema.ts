import {
  Action, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
  user: UserSchema;

  // Асинхронные редьюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments: ArticleDetailsCommentsSchema;
}

export type ReducersKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: ReducersKey, reducer: Reducer) => void;
  remove: (key: ReducersKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: NavigateFunction
}

export interface ThunkConfig<E> {
  rejectValue: E,
  extra: ThunkExtraArg,
  state: StateSchema
}
