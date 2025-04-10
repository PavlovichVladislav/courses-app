import { classNames } from 'shared/lib/classNames/classNames';

import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import styles from './Page.module.scss';

interface PageProps {
  className?: string
  children: ReactNode;
}

export const Page = ({ className, children }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    cb: () => console.log('cb'),
  });

  return (
    <section ref={wrapperRef} className={classNames(styles.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
