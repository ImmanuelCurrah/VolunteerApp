import { useState, useEffect } from 'react';
import { fetchBusinessesHandler } from '../../services/apiConfigBusiness/index.js';

export default function AllPosts() {
  const [businessPosts, setBusinessPosts] = useState([]);

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchBizPosts = async () => {
      const res = await fetchBusinessesHandler(`${token}`);
      console.log(res.data);
    };
    fetchBizPosts();
  }, []);

  return (
    <div>
      <h3>All Posts</h3>
    </div>
  );
}
