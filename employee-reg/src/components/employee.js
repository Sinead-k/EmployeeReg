import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewEmp } from './newEmp';
import { Update } from './update';

export class Employee extends React.Component{
    render() {
        return (
            <Router>
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

                    <Switch>
                        <Route path='/newEmp' component={NewEmp} />
                        <Route path='/update' component={Update} />
                    </Switch>
                </div>
            </Router>
    );
}
}
