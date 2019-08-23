import React from 'react';

export class FormTextAreaItem extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: ''
       }
   }

   onChange = (event)=> {
        this.setState({value: event.target.value}, () => this.props.value(this.state.value));
   }

    render() {
        return (
            <textarea 
            name={this.props.name}
            placeholder={this.props.placeholder} 
            onChange={this.onChange}>
            </textarea>
        );
    }
}