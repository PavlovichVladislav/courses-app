import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';

import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const MODAL_CLOSE_DELAY = 500;

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, MODAL_CLOSE_DELAY);
  }, [onClose]);

  const onEscPress = useCallback((e: KeyboardEvent) => {
    console.log('click');

    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onEscPress);
      return;
    }

    window.removeEventListener('keydown', onEscPress);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isOpen, onEscPress]);

  const styleMods = {
    [styles.open]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, styleMods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
