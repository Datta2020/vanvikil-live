import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Live extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    {'Live'}
                </div>
            </div>
        );
    }
}

Live.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps({ data, options }) {
    return {
        data,
        options
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Live);
