import React from 'react';
import { Navbar, NavbarBrand, Container } from 'react-bootstrap'

export class Footer extends React.Component{
    render(){
        return(
            <div className="fixed-bottom"> 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand>MERN Stack Project</NavbarBrand>
                </Container>
            </Navbar>
        </div>
        )
    }
}