import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import StatsPage from './StatsPage/StatsPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/:profileName" component={ProfilePage} />
            <Route exact path="/:profileName/stats" component={StatsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default App;
