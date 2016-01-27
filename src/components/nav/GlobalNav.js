import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { IndexLinkContainer } from 'react-router-bootstrap';

export default class GlobalNav extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLinkContainer to="/">
                            <a href="#">{'Vanvik IL Live & Stats'}</a>
                        </IndexLinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem eventKey={1} href="/">{'Live'}</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/stats">
                            <NavItem eventKey={2} href="/stats">{'Stats'}</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/spillerstall">
                            <NavItem eventKey={3} href="/spillerstall">{'Spillerstall'}</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/a-lag">
                            <NavItem eventKey={4} href="/a-lag">{'A-lag'}</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/b-lag">
                            <NavItem eventKey={5} href="/b-lag">{'B-lag'}</NavItem>
                        </IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
