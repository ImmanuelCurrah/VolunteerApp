import { Layout } from "../../components/Layout/Layout";
import "./AboutUs.css";
import { Astros } from "../../assets/index.js";

export default function AboutUs() {
  return (
    <Layout>
      <div className="about-us">
        <h1 className="about-title">About Us</h1>
        <div className="center">
          <div className="paragraph">
            <p className="p-text">
              Hi, we are Immanuel, Kevin, and Laura. We wanted to create a
              centralized app for non profits to be able to post their events
              and find volunteers. In this app businesses can create a post to
              advertise their events and how many volunteers they need. Also,
              the VolunteerApp is a place where kind hearted people can look for
              events and activities where their volunteering is needed. We are
              committed to helping business and volunteers have a safe and
              efficient platform to connect on. We know how much non-profits
              need help and we also know how willing some people are. It can be
              difficult to find an event on a day that works for you. With our
              app this is no problem. We hope you find this helpful!
            </p>
          </div>
          <div className="astro-pic">
            <img src={Astros} alt="Three dancing astronauts" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
