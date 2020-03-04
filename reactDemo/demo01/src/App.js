import React,{ Component } from 'react';
class App extends Component{
    render(){
        return (
            <div>
                <div>Hello hxx!!!</div>
                <ul>
                    <li>{true ? 'hxx' : '侯小轩'}</li>
                    <li>{false ? 'hxx' : '侯小轩'}</li>
                </ul>
            </div>
        )
    }
}
export default App;