import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная')}
      {t('Главнейшая!')}
      <Counter />
    </div>
  );
};

export default MainPage;
