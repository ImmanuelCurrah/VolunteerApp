import { useState, useEffect } from 'react';
import { fetchBusinessesHandler } from '../../services/apiConfigBusiness/index.js';
import { Layout } from '../../components/Layout/Layout.jsx';
import './AllPosts.css';

export default function AllPosts() {
  const [businessPosts, setBusinessPosts] = useState([]);

  useEffect(() => {
    // variable to grab token out of local storage to pass in as argument in the fetch post request
    const userToken = localStorage.getItem('userToken');
    const businessToken = localStorage.getItem('businessToken');

    const fetchBizPosts = async () => {
      const res = await fetchBusinessesHandler(userToken || businessToken);
      console.log(res.data.data);
      setBusinessPosts(res.data.data);
    };
    fetchBizPosts();
  }, []);

  // delete post

  if (!businessPosts) {
    return 'Loading...';
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
                  <div className="card-body text-dark"></div>
                  <h2>{`Hosted By: ${posts.businessName}`}</h2>
                  <h3>{post.event}</h3>
                  <h4>{`Volunteers Needed: ${post.numberNeeded}`}</h4>
                  <h4>{post.content}</h4>
                  <button>Sign Up!</button>
                </div>
              </div>
            );
          });
        })}
      </div>
    </Layout>
  );
}
