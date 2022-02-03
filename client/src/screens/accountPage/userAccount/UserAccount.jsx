import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout/Layout";
import { findCurrentUserHandler } from "../../../services/apiConfigUser";
import { Card } from "react-bootstrap";
import classes from "./UserAccount.module.css";

export default function Account() {
  const [user, setUser] = useState({});
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("userToken");
  const date = new Date(user.createdAt).toDateString();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await findCurrentUserHandler(token, userName);
      setUser(user.data.data);
    };
    fetchUser();
  }, []);

  return (
    <Layout>
      <div className={classes.user}>
        <h2>Account Overview</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.userName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`${user.firstName} ${user.lastName}`}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {user.email}
            </Card.Subtitle>
            <Card.Text>{`Member since: ${date}`}</Card.Text>
            <Card.Link href="/all-posts">Click to see postings</Card.Link>
            <Card.Link href="/">Home Page</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
}
