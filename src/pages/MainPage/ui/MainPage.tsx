import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {t('Главная')}
      {t('Главнейшая!')}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos delectus quo corrupti quaerat ut hic illo, officiis voluptas quasi beatae repellendus temporibus aut quam libero similique quibusdam, dolorum ad!
      </Modal>
      <button onClick={() => setIsOpen(true)}>open modal</button>
    </div>
  );
};

export default MainPage;
