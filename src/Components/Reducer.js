import React, { useReducer } from 'react';

const Reducer = () => {

    const reduce = (state, action) => {
        if(action.type === "mir") {
            return state + 1
        } else if(action.type === "carrot") {
            return state - 1
        } else if(action.type === "*") {
            return state * 3
        }
    };

   let [state, dispatch] = useReducer(reduce, 0);

    return (
        <div>
            <h1>I am a Reducer {state}</h1>
            <button onClick={() => dispatch({type: "mir"})}>+</button>
            <button onClick={() => dispatch({type: "carrot"})}>-</button>
            <button onClick={() => dispatch({type: "*"})}>*</button>
        </div>
    )
};

export default Reducer;