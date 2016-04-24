import React, { Component, PropTypes } from 'react';
import TableHeader from '../../components/matchInfo/TableHeader';
import MatchFacts from '../../components/matchInfo/MatchFacts';
import Goals from '../../components/matchInfo/Goals';
import Cards from '../../components/matchInfo/Cards';
import Stars from '../../components/matchInfo/Stars';
import Lineups from '../../components/matchInfo/Lineups';
import Substitutes from '../../components/matchInfo/Substitutes';

import './MatchInfo.scss';

class MatchInfo extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            match: undefined
        };
    }

    componentDidMount() {
        fetch(`http://live2.vanvikil.no/api/v1/live_feed/${this.props.params.matchId}`, { mode: 'cors' })
            .then(response => response.json())
            .then(json => {
                const match = json;

                if (match.happenings) {
                    match.happenings.reverse();
                }

                match.players.mappedPlayers = {};

                match.players.starting.forEach(player => {
                    match.players.mappedPlayers[player.id] = player;
                });

                match.players.substitute.forEach(player => {
                    match.players.mappedPlayers[player.id] = player;
                });

                match.matchinfo = match.matchinfo[0];

                this.setState({ match });
            });
    }

    render() {
        const { match } = this.state;

        if (!match) {
            return <table className="table-match-info table" />;
        }

        return (
            <table className="table-match-info table">
                <TableHeader header="KAMPFAKTA:" />
                <MatchFacts match={match} />
                <TableHeader header="MÅL:" />
                <Goals match={match} />
                <TableHeader header="KORT:" />
                <Cards match={match} />
                <TableHeader header="DAGENS VANVIKSTJERNER:" />
                <Stars match={match} />
                <TableHeader header="LAGOPPSTILLING:" />
                <Lineups match={match} />
                <TableHeader header="INNBYTTERE:" />
                <Substitutes match={match} />
            </table>
        );
    }
}

MatchInfo.propTypes = {
    params: PropTypes.object.isRequired
};

export default MatchInfo;
