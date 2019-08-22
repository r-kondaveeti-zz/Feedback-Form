import React from 'react';

export class FormTextAreaItem extends React.Component {

    render() {
        return (
            <textarea placeholder={this.props.placeholder}></textarea>
        );
    }
}