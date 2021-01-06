import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Manager } from './manager';
import { Employee } from './employee';
import { Content } from './content';
import { NewEmp } from './newEmp';
import { Update } from './update';


export class Header extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                        {/* Brand name  */}
                        <Navbar.Brand href="/">Company Registry</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link href="/manager">Manager</Nav.Link>
                                    <NavDropdown title="Employee" id="basic-nav-dropdown" bg="dark" variant="dark">
                                        <NavDropdown.Item href="/employee">Employee</NavDropdown.Item>
                                        <NavDropdown.Item href="/newEmp">New Employee</NavDropdown.Item>
                                        <NavDropdown.Item href="/update">Existing Employee</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>

                    <br />
                    <Switch>
                        <Route path='/' component={Content} exact />
                        <Route path='/manager' component={Manager} />
                        <Route path='/employee' component={Employee} />
                        <Route path='/newEmp' component={NewEmp} />
                        <Route path='/update' component={Update} />
                        {/* <Route path='/edit:id' component={Edit}></Route> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}