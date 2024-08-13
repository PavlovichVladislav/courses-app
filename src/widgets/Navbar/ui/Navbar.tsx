import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';

import styles from './Navbar.module.scss';
import { ThemeButton } from 'widgets/ThemeButton';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeButton />
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>root page</AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>about page</AppLink>
      </div>
    </div>
  )
}