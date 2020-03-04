import React, { Component, Fragment} from 'react';

class Dishes extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: 'hxx',
            list: ['基础按摩', '精油推背']
        };
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputVal}  onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            return <li key={index + item}>{item}</li>
                        })
                    }
                    {/* <li>洗脚</li>
                    <li>精油推背</li> */}
                </ul>
            </Fragment>
        )
    }
    inputChange(e){

        // this.state.inputVal = e.target.value;(这种直接赋值是不行的，需要通过setState改变值)
        this.setState({
            inputVal: e.target.value
        })
    }
    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    }

}
export default Dishes;