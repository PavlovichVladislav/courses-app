import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

import './styles/index.scss';
import { Suspense } from 'react';


export const MyComponent = () => {
    const { t, i18n } = useTranslation();
    
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return <div>
        <h1>{t("Привет")}</h1>
        <button onClick={toggleLanguage}>{t("Язык")}</button>
    </div>
}

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <MyComponent />
                <Navbar />
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;