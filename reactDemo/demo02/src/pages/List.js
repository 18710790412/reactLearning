import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        let tepId = this.props.match.params.id;
        this.setState({
            id: tepId
        })
    }
    render() { 
        return ( 
            <h2>
                List-Page --- {this.state.id}
            </h2>
         );
    }
}
 
export default List;