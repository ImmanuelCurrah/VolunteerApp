import { useState, useEffect } from "react";
import { fetchBusinessesHandler } from "../../services/apiConfigBusiness/index.js";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./AllPosts.css";

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

  if (!businessPosts) {
    return "Loading...";
  }

  // const renderAllPosts = (post, index) => {
  //   return (
  //     <div className="card text-center shadow all-posts-card" key={index}>
  //       <div className="overflow">
  //         <div className="card-body text-dark">
  //           <h3>{post.businessName}</h3>
  //           <h5>{post.email}</h5>

  //           {post.posts.map((post, index) => {
  //             return (
  //               <div key={index}>
  //                 <h5>{post.event}</h5>
  //                 <h6>{post.numberNeeded}</h6>
  //                 <p>{post.content}</p>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

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
        {/* <div className="all-posts-div">{businessPosts.map(renderAllPosts)}</div> */}
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
