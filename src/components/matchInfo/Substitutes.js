import React, { Component, PropTypes } from 'react';

class Substitutes extends Component {
    render() {
        const { match } = this.props;

        return (
            <tbody>
                {match.players.substitute.map(player => (
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

Substitutes.propTypes = {
    match: PropTypes.object.isRequired
};

export default Substitutes;
