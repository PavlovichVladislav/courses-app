import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('Введите логин')}
      />
      <Input
        placeholder={t('Введите пароль')}
      />
      <AppButton className={styles.loginBtn}>{t('Войти')}</AppButton>
    </div>
  );
};
