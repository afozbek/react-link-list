import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { notify } from '../store/notification/actions';
import { addLink } from '../store/linkList/actions';
import { SubmitButton } from '../components/common/SubmitButton';
import FormControl from '../components/NewLink/FormControl';

import { isValidURL, haveEnoughCharacters } from '../util';

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

      <FormControl
        id="link_name"
        labelName="Link Name:"
        type="text"
        placeholder="e.g. Alphabet"
        isRequired={true}
        changeHandler={(e) => setLinkName(e.target.value)}
      />

      <FormControl
        id="link_url"
        labelName="Link Url:"
        type="text"
        placeholder="e.g. http://abc.xyz"
        isRequired={true}
        changeHandler={(e) => setLinkUrl(e.target.value)}
      />

      <SubmitButton />
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
