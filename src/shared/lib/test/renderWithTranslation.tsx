import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18/i18nForTest';

export const renderWithTranslation = (element: ReactNode) => {
  render(
    <I18nextProvider i18n={i18n}>
      {element}
    </I18nextProvider>,
  );
};
