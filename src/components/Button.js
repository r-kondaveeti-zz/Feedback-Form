import React from 'react';

export class Button extends React.Component {
    render() {
        return(
            <input type={this.props.type} />
        );
    }
}