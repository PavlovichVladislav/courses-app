import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('main');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <AppButton
        className={styles.links}
        onClick={toggleAuthModal}
        theme={AppButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </AppButton>
      <Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
        {t(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos 
        delectus quo corrupti quaerat ut hic illo, officiis voluptas quasi beatae repellendus 
        temporibus aut quam libero similique quibusdam, dolorum ad!`)}
      </Modal>
    </div>
  );
};
