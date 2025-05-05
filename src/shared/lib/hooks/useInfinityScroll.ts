import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollOptions {
  cb?: () => void;
  triggerRef: MutableRefObject<HTMLElement>; // тригерящий реф, после которого загружаем новые данные
  wrapperRef: MutableRefObject<HTMLElement>; // это на сам page, т.к. скролл не на всю страницу, документ использовать не можем
}

export const useInfinityScroll = ({ wrapperRef, triggerRef, cb }: UseInfinityScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (cb) {
      const options = {
        root: wrapperElement, // элемент, в котором находится скролл
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { // проверка нужна, чтобы cb отрабатывал только огда объект появляется в зоне видимости
          // сейчас он отработает и тогда, когда он пропадает из зоны видимости
          console.log('intersected');
          cb();
        }
      }, options); // переданный cb будет вызываться
      // когда на экрана появляется элемент за которым мы смотрим

      observer.observe(triggerElement); // указываем обзерверу за чем именно мы следим
    }

    return () => {
      if (observer && triggerElement) {
        debugger;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, cb]);
};
