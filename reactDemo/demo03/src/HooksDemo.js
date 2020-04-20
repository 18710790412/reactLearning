import React, { useState, useCallback, useEffect } from 'react';

function useWinSize(){
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    const reSize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[]);
    useEffect(()=>{
        window.addEventListener('resize', reSize);
        return ()=>{
            window.removeEventListener('resize', reSize)
        }
    },[])
    return size;
}
function HooksDemo(){
    const size = useWinSize();
    let aaa={
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
    let {
        a,
        c,
        d
    } = aaa;
    console.log(a)
    console.log(c)
    console.log(d)
    return (
        <>
            <div>页面的size:{size.width}---{size.height}</div>
        </>
    )
}
export default HooksDemo;