import React, { useState, createContext, useContext } from 'react';

const CreateContext = createContext();

function SonCount(){
    let count = useContext(CreateContext);
    return (
        <div>{count}</div>
    )
}

function Example4(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>点击了{count}次按钮</p>
            <button onClick={()=>{setCount(count + 1)}}>点击</button>
            <CreateContext.Provider value={count}>
                <SonCount />
            </CreateContext.Provider> 
        </div>
    )
}
export default Example4;