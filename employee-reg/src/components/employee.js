import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export class Employee extends React.Component{
    render(){
        return(
            <div>
                <Container fluid="md">
                <Row>
                    {/* Column 1 */}
                    <Col>
                        <Button variant="outline-info" size="lg" href='/newEmp'>I'm a new employee</Button>{' '}
                    </Col>

                    {/* Column 2 */}
                    <Col>
                        <Button variant="outline-info" size="lg" href='/update'>I'm an existing employee</Button>{' '}
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}