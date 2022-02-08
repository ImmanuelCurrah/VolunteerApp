import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  findCurrentUserHandler,
  deleteUserHandler,
} from "../../../services/apiConfigUser";
import "../../../components/Buttons/ButtonStyling/ButtonStyling.css";
import { Card } from "react-bootstrap";
import classes from "./UserAccount.module.css";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";
import { toast } from "react-toastify";

export default function Account() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("userToken");

  //removing tokens from local storage when account is deleted
  const logoutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");
  };

  const date = new Date(user.createdAt).toDateString();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await findCurrentUserHandler(token, userName);
      setUserId(user.data.data._id);
      setUser(user.data.data);
    };
    fetchUser();
    // eslint-disable-next-line
  }, []);

  // delete user account
  const handleUserDelete = async () => {
    await deleteUserHandler(userId);

    toast.success("Deleting Record");

    logoutHandler();
    navigate("/");
  };

  return (
    <Layout>
      <div className={classes.user}>
        <h2>Account Overview</h2>
        <div>
          <Card.Link>
            <div
              onClick={() => {
                navigate("/edit");
              }}
            >
              Edit
            </div>
          </Card.Link>
        </div>
        <Card className={classes.card}>
          <Card.Body>
            <Card.Title>
              <span className={classes.titles}>User Name</span> <br />
              {user.userName}
            </Card.Title>
            <Card.Title className="mb-2 text-muted">
              <span className={classes.titles}>Name</span> <br />
              {`${user.firstName} ${user.lastName}`}
            </Card.Title>
            <Card.Title className="mb-2 text-muted">
              <span className={classes.titles}>Email</span> <br />
              {user.email}
            </Card.Title>
            <Card.Text>
              <span className={classes.titles}>Member Since</span> <br />
              {`${date}`}
            </Card.Text>
            <div className={classes.accountButtons}>
              <Card.Link href="/all-posts">
                <button type="button" className="btn btn-info acct-btn">
                  See All Postings
                </button>
              </Card.Link>
              <Card.Link href="/">
                <button type="button" className="btn btn-info acct-btn">
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
    </Layout>
  );
}
