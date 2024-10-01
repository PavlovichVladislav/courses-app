import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18/i18n';
import { ErrorBoundary } from 'app/providers/ErrouBoundary';
import { Suspense } from 'react';

import './app/styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Suspense>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,
);
