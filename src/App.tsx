import { Link } from 'react-router-dom';
import Counter from './components/Counter';
import './styles/index.scss';
import { useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';

const App = () => {
    const { theme, setTheme } = useContext(ThemeContext); 

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
  
        setTheme(newTheme)
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>root page</Link>
            <Link to={'/about'}>about page</Link>
            <div>hello</div>
            <Counter/>
        </div>
    );
};

export default App;