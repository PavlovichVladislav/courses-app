import { classNames } from 'shared/lib/classNames';

import styles from './Spinner.module.scss';

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => (
  <div className={classNames(styles.spinner, {}, [className])} />
);
