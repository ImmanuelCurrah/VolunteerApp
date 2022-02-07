import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  findCurrentBusinessByNameHandler,
  deleteBusinessHandler,
} from "../../../services/apiConfigBusiness";
import { Card } from "react-bootstrap";
import classes from "./BusinessAccount.module.css";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";
import { toast } from "react-toastify";

export default function Account() {
  const [business, setBusiness] = useState({});
  const [businessId, setBusinessId] = useState("");

  const navigate = useNavigate();

  const businessName = localStorage.getItem("businessName");
  const token = localStorage.getItem("businessToken");

  //removing tokens from local storage when account is deleted
  const logoutHandler = () => {
    localStorage.removeItem("businessName");
    localStorage.removeItem("businessToken");
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
    // eslint-disable-next-line
  }, []);

  // delete business account request
  const handleBusinessDelete = async () => {
    await deleteBusinessHandler(businessId);

    toast.success("Deleting Record");

    logoutHandler();
    navigate("/");
  };

  return (
    <Layout>
      <div className={classes.business}>
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
              <span className={classes.titles}>Name of Business</span> <br />
              {business.businessName}
            </Card.Title>
            <Card.Title className="mb-2 text-muted">
              <span className={classes.titles}>Email</span> <br />
              {business.email}
            </Card.Title>
            <Card.Text>
              <span className={classes.titles}>Member since</span>
              <br />
              {`${date}`}
            </Card.Text>
            <div className={classes.accountButtons}>
              <Card.Link href="/create-post-business">
                <button type="button" className="btn btn-info acct-btn">
                  Create a Post
                </button>
              </Card.Link>
              <Card.Link href="/all-posts">
                <button type="button" className="btn btn-info acct-btn">
                  See Listings
                </button>
              </Card.Link>
            </div>
          </Card.Body>
          <div className={classes.deleteBtn}>
            <DeleteButton delete={handleBusinessDelete} />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
