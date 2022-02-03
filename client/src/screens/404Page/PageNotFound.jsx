import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="not-found">
      <img
        src="https://media.giphy.com/media/PIBuZutkhuKqV09TEf/giphy.gif"
        alt="404 page not found error"
      />
    </div>
  );
}
