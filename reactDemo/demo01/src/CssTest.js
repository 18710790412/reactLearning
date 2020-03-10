import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
class CssTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        };
        this.onToggle = this.onToggle.bind(this);
    }
    render() { 
        return (
            <div>
                <CSSTransition 
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="css-test"
                    unmountOnExit
                >
                    <div className={this.state.isShow ? 'show' : 'hide'}>Boss级人物---孙悟空</div>
                </CSSTransition>
                {/* <div className={this.state.isShow ? 'show' : 'hide'}>Boss级人物---孙悟空</div> */}
                <div>
                    <button onClick={this.onToggle}>召唤BOSS</button>
                </div>
            </div>
        );
    }
    onToggle(){
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default CssTest;
