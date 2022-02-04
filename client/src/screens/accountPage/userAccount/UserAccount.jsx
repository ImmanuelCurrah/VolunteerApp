import { useState, useEffect } from 'react';
import { Layout } from '../../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import {
  findCurrentUserHandler,
  deleteUserHandler,
} from '../../../services/apiConfigUser';
import { Card } from 'react-bootstrap';
import classes from './UserAccount.module.css';
import DeleteButton from '../../../components/DeleteButton/DeleteButton';
import { toast } from 'react-toastify';

export default function Account() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');

  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');
  const token = localStorage.getItem('userToken');

  //removing tokens from local storage when account is deleted
  const logoutHandler = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userToken');
  };

  const date = new Date(user.createdAt).toDateString();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await findCurrentUserHandler(token, userName);

      setUserId(user.data.data._id);
      setUser(user.data.data);
    };
    fetchUser();
  }, []);

  // delete user account
  const handleUserDelete = async () => {
    await deleteUserHandler(userId);

    toast.success('Deleting Record');

    logoutHandler();
    navigate('/');
  };

  return (
    <Layout>
      <div className={classes.user}>
        <h2>Account Overview</h2>
        <div className={classes.accountContainer}>
          <Card>
            <Card.Body>
              <Card.Title>{user.userName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{`${user.firstName} ${user.lastName}`}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {user.email}
              </Card.Subtitle>
              <Card.Text>{`Member since: ${date}`}</Card.Text>
              <div className={classes.accountButtons}>
                <Card.Link href="/all-posts">
                  <button type="button" className="btn btn-info">
                    See All Postings
                  </button>
                </Card.Link>
                <Card.Link href="/">
                  <button type="button" className="btn btn-info">
                    Home Page
                  </button>
                </Card.Link>
              </div>
            </Card.Body>
            <div className={classes.deleteBtn}>
              <DeleteButton delete={handleUserDelete} />
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
