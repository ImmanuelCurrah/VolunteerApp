import { Volunteer, HelpWanted } from '../../assets/index.js';
import HomepageAccordian from './HomepageAccordian.jsx';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchBusinessesHandler } from '../../services/apiConfigBusiness/index.js';
import './HomePage.css';

export default function HomePageBody() {
  const userToken = localStorage.getItem('userToken');
  const businessToken = localStorage.getItem('businessToken');
  const [featuredPost, setFeaturedPosts] = useState([]);
  const [showGuestLinks, setShowGuestLinks] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const businessToken = localStorage.getItem('businessToken');

    const fetchFeaturedPosts = async () => {
      const res = await fetchBusinessesHandler(userToken || businessToken);
      setFeaturedPosts(res.data.data);
    };
    fetchFeaturedPosts();
  }, []);

  const navigate = useNavigate();

  // show guest login links
  const guestLinks = () => {
    setShowGuestLinks((prevShowGuestLinks) => !prevShowGuestLinks);
  };

  return (
    <div className="Homepage">
      {/* header/about section */}
      <section className="homepage-top">
        <div className="homepage-header-div">
          <h2 className="homepage-header">VolunteerApp</h2>
          <div className="homepage-para">
            <p>
              VolunteerApp is a great space that has been developed to give
              businesses and volunteers a safe space to connect. We know how
              much a non-profit can give to a community. We also know how hard
              it can be to connect with organizations in the area. This is a
              platform that non-profits can post events they are holding and
              then allows the volunteers to connect with them through this app.
              Happy volunteering!
            </p>
            <div className="link-div">
              {/* Toggling the login/signup accordian if there is a token or not */}
              {!userToken && !businessToken && (
                <>
                  <HomepageAccordian />
                  <button className="guest-btn" onClick={guestLinks}>
                    Continue as Guest
                  </button>
                </>
              )}
              {userToken || businessToken ? (
                <Link to="/all-posts">See Available Events!</Link>
              ) : null}

              {showGuestLinks && (
                <div className="continueAsGuest">
                  <Link to="/login-business"> Business Guest</Link>
                  <br />
                  <Link to="/login-users"> Volunteer Guest </Link>
                </div>
              )}
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
          {userToken || businessToken ? (
            featuredPost.map((posts) => {
              return posts.posts.slice(0, 1).map((post) => {
                return (
                  <div
                    className="card text-center shadow feat-posts-card"
                    key={post._id}
                  >
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
                );
              });
            })
          ) : (
            <>
              <h1>Sign up or Log in to see Featured Events!</h1>
              <img src={HelpWanted} alt="help wanted sign" />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
