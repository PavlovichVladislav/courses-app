import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { ISidebarItem } from '../../model/item';

interface SidebarItemProps {
  item: ISidebarItem,
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      icon={item.icon}
      collapsed={collapsed}
    >
      {item.text}
    </AppLink>
  );
};
