import React from 'react';

export class FormInputItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (event) => {
        this.setState({value: event.target.value});
        this.props.value(this.state.value);
    }

    render() {
        return (
        <input 
        type="text" 
        name={this.props.name} 
        placeholder={this.props.placeholder} 
        onChange={this.onChange} 
        />)
    }
}