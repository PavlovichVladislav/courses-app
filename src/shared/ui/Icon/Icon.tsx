import { classNames } from 'shared/lib/classNames/classNames';
import { FunctionComponent, memo, SVGProps } from 'react';

import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return (
    <Svg className={classNames(styles.icon, {}, [className])} />
  );
});
