import React, { Component, PropTypes } from 'react';
import GlobalNav from './nav/GlobalNav';

export default class App extends Component {
    render() {
        return (
            <div>
                <GlobalNav />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
