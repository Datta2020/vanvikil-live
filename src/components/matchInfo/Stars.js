import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';

class Stars extends Component {
    render() {
        const { match } = this.props;
        const { matchinfo } = match;

        return (
            <tbody>
                <tr>
                    <td>
                        <Icon name="star" />
                        {' '}
                        <Icon name="star" />
                        {' '}
                        <Icon name="star" />
                    </td>
                    <td>
                        {match.players.mappedPlayers[matchinfo.star3_id].name}
                    </td>
                </tr>
                <tr>
                    <td>
                        <Icon name="star" />
                        {' '}
                        <Icon name="star" />
                    </td>
                    <td>
                        {match.players.mappedPlayers[matchinfo.star2_id].name}
                    </td>
                </tr>
                <tr>
                    <td>
                        <Icon name="star" />
                    </td>
                    <td>
                        {match.players.mappedPlayers[matchinfo.star1_id].name}
                    </td>
                </tr>
            </tbody>
        );
    }
}

Stars.propTypes = {
    match: PropTypes.object.isRequired
};

export default Stars;
