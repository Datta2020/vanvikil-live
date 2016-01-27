import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Live from '../components/Live';
import Statistics from '../components/Statistics';
import Squad from '../components/Squad';
import FirstTeam from '../components/FirstTeam';
import SecondTeam from '../components/SecondTeam';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Live} />
        <Route path="/stats" component={Statistics} />
        <Route path="/spillerstall" component={Squad} />
        <Route path="/a-lag" component={FirstTeam} />
        <Route path="/b-lag" component={SecondTeam} />
    </Route>
);
