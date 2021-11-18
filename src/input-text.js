import React, { Component } from 'react';

class inText extends Component{
    render() {
        return <input type="text" id="content" value={this.props.value} readOnly={true}/>
    }
}
export default inText