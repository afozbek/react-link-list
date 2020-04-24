import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { clearNotify } from '../store/notification/actions';

const Notification = ({ notification, clearNotify }) => {
  setTimeout(() => {
    clearNotify();
  }, notification.displayTime);

  return <div className="m-notification">{notification.text}</div>;
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const mapDispatchToProps = {
  clearNotify,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
