import React from 'react';

export class FormInputItem extends React.Component {

    render() {
        return (
        <input 
        type="text" 
        name={this.props.name} 
        placeholder={this.props.placeholder} 
        />)
    }
}