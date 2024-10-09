import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string,
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(styles.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
