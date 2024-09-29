import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useEffect, useRef, useState } from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const MODAL_CLOSE_DELAY = 500;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = () => {
    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, MODAL_CLOSE_DELAY)
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    }
  }, [])

  const styleMods = {
    [styles.open]: isOpen,
    [styles.isClosing]: isClosing
  }

  return (
    <div className={classNames(styles.modal, styleMods, [className])}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};
