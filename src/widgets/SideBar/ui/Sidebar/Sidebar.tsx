import { classNames } from 'shared/lib/classNames/classNames';

import { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppButton, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton';

import { sidebarItemsList } from 'widgets/SideBar/model/item';
import styles from './SideBar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SideBarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onToggle = async () => {
    setCollapsed((collapsed) => !collapsed);
  };
  const [set, setSet] = useState(0);

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
  ), [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      {renderSidebarItemList}
      <div className={styles.switchers}>
        <button type="button" onClick={() => setSet(set + 1)}>{set}</button>
        <ThemeSwitcher />
        <AppButton
          type="button"
          data-testid="toggle"
          onClick={onToggle}
          size={AppButtonSize.L}
          theme={AppButtonTheme.BACKGROUND}
          square
        >
          {collapsed ? '->' : '<-'}
        </AppButton>
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
}
