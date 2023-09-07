import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import Team from "../components/Team";

function AboutUs() {
  return (
    <body
      className="bg-cosmic-dark text-white mt-0"
      data-bs-spy="scroll"
      data-bs-target="#navScroll"
    >
      <PageNav />

      <main>
        <div className="container service-mobile">
          <div className="row d-flex justify-content-center py-vh-5 pb-0">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-1 fw-bold">
                    Meet Our
                    {/* <span className="fs-4"> our</span> */}
                    <br />
                    Creative Team
                  </h1>
                  <p
                    className="lead border-top pt-5 mt-5 mb-5"
                    data-aos="fade-up"
                  >
                    Welcome to Cosmic Crafts, your creative ally in the world of
                    design. With a rich tapestry of services, we offer a
                    one-stop solution for all your design needs. From crafting
                    captivating logos that tell your brand&#39;s story to
                    developing user-centric websites that leave a lasting
                    impression, we bring your ideas to life. Our commitment to
                    innovation and excellence drives us to create visual
                    masterpieces that resonate with your audience. Join us on a
                    journey where your success is our ultimate inspiration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Team />
          <div
            className="row d-flex align-items-start justify-content-center py-vh-3 text-muted"
            data-aos="fade"
          >
            <div className="col-12 col-lg-10 col-xl-9">
              <div className="p-5 small bg-gray-900">
                <p>
                  *Ready to embark on a design journey with us? If you&#39;re
                  interested in our services, we&#39;d love to hear from you.
                  Contact us for more information and let&#39; create something
                  extraordinary together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default AboutUs;
