import React from 'react';

export default class SubNav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                I'm SubNav no{this.props.id}.
            </div>
        );
    }
}