import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Salary from './workplace/Salary';
import Early from './workplace/Early';

class InstancePage extends Component {
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
                            <Link to="/instance/salary">升职加薪</Link>
                        </li>
                        <li>
                            <Link to="/instance/early">升职加薪</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div><h3>攻略</h3></div>
                    <Route path="/instance/salary" component={Salary} />
                    <Route path="/instance/early" component={Early} />
                </div>
            </div>
        );
    }
}
 
export default InstancePage;