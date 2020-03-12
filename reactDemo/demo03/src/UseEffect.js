import React, { useState, useEffect } from 'react';
function Example3(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(`点击了${count}次按钮`);
    })
    return (
        <div>
            <p>点击了{count}次按钮</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
        </div>
    )

}
export default Example3;