import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewLink from './views/NewLink';
import Notification from './components/common/Notification';
import { connect } from 'react-redux';
import Listing from './views/Listing';

const App = ({ notification }) => {
  return (
    <Router>
      <div className="o-app__container">
        {notification.showNotification && <Notification />}

        <Switch>
          <Route path="/new-link">
            <NewLink />
          </Route>
          <Route path="/">
            <Listing />
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
