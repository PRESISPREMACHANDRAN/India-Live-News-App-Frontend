import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="#">
            India News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Add News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/search"
                >
                  Search News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/viewAll"
                >
                  View All News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header