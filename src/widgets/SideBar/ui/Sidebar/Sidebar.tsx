import { classNames } from 'shared/lib/classNames/classNames';

import { useState } from 'react';
import { ThemeButton } from 'widgets/ThemeButton';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import styles from './SideBar.module.scss';
import { useTranslation } from 'react-i18next';

interface SideBarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { t } = useTranslation();
  
  const onToggle = async () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div 
      data-testid="sidebar" 
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.switchers}>
        <ThemeButton />
        <button data-testid="toggle" onClick={onToggle}>{collapsed ? '->' : '<-'}</button>
        {!collapsed && <LanguageSwitcher />}
        {t('test text')}
      </div>
    </div>
  );
}
