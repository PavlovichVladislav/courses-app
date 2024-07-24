import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
    const [count, setCounter] = useState(0);

    const onClick = () => {
        setCounter(count => count + 1)
    }

    return (
        <div>
            {count}
            <button className={classes.btn} onClick={onClick}>click</button>
        </div>
    );
};

export default Counter;