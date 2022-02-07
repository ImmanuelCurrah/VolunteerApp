import { useState, useEffect } from 'react';
import {
  fetchBusinessesHandler,
  deleteBusinessPost,
} from '../../services/apiConfigBusiness/index.js';
import DeletePostModal from './DeletePostModal.jsx';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout.jsx';
import { toast } from 'react-toastify';
import './AllPosts.css';

export default function AllPosts() {
  const [businessPosts, setBusinessPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // variable to grab token out of local storage to pass in as argument in the fetch post request
    const userToken = localStorage.getItem('userToken');
    const businessToken = localStorage.getItem('businessToken');

    // get business posts
    const fetchBizPosts = async () => {
      const res = await fetchBusinessesHandler(userToken || businessToken);

      setBusinessPosts(res.data.data);
    };
    fetchBizPosts();
  }, []);

  // delete business post
  const deletePost = async (id, postId) => {
    await deleteBusinessPost(id, postId);

    toast.success('Post Deleted');
    window.location.reload();
  };

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
                  <div className="card-body text-dark delete-post-btn">
                    <DeletePostModal
                      deletePost={deletePost}
                      id={posts._id}
                      postId={post._id}
                    />
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
