import React from 'react';

import { FormInputItem } from './components/FormInputItem';
import { FormTextAreaItem } from './components/FormTextAreaItem';
import { Button } from './components/Button';

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            feedback: ''
        }
    }

    render() {
        return (
            <div>
            <h2>FEEDBACK FORM</h2>
            <form>
              <FormInputItem name="name" placeholder="Full Name" value={(name)=>{this.setState({name: name})}}/>
              <FormInputItem name="email" placeholder="Email" value={(email)=>{this.setState({email: email})}}/>
              <FormTextAreaItem placeholder="Message" value={(feedback)=>{this.setState({feedback: feedback})}}/>
              <Button type="submit" />
            </form>
            </div>
        );
    }
}