import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReactPage from './video/ReactPage';
import VuePage from './video/VuePage';
import AngularPage  from './video/AngularPage';
class VideoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="topNav">
                    <ul>
                        <li>
                            <Link to="/video/reactpage">react教程</Link>
                        </li>
                        <li>
                            <Link to="/video/vuepage">vue教程</Link>
                        </li>
                        <li>
                            <Link to="/video/angularpage">angular教程</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div><h3>视频教程</h3></div>
                    <Route path="/video/reactpage/" component={ReactPage} />
                    <Route path="/video/vuepage/" component={VuePage} />
                    <Route path="/video/angularpage/" component={AngularPage} />
                </div>
            </div>
        );
    }
}
 
export default VideoPage;