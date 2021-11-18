import React, { Component } from 'react';
import PropTypes from 'prop-types'

class inButton extends Component{
    static propTypes={
        className: PropTypes.string
    }
    static defaultProps={
        className:"same_size"
    }
    render() {
        return <input
            type="button"
            className={this.props.className}
            value={this.props.value} />
    }
}
export default inButton