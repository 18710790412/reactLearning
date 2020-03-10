import {CHANGE_VAL, ADD_ITME, DEL_ITME, GET_LIST} from './actionTypes';
import axios from 'axios';
export const changeValAction = (value)=>({
    type: CHANGE_VAL,
    value
})
export const addItemAction = ()=>({
    type: ADD_ITME
})
export const delItemAction = (index)=>({
    type: DEL_ITME,
    index
})
export const getListAction = (data)=>({
    type: GET_LIST,
    data
})
//这个是中间件redux-thunk的作用，支持返回一个函数通过这个函数可以调用后台接口进行数据获取
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://easy-mock.com/mock/5e673101e06456553a67ed20/redux/v1/getdata')
        .then((res)=>{
            
        })   
        .catch((error)=>{
            let res = {
                data:{
                    data:{
                        list:[
                            '中午12点打卡',
                            '中午2点点与项目经理沟通需求',
                            '下午4点与小姐姐聊天'
                        ]
                    }
                }
            };
            const action = getListAction(res.data);
            dispatch(action);
        })
    }
}