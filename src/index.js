import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';

var browserHistory = Router.browserHistory;

ReactDOM.render((
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/school/:schoolname" component={SchoolPage}>
                <Route path="/department"/>
            </Route>
        </Switch>
    </Router>),
    document.getElementById('root')
);