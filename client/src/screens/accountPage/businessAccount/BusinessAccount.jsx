import { useState, useEffect } from 'react';
import { Layout } from '../../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import {
  findCurrentBusinessByNameHandler,
  deleteBusinessHandler,
} from '../../../services/apiConfigBusiness';
import { Card } from 'react-bootstrap';
import classes from './BusinessAccount.module.css';
import DeleteButton from '../../../components/DeleteButton/DeleteButton';
import { toast } from 'react-toastify';

export default function Account() {
  const [business, setBusiness] = useState({});
  const [businessId, setBusinessId] = useState('');

  const navigate = useNavigate();

  const businessName = localStorage.getItem('businessName');
  const token = localStorage.getItem('businessToken');

  //removing tokens from local storage when account is deleted
  const logoutHandler = () => {
    localStorage.removeItem('businessName');
    localStorage.removeItem('businessToken');
  };

  const date = new Date(business.createdAt).toDateString();

  useEffect(() => {
    const fetchUser = async () => {
      const business = await findCurrentBusinessByNameHandler(
        token,
        businessName
      );
      setBusinessId(business.data.data._id);
      setBusiness(business.data.data);
    };
    fetchUser();
  }, []);

  // delete business account request
  const handleBusinessDelete = async () => {
    await deleteBusinessHandler(businessId);

    toast.success('Deleting Record');

    logoutHandler();
    navigate('/');
  };

  return (
    <Layout>
      <div className={classes.business}>
        <h2>Account Overview</h2>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{business.businessName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {business.email}
            </Card.Subtitle>
            <Card.Text>{`Member since: ${date}`}</Card.Text>
            <Card.Link href="/create-post-business">Create a Post</Card.Link>
            <Card.Link href="/all-posts">See listings</Card.Link>
          </Card.Body>

          <DeleteButton delete={handleBusinessDelete} />
        </Card>
      </div>
    </Layout>
  );
}
