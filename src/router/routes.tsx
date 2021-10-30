import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../views/Home';
import {ROUTE_PATHS} from "./routePaths";
import Explore from "../views/Explore";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTE_PATHS.ROOT} component={Home} />
                <Route exact path={ROUTE_PATHS.EXPLORE} component={Explore} />
            </Switch>
        </Router>
    );
};

export default Routes;
