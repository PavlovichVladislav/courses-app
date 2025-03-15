import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  onLogin: () => void;
}

const reducersList: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onLogin }: LoginFormProps) => {
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

  const onLoginClick = useCallback(async () => {
    // @ts-ignore
    const result = await dispatch(loginByUsername({ password, username }));

    if (result.meta.requestStatus === 'fulfilled') {
      onLogin();
    }
  }, [dispatch, password, username, onLogin]);

  return (
    <DynamicModuleLoader reducerName="login" reducers={reducersList}>
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
        <Button
          className={styles.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
