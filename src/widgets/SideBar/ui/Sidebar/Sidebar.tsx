import { classNames } from 'shared/lib/classNames/classNames';

import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onToggle = async () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <AppButton
          type="button"
          data-testid="toggle"
          onClick={onToggle}
          theme={AppButtonTheme.BACKGROUND_INVERTED}
          square
        >
          {collapsed ? '->' : '<-'}
        </AppButton>
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
}
