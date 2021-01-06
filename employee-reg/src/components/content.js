import React from 'react';
import { Button, Container, Row, Col, Card, ListGroupItem, ListGroup } from 'react-bootstrap';

export class Content extends React.Component{
    render(){
        return(
            <div>
                <Container fluid="md">
                <Row>
                    {/* Column 1 */}
                    <Col>
                        <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Employees</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Add new employee details</ListGroupItem>
                            <ListGroupItem>Update already existing employee information</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-info" size="lg" href='/employee'>I'm an employee</Button>{' '}
                        </Card.Body>
                        </Card>
                    </Col>

                    {/* Column 2 */}
                    <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Managers</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>View employee information</ListGroupItem>
                            <ListGroupItem>Update already existing employee information</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-info" size="lg" href='/manager'>I'm a manager</Button>{' '}
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}