import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Live from '../containers/Live';
import Statistics from '../containers/Statistics';
import Squad from '../containers/Squad';
import ATeam from '../containers/ATeam';
import BTeam from '../containers/BTeam';
import MatchInfo from '../containers/MatchInfo';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Live} />
        <Route path="/match/:matchId" component={Live} />
        <Route path="/stats" component={Statistics} />
        <Route path="/spillerstall" component={Squad} />
        <Route path="/a-lag" component={ATeam} />
        <Route path="/b-lag" component={BTeam} />

        <Route path="/match-info/:matchId" component={MatchInfo} />
    </Route>
);
