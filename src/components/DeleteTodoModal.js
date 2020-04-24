import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteLink } from './../store/linkList/actions';

const EditTodoModal = ({ closeModal, link, deleteLink }) => {
  const modal = useRef();

  const overlayClickHandler = (e) => {
    if (e.target === modal.current) {
      closeModal();
    }
  };

  return (
    <div
      className="m-modal"
      role="dialog"
      ref={modal}
      onClick={overlayClickHandler}
    >
      <div className="m-modal__container">
        <h2 className="m-modal__header">Remove Link</h2>
        <div className="m-modal__body">
          <p>Do you want to remove:</p>
          <p>
            <strong>{link.text}</strong>
          </p>

          <div className="m-modal__buttonWrapper">
            <button className="a-submitBtn" onClick={() => deleteLink(link.id)}>
              OK
            </button>
            <button className="a-submitBtn" onClick={() => closeModal()}>
              CANCEL
            </button>
          </div>

          <button
            className="m-modal__closeBtn"
            aria-label="You can close dialog from here by pressing enter or space key."
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

EditTodoModal.propTypes = {};

const mapDispatchToProps = {
  deleteLink,
};

export default connect(null, mapDispatchToProps)(EditTodoModal);
