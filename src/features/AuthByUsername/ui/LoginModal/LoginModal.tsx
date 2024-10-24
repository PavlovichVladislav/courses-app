import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { LoginForm } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
  className?: string,
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return isOpen && (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
      lazy
    >
      <Suspense fallback={<PageLoader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
