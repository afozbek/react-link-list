import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewLink from './components/NewLink';
import Notification from './components/Notification';
import { connect } from 'react-redux';
import Main from './components/Main';

const App = ({ notification }) => {
  return (
    <Router>
      <div>
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
