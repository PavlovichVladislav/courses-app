import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);
  const dispatch = useAppDispatch();

  const onChangeUsername = (username: string) => {
    dispatch(loginActions.setLogin(username));
  };

  const onChangePassword = (password: string) => {
    dispatch(loginActions.setPassword(password));
  };

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      {error && <div>{error}</div>}
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
