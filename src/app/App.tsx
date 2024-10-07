import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';

const App: FC = () => {
  return (
    <div className={classNames('app', {})}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
