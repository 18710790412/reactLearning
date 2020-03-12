import React, { useState } from 'react';
 
function Example2(){
    const [name, setName] = useState('hxx');
    if(true){
        const [age, setAge] = useState('18');
    }
    const [work, setWork] = useState('前端工程师');
    return (
        <div>
            <p>姓名：{name}</p>
            <p>年龄：{age}</p>
            <p>工作：{work}</p>
        </div>
    )
}
export default Example2;