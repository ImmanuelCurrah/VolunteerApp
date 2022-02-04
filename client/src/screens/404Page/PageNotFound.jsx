import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <Layout>
      <div className="not-found">
        <div className="not-found-header">
          <h1 className="four-oh-four-header">
            We cannot seem to find the page you are looking for.
          </h1>
          <Link to="/">
            <button className="btn btn-light button-error-page">
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
