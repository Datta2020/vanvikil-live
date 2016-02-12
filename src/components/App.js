import React, { Component, PropTypes } from 'react';
import GlobalNav from './nav/GlobalNav';

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <GlobalNav />
                <div className="container">
                    {children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node
};

export default App;
