import { classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties, useMemo } from 'react';
import avatar from './avatar.png';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string,
  src?: string,
  size?: number
}

export const Avatar = ({ className, src, size }: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      style={style}
      className={classNames(
        styles.avatar,
        {},
        [className],
      )}
      src={src || avatar}
      alt="фото профиля"
    />
  );
};
