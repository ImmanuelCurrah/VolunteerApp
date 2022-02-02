import React from 'react';
import { Volunteer, Balloons, Beach, Desert } from '../../assets/index.js';
import HomepageAccordian from './HomepageAccordian.jsx';
import './HomePage.css';

export default function HomePageBody() {
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
              <HomepageAccordian />
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
          <h5>Placeholder Event Name</h5>
          <img src={Balloons} alt="placeholder" />
          <h5>Placeholder Event Name</h5>
          <img src={Beach} alt="placeholder" />
          <h5>Placeholder Event Name</h5>
          <img src={Desert} alt="placeholder" />
        </div>
      </section>
    </div>
  );
}
