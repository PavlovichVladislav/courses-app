import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';

import styles from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const MODAL_CLOSE_DELAY = 500;

export const Modal = ({
  className, children, isOpen, onClose,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, MODAL_CLOSE_DELAY);
  }, [onClose]);

  const onEscPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

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

  return (
    <Portal element={document.getElementById('root')}>
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
