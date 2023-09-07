import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="bg-cosmic-dark py-vh-3">
      <div className="container bg-cosmic-dark px-vw-5 py-vh-3 rounded-5 shadow">
        <div className="row gx-5">
          <div className="col-12 col-md-6">
            <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
              <div className="bg-cosmic-gray shadow rounded-5 p-0">
                <img
                  src="/images/service-flyer.jpg"
                  width="582"
                  height="327"
                  alt="abstract"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter mb-2">Flyer Design</h2>
                  <p className="pb-4 text-secondary">
                    We skillfully craft captivating flyers, blending creativity
                    and information, to deliver visually compelling and
                    effective marketing tools for our clients.
                  </p>
                  <Link to="services" className="link-fancy link-fancy-light">
                    Know more
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-transparent" data-aos="zoom-in-up">
              <div className="bg-cosmic-gray shadow rounded-5 p-0">
                <img
                  src="/images/service-menu.jpg"
                  width="582"
                  height="442"
                  alt="abstract"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter mb-2">Menu Page Design</h2>
                  <p className="pb-4 text-secondary">
                    We expertly design menu pages, harmonizing aesthetics and
                    functionality to create visually appealing and user-friendly
                    dining experiences for our clients.
                  </p>
                  <Link to="services" className="link-fancy link-fancy-light">
                    Know more
                  </Link>
                </div>
              </div>
            </div>
            <div className="card bg-transparent mt-5" data-aos="zoom-in-up">
              <div className="bg-cosmic-gray shadow rounded-5 p-0">
                <img
                  src="/images/service-logo.jpg"
                  width="582"
                  height="442"
                  alt="abstract"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter mb-2">Logo Design</h2>
                  <p className="pb-4 text-secondary">
                    In logo design, we marry creativity and branding strategy,
                    crafting distinctive and memorable symbols that encapsulate
                    our clients&#39; unique identities.
                  </p>
                  <Link to="services" className="link-fancy link-fancy-light">
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-5 pt-0 mt-5" data-aos="fade">
              <span className="h5 text-secondary fw-lighter">What we do</span>
              <h2 className="display-4" style={{ marginBottom: "1.5rem" }}>
                There is a lot we do. Here is a small sneak peek
              </h2>
              <span>
                <Link
                  to="services"
                  className="link-fancy link-fancy-light me-2"
                >
                  Tell me more
                </Link>
                <svg
                  xmlns="/images/service-poster.jpg"
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
              </span>
            </div>
            <div
              className="card bg-transparent mb-5 mt-5"
              data-aos="zoom-in-up"
            >
              <div className="bg-cosmic-gray shadow rounded-5 p-0">
                <img
                  src="/images/service-bookcover.jpg"
                  width="582"
                  height="390"
                  alt="abstract"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter mb-2">Book Cover Design</h2>
                  <p className="pb-4 text-secondary">
                    In book cover design, we merge artistic vision with
                    storytelling, creating captivating covers that entice
                    readers and encapsulate the essence of the content.
                  </p>
                  <a href="#" className="link-fancy link-fancy-light">
                    Know more
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-transparent" data-aos="zoom-in-up">
              <div className="bg-cosmic-gray shadow rounded-5 p-0">
                <img
                  src="/images/service-website.jpg"
                  width="582"
                  height="327"
                  alt="abstract"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter mb-2">
                    Website Design and Development
                  </h2>
                  <p className="pb-4 text-secondary">
                    For website design and development, we seamlessly merge
                    aesthetics and functionality, crafting user-friendly,
                    visually stunning online experiences that align with our
                    clients&#39; goals.
                  </p>
                  <a href="#" className="link-fancy link-fancy-light">
                    Know more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
