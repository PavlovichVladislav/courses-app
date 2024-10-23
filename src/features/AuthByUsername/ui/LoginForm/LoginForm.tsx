import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Input } from 'shared/ui/Input/Input';
import { useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { ReduxStoreWithManager, useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('login', loginReducer);

    return () => {
      store.reducerManager.remove('login');
    };
    // eslint-disable-next-line
  }, []);

  const onChangeUsername = (username: string) => {
    dispatch(loginActions.setLogin(username));
  };

  const onChangePassword = (password: string) => {
    dispatch(loginActions.setPassword(password));
  };

  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title={t('Аутентификация')} />
      {error && <Text text={t('Неверные данные для входа')} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        placeholder={t('Введите логин')}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        placeholder={t('Введите пароль')}
        value={password}
        onChange={onChangePassword}
      />
      <AppButton
        className={styles.loginBtn}
        theme={AppButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </AppButton>
    </div>
  );
});

export default LoginForm;
