import {CHANGE_VAL, ADD_ITME, DEL_ITME, GET_LIST} from './actionTypes';
const defaultState = {
    inputVal: 'White Something',
    list: [
        '早上8点打卡',
        '早上9点与项目经理沟通需求',
        '早上10点与小姐姐聊天'
    ]
}
//reducer里边只能接收state，不能改变
export default ( state = defaultState, action )=>{
    if(action.type === CHANGE_VAL){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }
    if(action.type === ADD_ITME){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState;
    }
    if(action.type === DEL_ITME){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type === GET_LIST){
        console.log(action)
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list;
        return newState;
    }
    return state;
}