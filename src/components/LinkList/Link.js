import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { upVote, downVote } from '../../store/linkList/actions';
import DeleteTodoModal from '../modals/DeleteLinkModal';

export const Link = ({ link, upVote, downVote }) => {
  const [isModelOpening, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="m-link" data-test>
      <div className="m-link__point">
        <h1>{link.points}</h1>
        <p>POINTS</p>
      </div>
      <div className="m-link__desc">
        <h3 className="m-link__text">{link.text}</h3>
        <p className="m-link__url">({link.url})</p>

        <div className="m-link__buttonList">
          <button
            className="m-link__button"
            data-upvote-test
            onClick={() => upVote(link.id)}
          >
            &uarr; Up Vote
          </button>
          <button
            className="m-link__button"
            data-downvote-test
            onClick={() => downVote(link.id)}
          >
            &darr; Down Vote
          </button>
        </div>
      </div>

      <button
        className="m-link__deleteButton"
        data-delete-test
        onClick={() => setModal(true)}
      >
        X
      </button>

      {isModelOpening && (
        <DeleteTodoModal closeModal={closeModal} link={link} />
      )}
    </div>
  );
};

Link.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  upVote,
  downVote,
};

export default connect(null, mapDispatchToProps)(Link);
