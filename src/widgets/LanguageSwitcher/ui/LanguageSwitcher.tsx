import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { memo } from 'react';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(({ className = '', short = false }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      type="button"
      className={classNames(styles.languageSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
    >
      {t(short ? 'Сокращённый_Язык' : 'Язык')}
    </Button>
  );
});
