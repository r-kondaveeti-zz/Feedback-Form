import React from 'react';

export class FormTextAreaItem extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: ''
       }
   }

   onChange = (event)=> {
        this.setState({value: event.target.value});
   }

    render() {
        return (
            <textarea placeholder={this.props.placeholder} onChange={this.onChange}></textarea>
        );
    }
}