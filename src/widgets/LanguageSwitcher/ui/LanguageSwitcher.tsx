import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';

import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export function LanguageSwitcher({ className = '', short = false }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <AppButton
      type="button"
      className={classNames(styles.languageSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={AppButtonTheme.CLEAR}
    >
      {t(short ? 'Сокращённый_Язык' : 'Язык')}
    </AppButton>
  );
}
