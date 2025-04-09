import { MutableRefObject, useEffect, useRef } from 'react';

export interface useInfinityScrollOptions {
  cb: () => void;
  triggerRef: MutableRefObject<HTMLElement>; // тригерящий реф, после которого загружаем новые данные
  wrapperRef: MutableRefObject<HTMLElement>; // это на сам page, т.к. скролл не на всю страницу, документ использовать не можем
}

export const useInfinityScroll = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
  }, []);
};
