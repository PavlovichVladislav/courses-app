import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>root page</Link>
            <Link to={'/about'}>about page</Link>
            <AppRouter />
        </div>
    );
};

export default App;