import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout/Layout";
import { findCurrentBusinessByNameHandler } from "../../../services/apiConfigBusiness";
import { Card } from "react-bootstrap";
import classes from "./BusinessAccount.module.css";

export default function Account() {
  const [business, setBusiness] = useState({});
  const businessName = localStorage.getItem("businessName");
  const token = localStorage.getItem("businessToken");

  const date = new Date(business.createdAt).toDateString();

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
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{business.businessName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {business.email}
            </Card.Subtitle>
            <Card.Text>{`Member since: ${date}`}</Card.Text>
            <Card.Link href="/create-post-business">Create a Post</Card.Link>
            <Card.Link href="/all-posts">See listings</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
}
