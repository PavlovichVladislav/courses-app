import { reducersKey, ReduxStoreWithManager, useAppDispatch } from 'app/providers/StoreProvider';
import { useStore } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicModuleLoaderProps {
  reducerName: reducersKey;
  reducer: Reducer;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children, reducerName, reducer, removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add(reducerName, reducer);
    dispatch({ type: `@INIT ${reducerName} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(reducerName);
        dispatch({ type: `@REMOVE ${reducerName} reducer` });
      }
    };
    // eslint-disable-next-line
  }, []);

  return children;
};
