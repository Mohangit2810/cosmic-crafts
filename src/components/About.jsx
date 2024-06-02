import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* <div className="w-100 position-relative bg-cosmic-dark text-white bg-cover d-flex align-items-center">
        <div className="container-fluid px-vw-5">
          <div className="position-absolute w-100 h-50 bg-cosmic-dark bottom-0 start-0"></div>
          <div className="row d-flex align-items-center position-relative justify-content-center px-0 g-5">
            <div className="col-12 col-lg-6">
              <img
                src="images/1.jpg"
                width="2280"
                height="1732"
                alt="abstract"
                className="img-fluid position-relative rounded-5 shadow"
                data-aos="fade-up"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src="images/2.jpg"
                width="1116"
                height="1578"
                alt="abstract"
                className="img-fluid position-relative rounded-5 shadow"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src="images/3.jpg"
                width="1116"
                height="848"
                alt="abstract"
                className="img-fluid position-relative rounded-5 shadow"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div id="about" className="bg-dark">
        <div className="container px-vw-5 py-vh-5">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-7 text-lg-end" data-aos="fade-right">
              <span className="h5 text-secondary fw-lighter">What we do</span>
              <h2 className="display-4">
                At Cosmic Crafts, we thoughtfully design, skillfully craft, and
                promptly deliver our products, always striving to exceed our
                customers&#39; expectations.
              </h2>
            </div>
            <div className="col-12 col-lg-5" data-aos="fade-left">
              <h3 className="pt-5">Product Design & Strategy</h3>
              <p className="text-secondary">
                The cosmic crafts team takes a modular approach to all our
                customer&#39;s needs, and we communicate with them actively
                until we reach a final product design that they are satisfied
                with.
                <br />
                <Link
                  to="services"
                  className="link-fancy link-fancy-light me-2"
                >
                  Learn about our services
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle d-inline"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
              </p>
              <h3 className="border-top border-secondary pt-5 mt-5">
                Development & Engineering
              </h3>
              <p className="text-secondary">
                All the projects that we take up at cosmic crafts are worked
                upon by various members such that there are no flaws in our
                development process and fresh new inspiration is always welcome
                from them.
                <br />
                <Link
                  to="/services"
                  className="link-fancy link-fancy-light me-2"
                >
                  Learn about our services
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle d-inline"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
