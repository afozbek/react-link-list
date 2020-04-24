import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NewLink from './components/NewLink';
import Notification from './components/Notification';
import { connect } from 'react-redux';
import Main from './components/Main';

const App = ({ notification }) => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Link List</Link>
            </li>
            <li>
              <Link to="/new-link">New Link</Link>
            </li>
          </ul>
        </nav> */}

        {notification.notify ? <Notification /> : null}

        <Switch>
          <Route path="/new-link">
            <NewLink />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(App);
