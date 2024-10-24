import { reducersKey, ReduxStoreWithManager, useAppDispatch } from 'app/providers/StoreProvider';
import { useStore } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = Partial<Record<reducersKey, Reducer>>;
type ReducerListEntry = [reducersKey, Reducer];

interface DynamicModuleLoaderProps {
  reducerName: reducersKey;
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children, reducers, removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]: ReducerListEntry) => {
      store.reducerManager.add(reducerName, reducer);
      dispatch({ type: `@INIT ${reducerName} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName]: ReducerListEntry) => {
          store.reducerManager.remove(reducerName);
          dispatch({ type: `@REMOVE ${reducerName} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return children;
};
