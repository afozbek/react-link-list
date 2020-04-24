import React from 'react';
import { connect } from 'react-redux';

import { upVote, downVote, deleteLink } from '../store/linkList/actions';

const Link = (props) => {
  console.log(props);
  return (
    <div className="m-link">
      <div className="m-link__point">
        <p>{props.points}</p>
        <p>POINTS</p>
      </div>
      <div className="m-link__desc">
        <h3 className="m-link__text">{props.text}</h3>
        <p className="m-link__url">({props.url})</p>

        <div className="m-link__buttonList">
          <button
            className="m-link__button"
            onClick={() => props.upVote(props.id)}
          >
            &uarr; Up Vote
          </button>
          <button
            className="m-link__button"
            onClick={() => props.downVote(props.id)}
          >
            &darr; Down Vote
          </button>
        </div>
      </div>

      <button
        className="m-link__deleteButton"
        onClick={() => props.deleteLink(props.id)}
      >
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  upVote,
  downVote,
  deleteLink,
};

export default connect(null, mapDispatchToProps)(Link);
