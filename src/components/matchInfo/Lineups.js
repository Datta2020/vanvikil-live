import React, { Component, PropTypes } from 'react';

class Lineups extends Component {
    render() {
        const { match } = this.props;

        return (
            <tbody>
                {match.players.starting.map(player => (
                    <tr key={player.id}>
                        <td>
                            {player.number}
                        </td>
                        <td>
                            {player.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

Lineups.propTypes = {
    match: PropTypes.object.isRequired
};

export default Lineups;
