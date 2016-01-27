import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { IndexLinkContainer } from 'react-router-bootstrap';
import Icon from 'react-fa'

export default class GlobalNav extends Component {
    render() {
        return (
            <Navbar inverse>
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
                            <NavItem eventKey={1} href="/">
                                <Icon name="futbol-o" />{' Live'}
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/stats">
                            <NavItem eventKey={2} href="/stats">
                                <Icon name="bar-chart" />{' Stats'}
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/spillerstall">
                            <NavItem eventKey={3} href="/spillerstall">
                                <Icon name="users" />{' Spillerstall'}
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/a-lag">
                            <NavItem eventKey={4} href="/a-lag">
                                <Icon name="plus-square" />{' A-lag'}
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/b-lag">
                            <NavItem eventKey={5} href="/b-lag">
                                <Icon name="square" />{' B-lag'}
                            </NavItem>
                        </IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
