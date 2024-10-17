import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  return (
    <div>
      {t('Главная')}
      <Counter />
      <Input autoFocus value={value} onChange={setValue} placeholder="Текст" />
    </div>
  );
};

export default MainPage;
