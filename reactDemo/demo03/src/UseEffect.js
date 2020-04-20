import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './mock/mock'
import { Icon } from 'antd'
import IconFont from './mock/iconfont'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const SuperIcon = Icon.createFromIconfontCN({
    scriptUrl: { IconFont }, // 关键
});

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState([]);
    // new Promise((resolve)=>{
    //     axios.get('/data/index', { dataType: 'json' })
    //     .then(res => {
    //         console.log(res)
    //         setInfo(res.data.userInfo)
    //         resolve(res.data.userInfo)
    //     })
    // })  
    useEffect(() => {
        console.log(`点击了${count}次按钮`);

    })
    return (
        <div>
            <p>点击了{count}次按钮</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
            {info.map((item) => {
                return (
                    <>
                        <ul>
                            <li>{item.name}:{item.age}</li>
                        </ul>
                        <SuperIcon />
                    </>

                )
            })}
        </div>
    )

}
export default UseEffectDemo;