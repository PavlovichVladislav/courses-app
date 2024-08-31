import { classNames } from 'shared/lib/classNames';

import { Spinner } from 'shared/ui/Spinner/Spinner';
import styles from './PageLoader.module.scss';

interface PageLoadeProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoadeProps) => (
  <div className={classNames(styles.pageLoader, {}, [className])}>
    <Spinner />
  </div>
);
