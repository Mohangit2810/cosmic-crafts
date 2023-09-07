// import Header from "../components/Header";
import Footer from "../components/Footer";
// import Contact from "../components/Contact";
import { NavLink } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <nav
        id="navScroll"
        className="navbar navbar-dark bg-black fixed-top px-vw-5 d-block"
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
              <a
                className="nav-link fs-5"
                href="/#about"
                aria-label="A sample content page"
              >
                About
              </a>
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
        </div>
      </nav>
      <div
        id="contact"
        className="d-flex h-100 w-100 bg-black text-white contact-mobile"
        data-bs-spy="scroll"
        data-bs-target="#navScroll"
        // style={{ marginTop: "50px" }}
      >
        <div className="h-100 container-fluid">
          <div className="h-80 row d-flex align-items-stretch">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 d-flex align-items-start flex-column px-vw-5">
              <div className="mb-auto col-12">
                <h1>Contact Us</h1>

                <form
                  className="row"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="d5b7da77-005d-4e53-ac3f-d2d2deb981a0"
                  />
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg bg-gray-800 border-dark"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-gray-800 border-dark"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        We`&#39;`ll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="form-control form-control-lg bg-gray-800 border-dark"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-white btn-xl mb-4  bg-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-6 col-xl-7 gradient"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
