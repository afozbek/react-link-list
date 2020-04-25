import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteLink } from '../../store/linkList/actions';
import { notify } from '../../store/notification/actions';

const DeleteTodoModal = ({ closeModal, link, deleteLink, notify }) => {
  const modal = useRef();

  const overlayClickHandler = (e) => {
    if (e.target === modal.current) {
      closeModal();
    }
  };

  const deleteLinkHandler = () => {
    deleteLink(link.id);

    const notifyText = link.text + ' removed.';
    notify(notifyText);
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
            <button className="a-submitBtn" onClick={deleteLinkHandler}>
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

DeleteTodoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired,
  deleteLink: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteLink,
  notify,
};

export default connect(null, mapDispatchToProps)(DeleteTodoModal);
