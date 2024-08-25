import { classNames } from 'shared/lib/classNames';

import { useState } from 'react';
import { ThemeButton } from 'widgets/ThemeButton';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className = '' }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <div className={styles.switchers}>
        <ThemeButton />
        <button onClick={onToggle}>{collapsed ? '->' : '<-'}</button>
        {!collapsed && <LanguageSwitcher />}
      </div>
    </div>
  );
}
