import React, { useReducer } from 'react';

function ReducerDemo(){
    const [count, dispatch] = useReducer((state, action)=>{
        console.log(state);
        console.log(action)
        switch(action){
            case 'add':
                return state + 1;
            case 'reduce':
                return state -1;
            default:
                return state;
        }
    },0)
    return (
        <div>
            <p>现在的分数时{count}</p>
            <button onClick={()=>{dispatch('add')}}>Increase</button>
            <button onClick={()=>{dispatch('reduce')}}>Decrease</button>
        </div>
    )
}
export default ReducerDemo;