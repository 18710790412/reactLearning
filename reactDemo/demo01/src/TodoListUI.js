import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
class TodoListUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{padding:'10px'}}>  
                <div>
                    <Input 
                        placeholder={this.props.inputVal}
                        style={{width:'250px',marginRight:'10px'}}
                        onChange={this.props.changeVal}
                        value={this.props.inputVal}
                    />
                    <Button 
                        type="primary"
                        onClick={this.props.addItem}
                    >添加</Button>
                </div>
                <div style={{margin: '10px 0', width: '320px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index)=>(<List.Item onClick={()=>(this.props.delItem(index))}>{item}</List.Item>)}
                        style={{cursor:'pointer'}}
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoListUI;