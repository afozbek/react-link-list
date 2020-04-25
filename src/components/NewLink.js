import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { notify } from '../store/notification/actions';
import { addLink } from '../store/linkList/actions';
import { NavLink } from 'react-router-dom';

const NewLink = ({ addLink, notify }) => {
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const addNewLink = (e) => {
    e.preventDefault();

    const newLink = {
      id: Math.random(),
      text: linkName,
      url: linkUrl,
      points: 0,
      created_time: new Date().getTime(),
    };

    addLink(newLink);

    const notifyText = linkName + ' added.';
    notify(notifyText);
  };

  return (
    <form className="m-linkForm" action="POST" onSubmit={addNewLink}>
      <NavLink className="m-linkForm__navLink" to="/">
        &#8592; Return to List
      </NavLink>
      <h1 className="m-linkForm__header">Add New Link</h1>

      <div className="m-linkForm__group">
        <label htmlFor="link_name">Link Name:</label>
        <input
          id="link_name"
          className="m-linkForm__input"
          placeholder="e.g. Alphabet"
          type="text"
          required
          onChange={(e) => setLinkName(e.target.value)}
        />
      </div>

      <div className="m-linkForm__group">
        <label htmlFor="link_url">Link URL:</label>
        <input
          id="link_url"
          className="m-linkForm__input"
          placeholder="e.g. http://abc.xyz"
          type="text"
          required
          onChange={(e) => setLinkUrl(e.target.value)}
        />
      </div>

      <button className="a-submitBtn" type="submit">
        ADD
      </button>
    </form>
  );
};

NewLink.propTypes = {
  addLink: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    linkList: state.linkList,
    notification: state.notification,
  };
};

const mapDispatchToProps = {
  addLink,
  notify,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLink);
