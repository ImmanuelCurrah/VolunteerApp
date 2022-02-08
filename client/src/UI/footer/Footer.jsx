import { Github } from '../../assets/index.js';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <h5>Created by{':'}</h5>
      </div>
      <div className="footer-links">
        <div className="footer-immanuel">
          <a
            href="https://github.com/ImmanuelCurrah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <h5>Immanuel</h5>
        </div>
        <div className="footer-laura">
          <a
            href="https://github.com/laurabow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <h5>Laura</h5>
        </div>
        <div className="footer-kevin">
          <a
            href="https://github.com/Kevin-c-miller"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <h5>Kevin</h5>
        </div>
      </div>
    </div>
  );
}
