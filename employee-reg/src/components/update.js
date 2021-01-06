import React from 'react';
import {EditProf} from './editProf';
import axios from 'axios';

export class Update extends React.Component {

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
                <h3>Update Employee Information</h3>
                <EditProf employees={this.state.employees} ReloadData={this.ReloadData}></EditProf>
            </div>
        );
    }
}