import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';

class Cards extends Component {
    render() {
        const { match } = this.props;

        const cards = match.happenings.filter(happening =>
            happening.happening === 'yellowcard' ||
            happening.happening === 'yellowredcard' ||
            happening.happening === 'redcard'
        );

        return (
            <tbody>
                {cards.map(card => (
                    <tr key={card.id}>
                        <td>{`${card.minute}'`}</td>
                        <td>
                            <Icon name="square" className={card.happening} />
                            {' '}
                            {card.hometeam === '0' ?
                                match.matchinfo.awayteam_id
                                :
                                match.matchinfo.hometeam_id
                            }
                            {card.player &&
                                `: ${card.player}`
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

Cards.propTypes = {
    match: PropTypes.object.isRequired
};

export default Cards;
