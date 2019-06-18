import React from 'react';
import '../../App.css';

export default class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <span className="nav" id={this.props.id} onClick={this.props.select}>{this.props.caption}</span>
        );
    }
}