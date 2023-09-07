function Stats() {
  return (
    <div
      className="container-fluid px-vw-5 position-relative bg-black"
      data-aos="fade"
    >
      <div className="position-absolute w-100 h-50 bg-black top-0 start-0"></div>
      <div
        className="position-relative py-vh-5 bg-cover bg-center rounded-5"
        style={{ backgroundImage: 'url("/images/hero.png")' }}
      >
        <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
          <div className="row d-flex align-items-center">
            <div
              className="col-6 d-flex align-items-center bg-dark shadow rounded-5 p-0"
              data-aos="zoom-in-up"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-12">
                  <img
                    src="images/team/gokulraja.jpg"
                    width="684"
                    height="457"
                    alt="our CEO with some nice numbers"
                    className="img-fluid rounded-5"
                    loading="lazy"
                  />
                </div>
                <div className="col-12 col-lg-10 col-xl-8 text-center my-5">
                  <p className="lead border-bottom pb-4 border-secondary">
                    &#34;A Student Community Based Designing Firm Startup Yahh,
                    that&#39;s the Idea ! The Idea is To bring together a group
                    of people, to see if they/we could become more, to be
                    Better. So, they would work together to bring the best out
                    of everyone! We work together to design, create and produce
                    work that we are proud of for folks that we believe in.&#34;
                  </p>
                  <p className="text-secondary text-center">Gokul Raja, CEO</p>
                </div>
              </div>
            </div>
            <div className="col-5 offset-1">
              <span className="h5 text-secondary fw-lighter">The numbers</span>
              <h2 className="display-huge fw-bolder" data-aos="zoom-in-left">
                10+
              </h2>
              <p className="h4 fw-lighter text-secondary">
                The number of projects we done so far.
              </p>
              <h2
                className="display-huge fw-bolder border-top border-secondary pt-5 mt-5"
                data-aos="zoom-in-left"
              >
                8+
              </h2>
              <p className="h4 fw-lighter text-secondary">
                The number of members working in our company.
              </p>
              <h2
                className="display-huge fw-bolder border-top border-secondary pt-5 mt-5"
                data-aos="zoom-in-left"
              >
                100%
              </h2>
              <p className="h4 fw-lighter text-secondary">
                Percentage of satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
