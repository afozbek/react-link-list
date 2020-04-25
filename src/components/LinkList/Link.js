import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { upVote, downVote } from '../../store/linkList/actions';
import DeleteTodoModal from '../modals/DeleteLinkModal';

const Link = ({ link, upVote, downVote }) => {
  const [isModelOpening, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

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

      <button className="m-link__deleteButton" onClick={() => setModal(true)}>
        X
      </button>

      {isModelOpening ? (
        <DeleteTodoModal closeModal={closeModal} link={link} />
      ) : null}
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
