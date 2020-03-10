import React, { Component, Fragment} from 'react';
import axios from 'axios';
import DishList from './DishList';
import CssTest from './CssTest';
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Dishes extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: 'hxx',
            list: ['精油推背', '精油胸推']
        };
        this.delItem = this.delItem.bind(this);
    }
    componentWillMount(){
        console.log('componentWillMount---组件将要挂载到页面的时刻');
    }
    componentDidMount(){
        console.log('componentDidMount---组件挂在完成');
        axios.get('https://easy-mock.com/mock/5e60ef28b261f976d93ed4f0/reactDemo01/dish/v1')
        .then((res)=>{
            console.log(res);
            this.setState({
                list: res.data.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;//如果这里return false后边的方法将不再执行
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    // 这里这个声明周期不起作用是因为没有引用props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    render(){
        console.log('render---挂载中');
        return (
            <Fragment>
                <div>
                    <label htmlFor="service">服务</label>
                    <input id="service" 
                            className="service" 
                            value={this.state.inputVal}  
                            onChange={this.inputChange.bind(this)} 
                            ref={(input)=>(this.input=input)}
                    />
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                </div>
                <ul ref={(ul)=>(this.ul=ul)}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index)=>{
                                return (
                                    // <li onClick={this.delItem.bind(this, index)}
                                    //     key={index + item}
                                    //     // dangerouslySetInnerHTML={{__html:item}}
                                    // >
                                    //     {item}
                                    // </li>
                                    <CSSTransition
                                        timeout={2000}
                                        classNames="css-test"
                                        unmountOnEixt
                                        appear={true}
                                        key={item+index}
                                    >
                                        <DishList 
                                            key={item+index}
                                            content={item} 
                                            index={index}
                                            delItem={this.delItem}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                    
                    {/* <li>洗脚</li>
                    <li>精油推背</li> */}
                </ul>
                <CssTest />
            </Fragment>
        )
    }
    inputChange(e){

        // this.state.inputVal = e.target.value;(这种直接赋值是不行的，需要通过setState改变值)
        this.setState({
            // inputVal: e.target.value
            inputVal: this.input.value
        })
    }
    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        },()=>{
            //这个回调函数是为了解决：由于虚拟dom,数据是异步操作的，这时候如果数据没有变更完成去获取或者操作会导致结果与实际差异，此时在这个回调中进行操作就不会存在这个问题
            console.log(this.ul.querySelectorAll('div').length);
        })
    }
    delItem(index){
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        });
        //不能直接变更数据然后进行赋值，这样对react的性能会产生很大的影响，应该用变量接收
        // this.state.list.splice(index, 1);
        // this.setState({
        //     list: this.state.list
        // })
    }

}
export default Dishes;