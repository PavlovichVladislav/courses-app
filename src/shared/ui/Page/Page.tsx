import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode } from 'react';
import styles from './Page.module.scss';

interface PageProps {
  className?: string
  children: ReactNode;
}

export const Page = ({ className, children }: PageProps) => {
  return (
    <section className={classNames(styles.page, {}, [className])}>
      {children}
    </section>
  );
};
