import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => setCounter((value) => value += 1)}
      >
        {t('upd count')}
      </button>
      {counter}
      {t('Информация')}
    </div>
  );
}

export default AboutPage;
