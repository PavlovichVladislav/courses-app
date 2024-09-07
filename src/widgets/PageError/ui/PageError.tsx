import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      {t('Произошла ошибка.')}
      <AppButton onClick={onReload}>{t('Перезагрузить')}</AppButton>
    </div>
  );
};
