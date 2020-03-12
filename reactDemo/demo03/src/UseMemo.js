import React, { useState, useMemo } from 'react';

function Example7(){
    const [xiaohong, setXiaoHong] = useState('等待中');
    const [zhiling, setzhiling] = useState('等待中');
    return (
        <div>
            <button onClick={()=>{setXiaoHong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setzhiling(new Date().getTime()+'zhiling向我们走来')}}>志玲</button>
            <SonComponent name={xiaohong}>{zhiling}</SonComponent>
        </div>
    )
}
// 子组件中，changeXiaohong方法只对小红起作用，但是再点击志玲时也会被调用，
function SonComponent({name,children}){
    function changeXiaohong(){
        console.log('xiaohong向我们走来了');
        return name + ',xiaohong向我们走来了';
    }
    const actionXiaohong = useMemo(()=>changeXiaohong(name), [name]);
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )

}
export default Example7;