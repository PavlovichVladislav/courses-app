import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = ({ className, children }: CodeProps) => {
  const { t } = useTranslation('article-details');

  const onCopyClick = () => {
    navigator.clipboard.writeText(String(children));
  };

  return (
    <div className={classNames(styles.code, {}, [className])}>
      <pre>
        <Button className={styles.copyBtn} onClick={onCopyClick}>{t('Копировать')}</Button>
        <code>
          {children}
        </code>
      </pre>
    </div>
  );
};
