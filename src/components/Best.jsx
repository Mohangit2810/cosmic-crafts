function Best() {
  return (
    <div className="bg-cosmic-gray position-relative">
      <div className="container px-vw-5 py-vh-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-7">
            <img
              className="img-fluid rounded-5 mb-n5 shadow"
              src="/images/show-case-2.jpg"
              width="512"
              height="512"
              alt="a nice person"
              loading="lazy"
              data-aos="zoom-in-right"
            />
            <img
              className="img-fluid rounded-5 ms-5 mb-n5 shadow"
              src="/images/show-case-1.jpg"
              width="512"
              height="512"
              alt="another nice person"
              loading="lazy"
              data-aos="zoom-in-up"
            />
          </div>
          <div
            className="col-12 col-lg-5 bg-cosmic-gray rounded-5 py-5"
            data-aos="fade"
          >
            <span className="h5 text-secondary fw-lighter">
              Our best Projects
            </span>
            <h2 className="display-4">
              Cosmic Crafts presents exemplary projects that epitomize our
              dedication and client satisfaction.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Best;
