import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
  icon?: ReactNode;
  collapsed?: boolean;
}

export const AppLink = ({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  icon,
  collapsed,
  ...otherProps
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames(
      styles.appLink,
      { [styles.withIcon]: !!icon },
      [className, styles[theme]],
    )}
    {...otherProps}
  >
    {icon}
    {!collapsed && (
      <div className={styles.text}>{children}</div>
    )}
  </Link>
);
