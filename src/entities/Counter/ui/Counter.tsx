// import { classNames } from 'shared/lib/classNames';

import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounter/getCounterTest';

export const Counter = () => {
  const { t } = useTranslation();
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const onInc = () => {
    dispatch(counterActions.increment());
  };

  const onDec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <div>
        {t('Значение')}
        {' '}
        =
        {' '}
        {value}
      </div>
      <AppButton onClick={onInc}>{t('increment')}</AppButton>
      <AppButton onClick={onDec}>{t('decrement')}</AppButton>
    </>
  );
};
