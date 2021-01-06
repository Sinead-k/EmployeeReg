import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import{Link} from 'react-router-dom';

export class EditCard extends React.Component {

    constructor() {
        super();
        this.DeleteEmp = this.DeleteEmp.bind(this);
    }

    DeleteEmp(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/sample_analytics/customers/'+this.props.employee._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <Card>
                <Card.Header>{this.props.employee.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                                {this.props.employee.username}
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                                {this.props.employee.address}
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                                {this.props.employee.email}
                        </blockquote>
                        <Link to={"/edit/"+ this.props.employee._id} className="btn btn-info">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteEmp}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}