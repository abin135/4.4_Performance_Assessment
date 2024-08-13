import { useState } from 'react';
import React from 'react';

const Button = () => {
    const [count, setCount] = useState(0);
  
    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Button;