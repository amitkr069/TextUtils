import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// github me deploy krne ke liye link wla saara hta rhe h

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}
      >
        {" "}
        {/* light mode and dark mode ke liye props lagaye */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                enable {props.text} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
