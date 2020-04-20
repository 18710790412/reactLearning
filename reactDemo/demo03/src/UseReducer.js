import React, { useReducer } from 'react';

const ReducerDemo = (props) => {
    const initData = {
        count: 0
    };
    const reducer = (state, action)=>{
        switch(action.type){
            case 'add':
                console.log(state)
                console.log(action)
                return { ...state, count: state.count + action.aaa };
            case 'reduce':
                return { ...state, count: state.count - action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initData);
    return (
        <div>
            <p>现在的分数时{state.count}</p>
            <button onClick={()=>{dispatch({type: 'add', aaa: 1})}}>Increase</button>
            <button onClick={()=>{dispatch({type: 'reduce', payload: 1})}}>Decrease</button>
        </div>
    )
}
export default ReducerDemo;