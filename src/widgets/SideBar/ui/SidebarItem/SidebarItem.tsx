import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ISidebarItem } from '../../model/item';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem,
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

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
