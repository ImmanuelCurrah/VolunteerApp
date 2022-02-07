import { Link } from 'react-router-dom';
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
          <Link to="https://github.com/ImmanuelCurrah">
            <img src={Github} alt="github" />
          </Link>
          <h5>Immanuel</h5>
        </div>
        <div className="footer-laura">
          <Link to="https://github.com/laurabow">
            <img src={Github} alt="github" />
          </Link>
          <h5>Laura</h5>
        </div>
        <div className="footer-kevin">
          <Link to="https://github.com/Kevin-c-miller">
            <img src={Github} alt="github" />
          </Link>
          <h5>Kevin</h5>
        </div>
      </div>
    </div>
  );
}
