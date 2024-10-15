import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password } = useSelector(getLoginState);
  const dispatch = useDispatch();

  const onChangeUsername = (username: string) => {
    dispatch(loginActions.setLogin(username));
  };

  const onChangePassword = (password: string) => {
    dispatch(loginActions.setPassword(password));
  };

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
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
      <AppButton className={styles.loginBtn} theme={AppButtonTheme.OUTLINE}>{t('Войти')}</AppButton>
    </div>
  );
});
