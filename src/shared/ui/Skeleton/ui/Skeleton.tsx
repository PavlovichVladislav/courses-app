import { classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties } from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

export const Skeleton = ({
  className, width, height, borderRadius,
}: SkeletonProps) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div style={style} className={classNames(styles.skeleton, {}, [className])} />
  );
};
