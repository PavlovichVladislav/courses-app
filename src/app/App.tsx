import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>root page</Link>
            <Link to={'/about'}>about page</Link>
            <Suspense fallback={<div>загрузка</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;