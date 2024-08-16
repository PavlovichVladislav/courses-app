import { classNames } from 'shared/lib/classNames';

import styles from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeButton } from 'widgets/ThemeButton';

interface SideBarProps {
  className?: string
}

console.log(styles.close);

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setCollapsed(collapsed => !collapsed);
  }

  return (
    <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <div className={styles.switchers}>
        <ThemeButton />
        <button onClick={onToggle}>{collapsed ? '->' : '<-'}</button>
      </div>
    </div>
  )
}