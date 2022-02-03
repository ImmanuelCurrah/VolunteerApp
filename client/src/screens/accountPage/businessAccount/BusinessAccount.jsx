import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout/Layout";
import { findCurrentBusinessByNameHandler } from "../../../services/apiConfigBusiness";
import { Card } from "react-bootstrap";
import classes from "./BusinessAccount.module.css";

export default function Account() {
  const [business, setBusiness] = useState({});
  const businessName = localStorage.getItem("businessName");
  const token = localStorage.getItem("businessToken");
  console.log(businessName);
  console.log(token);
  console.log(business);
  // const date = new Date(business.createdAt).toDateString();

  useEffect(() => {
    const fetchUser = async () => {
      const business = await findCurrentBusinessByNameHandler(
        token,
        businessName
      );
      setBusiness(business.data.data);
    };
    fetchUser();
  }, []);

  return (
    <Layout>
      <div className={classes.business}>
        <h2>Account Overview</h2>
        {/* <Card style={{ width: "18rem" }}>
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
        </Card> */}
      </div>
    </Layout>
  );
}
