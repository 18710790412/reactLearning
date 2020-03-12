import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import VideoPage from './pages/VideoPage';
import InstancePage from './pages/InstancePage';
import './index.css';
class WorkRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerConfig: [
                {path:'/',title:'首页',exact:true,component:IndexPage},
                {path:'/video',title:'视频教程',exact:false,component:VideoPage},
                {path:'/instance',title:'实例展示',exact:false,component:InstancePage},
            ]
        }
    }
    render() { 
        return (
            <Router>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>一级导航</h3>
                        <ul>
                            {
                                this.state.routerConfig.map((item, index)=>{
                                    return (
                                        <li key={item+index}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="rightMain">
                        {
                            this.state.routerConfig.map((item, index)=>{
                                return (
                                    <Route path={item.path} exact={item.exact} component={item.component} />
                                )
                            })
                        }
                    </div>
                </div>
            </Router>
            
        );
    }
}
 
export default WorkRouter;