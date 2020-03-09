import React, { Component } from 'react';
import PropTypes from 'prop-types';
class DistList extends Component {
    constructor(props){
        super(props);
        this.handleItem = this.handleItem.bind(this);
    }
    // 这个声明周期调用：组件存在于dom中才会被执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    //组件性能优化(数据没有发生变化的时候不需要渲染)
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    render() { 
        console.log('child--render');
        return ( 
            <div onClick={this.handleItem}>
                {this.props.avname}为你做：{this.props.content}
            </div>
         );
    }
    handleItem(){
        this.props.delItem(this.props.index);
    }
    
}
DistList.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func
}
DistList.defaultProps = {
    avname: '波多野结衣'
}
 
export default DistList;