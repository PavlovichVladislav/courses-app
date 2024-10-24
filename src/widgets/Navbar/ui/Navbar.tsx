import { classNames } from 'shared/lib/classNames/classNames';

import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('');
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    setIsAuthModal(true);
  };

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogoutClick = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <AppButton
          className={styles.links}
          theme={AppButtonTheme.CLEAR_INVERTED}
          onClick={onLogoutClick}
        >
          {t('Выйти')}
        </AppButton>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <AppButton
        className={styles.links}
        onClick={onOpenModal}
        theme={AppButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </AppButton>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
