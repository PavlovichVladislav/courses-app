import { classNames } from 'shared/lib/classNames/classNames';

import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import styles from './Page.module.scss';

interface PageProps {
  className?: string
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    cb: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(styles.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
