import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';
import StatsPage from '../StatsPage/StatsPage';
import Error from '../Error/Error';

const App = () => (
    <main>
        <Switch>
            <Route exact path="/:profileName" component={ProfilePage} />
            <Route exact path="/:profileName/stats" component={StatsPage} />
            <Route render={() => <Error message="404: Page Not Found" />} />
        </Switch>
    </main>
);

export default App;
