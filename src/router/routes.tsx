import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../views/Home';
import {ROUTE_PATHS} from "./routePaths";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTE_PATHS.ROOT} component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;
