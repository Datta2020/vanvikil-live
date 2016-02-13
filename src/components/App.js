import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GlobalNav from './nav/GlobalNav';
import Loading from './helpers/Loading';

class App extends Component {
    render() {
        const { children, options } = this.props;

        return (
            <div>
                <GlobalNav />
                <div className="container">
                    {options.loading && <Loading />}
                    {children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    options: PropTypes.object.isRequired
};

function mapStateToProps({ options }) {
    return {
        options
    };
}

export default connect(mapStateToProps)(App);
