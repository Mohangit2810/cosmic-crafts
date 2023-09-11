import { useState } from "react";
import { NavLink } from "react-router-dom";

function PageNav() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      id="navScroll"
      className={
        color
          ? "navbar navbar-dark bg-black fixed-top px-vw-5 d-block"
          : "navbar navbar-dark  fixed-top px-vw-5 d-block"
      }
      tabIndex="0"
    >
      <div className="container">
        <NavLink
          className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center space-x-10"
          to="/"
        >
          <span className="ms-md-1 mt-1 fw-bolder me-md-5 logo-bold header-logo">
            Cosmic crafts
          </span>
        </NavLink>

        <ul
          className="navbar-nav  mx-auto mb-2 mb-lg-0 list-group gap-x-20 list-group-horizontal "
          style={{ gap: "20px" }}
        >
          <li className="nav-item">
            <NavLink className="nav-link fs-5" to="/" aria-label="Homepage">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link fs-5"
              to="/aboutus"
              aria-label="A sample content page"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link fs-5"
              to="/services"
              aria-label="A system message page"
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link fs-5"
              to="/contactus"
              aria-label="A system message page"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* <a
      href="https://templatedeck.com/klar-html-template.html"
      aria-label="Download this template"
      className="btn btn-outline-light"
    >
      <small>Download Template</small>
    </a> */}
      </div>
    </nav>
  );
}

export default PageNav;
