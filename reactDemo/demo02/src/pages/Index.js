import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {uid:1, title: '这是一条新闻'},
                {uid:2, title: '这是一个事件'},
                {uid:3, title: '这是一条寻狗启示'}
            ]
        };
        this.props.history.push('/home');
    }
    render() { 
        return ( 
            <div>
                {/* <Redirect to={'/home'} /> */}
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                <li key={item + index}>
                                    <Link to={'/list/'+item.uid}>
                                        { item.title }
                                    </Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
         );
    }
}
 
export default Index;