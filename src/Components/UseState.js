import React, { useState } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    // [state, setState] = useState(whatever);
    // For Testing use function 

    return (
        <div>
            <h1>New Counter with hooks {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter;