import { Github, Linkedin } from '../../assets/index.js';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="footer-header">Created by:</h5>
          </div>
          <div className="footer-links">
            <div className="footer-immanuel">
              <div className="header-name">
                <h5>Immanuel Currah</h5>
              </div>
              <div className="social">
                <a
                  href="https://github.com/ImmanuelCurrah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="github" />
                </a>

                <a
                  href="https://www.linkedin.com/in/immanuel-currah-647420220/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="footer-laura">
              <div className="header-name">
                <h5>Laura Kappa Bowman</h5>
              </div>
              <div className="social">
                <a
                  href="https://github.com/laurabow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="github" />
                </a>

                <a
                  href="https://www.linkedin.com/in/laura-kappa-bowman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="footer-kevin">
              <div className="header-name">
                <h5>Kevin Miller</h5>
              </div>
              <div className="social">
                <a
                  href="https://github.com/Kevin-c-miller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="github" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kevin-c-miller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} VolunteerApp
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
