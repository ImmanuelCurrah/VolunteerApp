import { Volunteer, Balloons, Beach, Desert } from "../../assets/index.js";
import HomepageAccordian from "./HomepageAccordian.jsx";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchBusinessesHandler } from "../../services/apiConfigBusiness/index.js";
import "./HomePage.css";

export default function HomePageBody() {
  const userToken = localStorage.getItem("userToken");
  const businessToken = localStorage.getItem("businessToken");
  const [featuredPost, setFeaturedPosts] = useState([]);

  useEffect(() => {

    const userToken = localStorage.getItem("userToken");
    const businessToken = localStorage.getItem("businessToken");
      
    const fetchFeaturedPosts = async () => {
      const res = await fetchBusinessesHandler(userToken || businessToken);
      setFeaturedPosts(res.data.data);
    };
    fetchFeaturedPosts();
  }, []);

  const navigate = useNavigate();


  return (
    <div className="Homepage">
      {/* header/about section */}
      <section className="homepage-top">
        <div className="homepage-header-div">
          <h2 className="homepage-header">VolunteerApp</h2>
          <div className="homepage-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe, aliquid molestias est similique obcaecati cum dolorem ea
              recusandae possimus magnam rerum autem asperiores laborum at
              placeat! Aliquam voluptas ut, ex, doloremque deserunt suscipit
              consectetur distinctio maiores rerum quidem cupiditate.
            </p>
            <div className="link-div">
              {/* Toggling the login/signup accordian if there is a token or not */}
              {!userToken && !businessToken && <HomepageAccordian />}
              {userToken || businessToken ? (
                <Link to="/all-posts">See Available Events!</Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className="homepage-img">
          <img src={Volunteer} alt="volunteer" />
        </div>
      </section>

      {/* featured volunteer events section */}
      <section className="home-featured">
        <h2 className="featured-header">Featured Volunteer Events</h2>
        <div className="featured-posts">
          {featuredPost.map((posts) => {
            return posts.posts.slice(0, 1).map((post) => {
              return (
                <div className="card text-center shadow feat-posts-card" key={post._id}>
                  <div className="overflow">
                    <div className="card-body text-dark"></div>
                    <h3>{`Hosted By: ${posts.businessName}`}</h3>
                    <h4>{posts.event}</h4>
                    <h5>{`Volunteers Needed: ${post.numberNeeded}`}</h5>
                    <h5>{post.content}</h5>
                    <button
                    onClick={() => {
                      navigate(`/comments/${posts._id}/${post._id}`);
                    }}
                    >
                      Go to Comments
                    </button>
                  </div>
                </div>
              )
            })
          })}
        </div>
      </section>
    </div>
  );
}
