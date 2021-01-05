  
import React from 'react';
import { Profile } from './profile';
import axios from 'axios';

export class Manager extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        employees: []
    };

    ReloadData(){
        axios.get('http://localhost:4000/api/sample_analytics/customers')
            .then((response) => {
                this.setState({ employees: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/sample_analytics/customers')
            .then((response) => {
                this.setState({ employees: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1>This is the read component.</h1>
                <Profile employees={this.state.employees} ReloadData={this.ReloadData}></Profile>
            </div>
        );
    }
}