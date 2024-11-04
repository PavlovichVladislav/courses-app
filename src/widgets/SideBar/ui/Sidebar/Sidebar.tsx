import { classNames } from 'shared/lib/classNames/classNames';

import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppButton, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import HomeIcon from 'shared/assets/icons/info.svg';

import styles from './SideBar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SideBarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SideBarProps) {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onToggle = async () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.links}>
        <SidebarItem
          item={{
            path: RoutePath.main,
            icon: <MainIcon className={styles.icon} />,
            text: t('Главная страница'),
          }}
          collapsed={collapsed}
        />
        <SidebarItem
          item={{
            path: RoutePath.about,
            icon: <HomeIcon className={styles.icon} />,
            text: t('Страница информации'),
          }}
          collapsed={collapsed}
        />
      </div>
      <div className={styles.switchers}>
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
