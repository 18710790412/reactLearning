import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store';
import {changeValAction, addItemAction, delItemAction, getTodoList} from './store/actionCreator';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeVal = this.changeVal.bind(this);
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);

        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    componentDidMount(){
        // const action = getTodoList();
        // store.dispatch(action);
    }
    render() { 
        return ( 
            <TodoListUI 
                inputVal={this.state.inputVal}
                changeVal={this.changeVal}
                addItem={this.addItem}
                list={this.state.list}
                delItem={this.delItem}
            />
         );
    }
    changeVal(e){
        const action= changeValAction(e.target.value);
        store.dispatch(action);
    }
    addItem(){
        const action=addItemAction();
        store.dispatch(action);
    }
    delItem(index){
        console.log(index);
        const action=delItemAction(index);
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState());
    }
}
 
export default TodoList;