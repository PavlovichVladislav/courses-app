import { Link } from 'react-router-dom';
import Counter from './components/Counter';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>root page</Link>
            <Link to={'/about'}>about page</Link>
            <div>hello</div>
            <Counter/>
        </div>
    );
};

export default App;