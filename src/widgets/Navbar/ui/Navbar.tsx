import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to="/">
          {t('Главная страница')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          {t('Страница информации')}
        </AppLink>
      </div>
    </div>
  );
};
