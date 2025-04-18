import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { ISidebarItem } from '../../model/types/sidebar';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem,
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      icon={<item.Icon className={styles.icon} />}
      collapsed={collapsed}
    >
      {t(item.text)}
    </AppLink>
  );
});
