import React from 'react';
import { connect } from 'react-redux';

import { upVote, downVote, deleteLink } from '../store/linkList/actions';

const Link = ({ link, deleteLink, upVote, downVote }) => {
  return (
    <div className="m-link">
      <div className="m-link__point">
        <p>{link.points}</p>
        <p>POINTS</p>
      </div>
      <div className="m-link__desc">
        <h3 className="m-link__text">{link.text}</h3>
        <p className="m-link__url">({link.url})</p>

        <div className="m-link__buttonList">
          <button className="m-link__button" onClick={() => upVote(link.id)}>
            &uarr; Up Vote
          </button>
          <button className="m-link__button" onClick={() => downVote(link.id)}>
            &darr; Down Vote
          </button>
        </div>
      </div>

      <button
        className="m-link__deleteButton"
        onClick={() => deleteLink(link.id)}
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
