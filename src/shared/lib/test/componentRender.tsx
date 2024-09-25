import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18/i18nForTest';

export interface componentRenderOptions {
  route?: string;
}

export const componentRender = (element: ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {element}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
