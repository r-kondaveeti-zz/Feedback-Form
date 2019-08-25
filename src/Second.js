import React from 'react';
import Axios from 'axios';

export class Second extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forms: []
        }
    }

    componentDidMount = () => {
        Axios.get('http://localhost:8080/findAll').then(resp => {
            this.setState({forms: resp.data})
        })
    }

    render() {
        const elements = this.state.forms.map(element => {
           return ( <a href="/" key={element.id} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{element.name}</h5>
            <small>3 days ago</small>
            </div>
            <p className="mb-1">{element.feedback}</p>
            <small>{element.email}</small>
        </a>)
        })
        return (
        <div>
            <h2 style={{color: '#FFFFFF'}}>Feedback Form <a href="/" style={{float: "right"}}>Home</a></h2>
            <div className="list-group">
            {elements}
            </div>
        </div>
        );
    }
}