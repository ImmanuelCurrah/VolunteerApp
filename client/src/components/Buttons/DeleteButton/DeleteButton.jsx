import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DeleteButton(props) {
  const [show, setShow] = useState(false);

  // showing or closing modal function
  const handleModal = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <Button variant="danger" onClick={() => handleModal()}>
        <span>
          <FontAwesomeIcon icon={faTrash} size="sm" />
          <span> Delete</span>
        </span>
      </Button>

      <Modal
        show={show}
        onHide={() => {
          handleModal();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-danger">
            Are you sure you want to permanently delete this record?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="default"
            onClick={() => {
              handleModal();
            }}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={props.delete}>
            <FontAwesomeIcon icon={faTrash} size="sm" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
