import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
    const [count, setCounter] = useState(0);

    const onClick = () => {
        setCounter(count => count + 1)
    }

    return (
        <div>
            {count}
            <button className='btn' onClick={onClick}>click</button>
        </div>
    );
};

export default Counter;