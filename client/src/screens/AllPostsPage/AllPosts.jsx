import { useState, useEffect } from 'react';
import { fetchBusinessesHandler } from '../../services/apiConfigBusiness/index.js';

export default function AllPosts() {
  const [businessPosts, setBusinessPosts] = useState([]);

  useEffect(() => {
    // variable to grab token out of local storage to pass in as argument in the fetch post request
    const token = localStorage.getItem('userToken');

    const fetchBizPosts = async () => {
      const res = await fetchBusinessesHandler(`${token}`);
      console.log(res.data.data);
      setBusinessPosts(res.data.data);
    };
    fetchBizPosts();
  }, []);

  const renderAllPosts = (post, index) => {
    return (
      <div className="card text-center shadow" key={index}>
        <div className="overflow">
          <div className="card-body text-dark">
            <h3>{post.businessName}</h3>
            <h5>{post.email}</h5>
            <p className="post-para">{post.posts}Post Here</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>All Posts</h3>
      <div className="all-posts-div">{businessPosts.map(renderAllPosts)}</div>
    </div>
  );
}
