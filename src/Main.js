import React from 'react';

import { FormInputItem } from './components/FormInputItem';
import { FormTextAreaItem } from './components/FormTextAreaItem';
import { Button } from './components/Button';
import axios from 'axios';
import qs from 'qs';

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            feedback: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            name: this.state.name,
            email: this.state.email,
            feedback: this.state.feedback
        }
        this.props.values(this.state);
        axios.post('http://localhost:8080/add', qs.stringify(form)).then();
    }
 
    render() {
        return (
            <div>
            <h2 style={{color: '#FFFFFF'}}>Feedback Form <a href="/AllUsers" style={{float: "right"}}>List All Feedbacks</a></h2>
            <form onSubmit={this.handleSubmit}>
              <FormInputItem name="name" placeholder="Full Name" value={(name)=>{this.setState({name: name})}}/>
              <FormInputItem name="email" placeholder="Email" value={(email)=>{this.setState({email: email})}}/>
              <FormTextAreaItem name="feedback" placeholder="Message" value={(feedback)=>{this.setState({feedback: feedback})}}/>
              <Button type="submit" />
            </form>
            </div>
        );
    }
}