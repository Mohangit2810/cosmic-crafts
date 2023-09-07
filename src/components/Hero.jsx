function Hero() {
  return (
    <div
      id="hero"
      className="w-100 overflow-hidden position-relative bg-image bg-cosmic text-white"
      style={{
        backgroundImage: `url(/images/hero.png)`,
        backgroundSize: "cover",
      }}
      data-aos="fade"
    >
      <div className="position-absolute w-100 h-100 bg-black opacity-50 top-0 start-0"></div>
      <div className="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
        <div className="row d-flex align-items-center justify-content-center py-vh-5">
          <div className="col-12 col-xl-10">
            <span
              className="h5 text-secondary fw-lighter logo-bold "
              style={{ fontSize: "50px" }}
            >
              Cosmic Crafts
            </span>
            <h1 className="display-huge mt-3 mb-3 lh-1">
              We do Awesome stuff for cool people
            </h1>
          </div>
          <div className="col-12 col-xl-8 mb-3">
            <p className="lead text-secondary">
              We at Cosmic Crafts prioritize creating and designing products
              which resonate with the expectations of our customers. Fulfilling
              their expectations is our drive and we strive for improvement in
              all our projects.
            </p>
          </div>
          <div className="col-12 text-center">
            <a href="#contact" className="btn btn-xl btn-light">
              Contact us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right d-inline"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
