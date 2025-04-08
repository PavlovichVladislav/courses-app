import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
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
      <header className={classNames(styles.navbar, {}, [className])}>
        <Button
          className={styles.links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogoutClick}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  );
});
