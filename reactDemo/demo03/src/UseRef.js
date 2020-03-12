import React, { useRef, useState, useEffect } from 'react';

function UseRef(){
    const inputEl = useRef(null);
    const btnClick = ()=>{
        inputEl.current.value = 'hello world!!!';
        // console.log(inputEl)
    };
    const [text, setText] = useState('hxx');
    const textRef = useRef();
    useEffect(()=>{
        textRef.current = text;
        console.log(textRef);
    },[text])
    return (
        <>
            <input type="text" ref={inputEl} />
            <button onClick={btnClick}>再inputs上展示文字</button>
            <hr/>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}
export default UseRef;