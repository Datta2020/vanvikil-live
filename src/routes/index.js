import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Live from '../components/Live';
import Statistics from '../components/Statistics';
import Squad from '../components/Squad';
import ATeam from '../components/ATeam';
import BTeam from '../components/BTeam';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Live} />
        <Route path="/match/:matchid" component={Live} />
        <Route path="/stats" component={Statistics} />
        <Route path="/spillerstall" component={Squad} />
        <Route path="/a-lag" component={ATeam} />
        <Route path="/b-lag" component={BTeam} />
    </Route>
);
