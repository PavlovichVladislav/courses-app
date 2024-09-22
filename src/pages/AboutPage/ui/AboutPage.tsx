import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonSize } from 'shared/ui/AppButton/AppButton';

function AboutPage() {
  const { t } = useTranslation('about');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <AppButton
        type="button"
        onClick={() => setCounter((value) => value += 1)}
        size={AppButtonSize.XL}
      >
        {t('upd count')}
      </AppButton>
      {counter}
      {t('Информация')}
    </div>
  );
}

export default AboutPage;
