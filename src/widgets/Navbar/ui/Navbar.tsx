import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { ThemeButton } from 'widgets/ThemeButton';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.themeButtonWrapper}>
        <ThemeButton />
      </div>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>root page</AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>about page</AppLink>
      </div>
    </div>
  )
}