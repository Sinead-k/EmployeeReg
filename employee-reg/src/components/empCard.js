import React from 'react';
import Card from 'react-bootstrap/Card';


export class EmpCard extends React.Component {
        
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
                    </Card.Body>
                </Card>
            </div>
        );
    }
}