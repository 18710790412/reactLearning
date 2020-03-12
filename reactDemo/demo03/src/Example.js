import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Index(){
    useEffect(()=>{
        console.log('这个是Inde页面');
        return ()=>{
            console.log('离开了Index页面');
        }
    },[])
    return <h2>首页</h2>
}
function List(){
    useEffect(()=>{
        console.log('这个是List页面');
    })
    return <h2>Page-list</h2>
}

function Example(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>点击了{count}次按钮</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list" exact component={List} />
            </Router>
        </div>
        
    )
}
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         this.clickBtn = this.clickBtn.bind(this);
//     }
//     render() { 
//         return (
//             <div>
//                 <p>这是第{this.state.count}次点击按钮</p>
//                 <button onClick={this.clickBtn}>点击</button>
//             </div>
//         );
//     }
//     clickBtn(){
//         let count = this.state.count;
//         // let num = count + 1;
//         this.setState({
//             count: count + 1
//         })
//     }
// }
 
export default Example;