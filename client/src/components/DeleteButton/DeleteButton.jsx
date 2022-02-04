import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import { deleteBusinessHandler } from '../../services/apiConfigBusiness/index.js';

export default function DeleteButton(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userToken');
    localStorage.removeItem('businessName');
    localStorage.removeItem('businessToken');
  };

  // delete business account request
  const handleBusinessDelete = async () => {
    await deleteBusinessHandler(props.businessId);

    toast('Deleting Record');
    logoutHandler();
    navigate('/');
  };

  // showing or closing modal function
  const handleModal = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <Button variant="danger" onClick={() => handleModal()}>
        Delete Account
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
          <Button
            variant="danger"
            onClick={() => {
              handleBusinessDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
