import React, { Component } from 'react';
import Icon from 'react-fa'

export default class Live extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <Icon spin name="spinner" size="5x" />
                </div>
            </div>
        );
    }
}
