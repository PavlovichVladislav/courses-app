import { classNames } from 'shared/lib/classNames/classNames';

import { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(styles.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};
