import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import { deleteBusinessHandler } from '../../services/apiConfigBusiness/index,js';

export default function DeleteButton() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    toast.success('Deleting Record');
    navigate('/all-posts');
  };

  return <div></div>;
}
