import React, { Component, PropTypes } from 'react';

class TableHeader extends Component {
    render() {
        const { header } = this.props;

        return (
            <thead>
                <tr>
                    <th colSpan="100">
                        <span className="table-match-info-header">{header}</span>
                    </th>
                </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = {
    header: PropTypes.string.isRequired
};

export default TableHeader;
