import { classNames } from 'shared/lib/classNames/classNames';

import { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { useSelector } from 'react-redux';
import styles from './SideBar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItemsts } from '../../model/selectors/getSidebarItems';

interface SideBarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const sidebarItemsList = useSelector(getSidebarItemsts);
  const onToggle = async () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const renderSidebarItemList = useMemo(() => (
    <div className={styles.links}>
      {sidebarItemsList.map((item) => (
        <SidebarItem
          key={item.path}
          item={item}
          collapsed={collapsed}
        />
      ))}
    </div>
  ), [collapsed, sidebarItemsList]);

  return (
    <menu
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      {renderSidebarItemList}
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <Button
          type="button"
          data-testid="toggle"
          onClick={onToggle}
          size={ButtonSize.L}
          theme={ButtonTheme.BACKGROUND}
          square
        >
          {collapsed ? '->' : '<-'}
        </Button>
        <LanguageSwitcher short={collapsed} />
      </div>
    </menu>
  );
}
