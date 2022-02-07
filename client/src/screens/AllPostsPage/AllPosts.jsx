<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { fetchBusinessesHandler } from '../../services/apiConfigBusiness/index.js';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout.jsx';
import { Button } from 'react-bootstrap';
import './AllPosts.css';
=======
import { useState, useEffect } from "react";
import { fetchBusinessesHandler } from "../../services/apiConfigBusiness/index.js";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./AllPosts.css";
import { useNavigate } from "react-router-dom";
>>>>>>> de7bdbea2a184816aab1881b303e2496b3cd3eea

export default function AllPosts() {
  const [businessPosts, setBusinessPosts] = useState([]);

  useEffect(() => {
    // variable to grab token out of local storage to pass in as argument in the fetch post request
    const userToken = localStorage.getItem("userToken");
    const businessToken = localStorage.getItem("businessToken");

    const fetchBizPosts = async () => {
      const res = await fetchBusinessesHandler(userToken || businessToken);
      setBusinessPosts(res.data.data);
    };
    fetchBizPosts();
  }, []);

  const navigate = useNavigate();

  if (!businessPosts) {
    return "Loading...";
  }

  return (
    <Layout>
      <div className="all-posts-container">
        <div className="allposts-headers">
          <h2>Upcoming Events</h2>
          <h6>that are looking for volunteers!</h6>
        </div>
        {businessPosts.map((posts) => {
          return posts.posts.map((post) => {
            return (
              <div
                className="card text-center shadow all-posts-card"
                key={post._id}
              >
                <div className="overflow">
                  <div className="card-body text-dark delete-post-btn">
                    <Button variant="danger">
                      <i class="bi bi-trash">Post</i>
                    </Button>
                  </div>
                  <h2>{`Hosted By: ${posts.businessName}`}</h2>
                  <h3>{post.event}</h3>
                  <h4>{`Volunteers Needed: ${post.numberNeeded}`}</h4>
                  <h4>{post.content}</h4>
                  <button
                    onClick={() => {
                      navigate(`/comments/${posts._id}/${post._id}`);
                    }}
                  >
                    Go to Comments
                  </button>
                </div>
              </div>
            );
          });
        })}
      </div>
    </Layout>
  );
}
