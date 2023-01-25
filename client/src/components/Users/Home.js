import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const cookies = new Cookies();
  let history = useNavigate();
  const cookieset = cookies.get("jwtoken");
  useEffect(() => {
    loginverfy();
  }, []);

  const loginverfy = () => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  };
  // if (!cookieset) {
  //   history("/login");
  // }
  const handleLogout = async (e) => {
    cookies.remove("jwtoken");
    localStorage.removeItem("token");
    history("/login")
  };

  return (
    <>
      <div>
        <nav className="site-nav js-site-navbar mb-5 site-navbar-target">
          <div className="container">
            <div className="site-navigation text-center">
              <a
                href="/home"
                className="d-block text-center float-left logo"
              >
                I
              </a>
              <ul className="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
                <li className="active">
                  <a href="/home" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="nav-link">
                    User List
                  </a>
                </li>
                <li>
                  <a href="/register" className="nav-link">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/addbook" className="nav-link">
                    ADD BOOKS
                  </a>
                </li>
                <li>
                  <a href="/viewbook" className="nav-link">
                    View Books
                  </a>
                </li>
                <li>
                  <a className="nav-link" id="logout" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
              <a
                href="/home"
                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light d-lg-none"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      <body
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="100"
      >
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: "url(assets/images/hero_img.jpg)" }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
          id="home-section"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <h1
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  I'm Ishan <br /> A MERN stack Developer
                </h1>
                <p data-aos="fade-up" data-aos-delay={100}>
                  A new work from Ishan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-white" data-aos="fade-up" data-aos-delay="0">
                I'm Ishan <br /> A MERN stack Developer
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                A new work from Ishan
              </p>
            </div>
          </div>
        </div>
        <section className="site-section" id="about-section">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div
                className="col-lg-7 pr-lg-5 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <div className="img-wrap">
                  <img
                    src="assets/images/image_1_long.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div
                className="col-lg-5 pl-lg-5"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="section-heading">
                  <h2>My Bio</h2>
                </div>
                <p>
                  Far far away, behind{" "}
                  <span className="highlight">the word mountains</span>, far
                  from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at
                  the coast of the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <div className="my-5">
                  <div className="skill">
                    <h3>Design</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <h3>HTML5</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "98%" }}
                        aria-valuenow={98}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>98%</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <h3>CSS3</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "97%" }}
                        aria-valuenow={97}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>97%</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <h3>WordPress</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "88%" }}
                        aria-valuenow={88}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>88%</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <h3>Bootstrap</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "92%" }}
                        aria-valuenow={92}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>92%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a
                    href="#contact-section"
                    className="btn btn-primary smoothscroll"
                  >
                    Hire Me
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="untree_co-section" id="portfolio-section">
          <div className="container">
            <div className="row">
              <div
                className="section-heading text-center col-md-12"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h2>My Portfolio</h2>
              </div>
            </div>
            <div className="filters" data-aos="fade-up" data-aos-delay="100">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".packaging">Packaging</li>
                <li data-filter=".mockup">Mockup</li>
                <li data-filter=".typography">Typography</li>
                <li data-filter=".photography">Photography</li>
              </ul>
            </div>
            <div
              className="filters-content mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row grid">
                <div className="single-portfolio col-sm-4 all mockup">
                  <a href="assets/images/work_5.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>Card Vol. 3</h3>
                      <div className="cat">Mockup</div>
                    </div>
                  </a>
                </div>
                <div className="single-portfolio col-sm-4 all typography">
                  <a href="assets/images/work_1.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>House Design</h3>
                      <div className="cat">Typography</div>
                    </div>
                  </a>
                </div>
                <div className="single-portfolio col-sm-4 all mockup">
                  <a href="assets/images/work_2.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>WoW</h3>
                      <div className="cat">Mockup</div>
                    </div>
                  </a>
                </div>
                <div className="single-portfolio col-sm-4 all packaging">
                  <a href="assets/images/work_3.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>Seat</h3>
                      <div className="cat">Packaging</div>
                    </div>
                  </a>
                </div>
                <div className="single-portfolio col-sm-4 all typography">
                  <a href="/assets/images/work_4.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>Seat</h3>
                      <div className="cat">Packaging</div>
                    </div>
                  </a>
                </div>
                <div className="single-portfolio col-sm-4 all photography">
                  <a href="assets/images/work_6.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>House Design</h3>
                      <div className="cat">Photography</div>
                    </div>
                  </a>
                </div>
                <div className="single-portfolio col-sm-4 all photography">
                  <a href="assets/images/work_7.jpg" data-fancybox="gal">
                    <img
                      src="/assets/images/work_7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="contents">
                      <h3>House Design</h3>
                      <div className="cat">Photography</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="untree_co-section" id="services-section">
          <div className="container">
            <div className="row">
              <div
                className="section-heading text-center col-md-12 mb-5"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h2>Services</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-4 text-center mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="site-service-item" data-animate-effect="fadeIn">
                  <span className="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-display"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
                      />
                    </svg>
                  </span>
                  <h3 className="mb-4">Development</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 text-center mb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="site-service-item" data-animate-effect="fadeIn">
                  <span className="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-binoculars"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"
                      />
                    </svg>
                  </span>
                  <h3 className="mb-4">Design</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 text-center mb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="site-service-item" data-animate-effect="fadeIn">
                  <span className="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-basket3"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"
                      />
                      <path d="M0 6.5A.5.5 0 0 1 .5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zM.81 9c0 .035.004.07.011.105l1.201 5.604A1 1 0 0 0 3 15.5h10a1 1 0 0 0 .978-.79l1.2-5.605A.495.495 0 0 0 15.19 9h-1.011L13 14.5H3L1.821 9H.81z" />
                    </svg>
                  </span>
                  <h3 className="mb-4">eCommerce</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="untree_co-section" id="resume-section">
          <div className="container">
            <div className="row">
              <div
                className="section-heading text-center col-md-12 mb-5"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h2>Resume</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <img
                  src="assets/images/image_1_long.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                className="col-lg-7 ml-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="mb-5">Work Experience</h3>
                <div className="resume-item d-flex work">
                  <div>
                    <h4>Senior Front End Developer</h4>
                    <div className="d-flex">
                      <div className="d-flex resume-meta">
                        <span className="mr-3">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-building"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                              />
                              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg>
                          </span>
                          <span>Facebook, Inc.</span>
                        </span>
                        <span className="icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-geo-alt"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            />
                          </svg>
                        </span>
                        <span>San Francisco</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="ml-auto resume-meta">
                    <div className="clearfix">
                      <span className="period d-block float-right">
                        <span>Fulltime</span>
                      </span>
                    </div>
                    <span className="icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-calendar-event"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                        />
                        <rect width="2" height="2" x="11" y="6" rx=".5" />
                      </svg>
                    </span>
                    <span>November 2019 - Present </span>
                  </div>
                </div>
                <div className="resume-item d-flex work">
                  <div>
                    <h4>Front-end Engineer</h4>
                    <div className="d-flex">
                      <div className="d-flex resume-meta">
                        <span className="mr-3">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-building"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                              />
                              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg>
                          </span>
                          <span>Google, Inc.</span>
                        </span>
                        <span className="icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-geo-alt"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            />
                          </svg>
                        </span>
                        <span>San Francisco</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="ml-auto resume-meta">
                    <div className="clearfix">
                      <span className="period d-block float-right">
                        <span>Part time</span>
                      </span>
                    </div>
                    <span className="icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-calendar-event"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                        />
                        <rect width="2" height="2" x="11" y="6" rx=".5" />
                      </svg>
                      body
                    </span>
                    <span>March 2015 - November 2019 </span>
                  </div>
                </div>
                <div className="resume-item d-flex work">
                  <div>
                    <h4>Web Designer</h4>
                    <div className="d-flex">
                      <div className="d-flex resume-meta">
                        <span className="mr-3">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-building"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                              />
                              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg>
                          </span>
                          <span>Github, Inc.</span>
                        </span>
                        <span className="icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-geo-alt"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            />
                          </svg>
                        </span>
                        <span>San Francisco</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="ml-auto resume-meta">
                    <div className="clearfix">
                      <span className="period d-block float-right">
                        <span>Fulltime</span>
                      </span>
                    </div>
                    <span className="icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-calendar-event"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                        />
                        <rect width="2" height="2" x="11" y="6" rx=".5" />
                      </svg>
                    </span>
                    <span>January 2010 - March 2015 </span>
                  </div>
                </div>
                <div className="resume-item d-flex work">
                  <div>
                    <h4>Lead Front-end Engineer</h4>
                    <div className="d-flex">
                      <div className="d-flex resume-meta">
                        <span className="mr-3">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-building"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                              />
                              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg>
                          </span>
                          <span>Slack, Inc.</span>
                        </span>
                        <span className="icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-geo-alt"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            />
                          </svg>
                        </span>
                        <span>San Francisco</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="ml-auto resume-meta">
                    <div className="clearfix">
                      <span className="period d-block float-right">
                        <span>Fulltime</span>
                      </span>
                    </div>
                    <span className="icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-calendar-event"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                        />
                        <rect width="2" height="2" x="11" y="6" rx=".5" />
                      </svg>
                    </span>
                    <span>January 2010 </span>
                  </div>
                </div>
                <h3 className="mt-5 mb-3">Education</h3>
                <div className="resume-item d-flex work">
                  <div>
                    <h4>Master in Software Engineering</h4>
                    <div className="d-flex">
                      <div className="d-flex resume-meta">
                        <span className="mr-3">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-calendar-event"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                              />
                              <rect width="2" height="2" x="11" y="6" rx=".5" />
                            </svg>
                          </span>
                          <span>Harvard University</span>
                        </span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="ml-auto resume-meta">
                    <span className="icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-calendar-event"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                        />
                        <rect width="2" height="2" x="11" y="6" rx=".5" />
                      </svg>
                    </span>
                    <span>Columbia University</span>
                  </div>
                </div>
                <div className="resume-item d-flex work">
                  <div>
                    <h4>Batchelor in Software Engineering</h4>
                    <div className="d-flex">
                      <div className="d-flex resume-meta">
                        <span className="mr-3">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-award"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"
                              />
                              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                            </svg>
                          </span>
                          <span>Columbia University</span>
                        </span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="ml-auto resume-meta">
                    <span className="icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-calendar-event"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                        />
                        <rect width="2" height="2" x="11" y="6" rx=".5" />
                      </svg>
                    </span>
                    <span>March 2015 - November 2019 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light" id="testimonials-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12" data-aos="fade-up" data-aos-delay="0">
                <div className="section-heading text-center">
                  <h2>Happy Clients</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="assets/images/person_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Jeremy Winston, CEO <a href="/#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="assets/images/person_2.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Richard Atkinson, CEO <a href="/#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="assets/images/person_3.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Jeremy Winston, CEO <a href="/#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="assets/images/person_4.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Richard Atkinson, CEO <a href="/#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section" id="blog-section">
          <div className="container">
            <div className="row">
              <div
                className="col-md-12 mb-5"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="section-heading text-center">
                  <h2>Read on Medium</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <ul className="list-unstyled blog-entries">
                  <li data-aos="fade-up" data-aos-delay="100">
                    <a
                      href="/#"
                      className="d-block d-md-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span className="d-block date">Jun 28, 2020</span>
                        <h3>Front-end Developer Demands today</h3>
                      </div>
                      <span className="read">2 mins read</span>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <a
                      href="/#"
                      className="d-block d-md-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span className="d-block date">Jun 28, 2020</span>
                        <h3>I Used React JS</h3>
                      </div>
                      <span className="read">2 mins read</span>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <a
                      href="/#"
                      className="d-block d-md-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span className="d-block date">Jun 28, 2020</span>
                        <h3>Why Front-end Developer So Important</h3>
                      </div>
                      <span className="read">2 mins read</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="untree_co-section" id="contact-section">
          <div className="container">
            <div className="row">
              <div
                className="col-md-12 mb-5"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="section-heading text-center">
                  <h2>Contact Me</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <form
                  className="contact-form"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="" for="fname">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="" for="lname">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="" for="email">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label className="" for="message">
                      Message
                    </label>
                    <textarea
                      name=""
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
              <div
                className="col-lg-4 ml-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="h5 mb-4">Contact Info</h3>
                <address className="text-black d-flex">
                  <span className="mt-1 icon-room mr-2"></span>
                  <span>
                    4th Floor, Atul House, opp. DCB Bank, near Parimal Under
                    Bridge, Paldi, Ahmedabad
                  </span>
                </address>
                <ul className="list-unstyled ul-links mb-4">
                  <li className="mb-3">
                    <a href="/tel://11234567890" className="d-flex">
                      <span className="mt-1 icon-phone mr-2"></span>
                      <span>+1(123)-456-7890</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/tel://11234567890" className="d-flex">
                      <span className="mt-1 icon-phone mr-2"></span>
                      <span>+1(123)-456-7890</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="//cdn-cgi/l/email-protection#9bf2f5fdf4dbf6e2fff4f6faf2f5b5f8f4f6"
                      className="d-flex"
                    >
                      <span className="mt-1 icon-envelope mr-2"></span>
                      <span>
                        <span
                          className="__cf_email__"
                          data-cfemail="026b6c646d426f7b666d6f636b6c2c616d6f"
                        >
                          Ishankhaliwala312@gmail.com
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/https://Colorlib/"
                      target="_blank"
                      className="d-flex"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer">
          <div className="footer-dots"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h3>
                    About Orbit<span className="text-primary">.</span>{" "}
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget">
                  <h3>Connect</h3>
                  <ul className="list-unstyled social">
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-pinterest"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 ml-auto">
                <div className="widget">
                  <h3>Navagation</h3>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="/#">HTML5</a>
                    </li>
                    <li>
                      <a href="/#">CSS3</a>
                    </li>
                    <li>
                      <a href="/#">jQuery</a>
                    </li>
                    <li>
                      <a href="/#">Bootstrap</a>
                    </li>
                    <li>
                      <a href="/#">Javascript</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="widget">
                  <h3>Services</h3>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="/#">Web Design</a>
                    </li>
                    <li>
                      <a href="/#">eCommerce</a>
                    </li>
                    <li>
                      <a href="/#">WordPress</a>
                    </li>
                    <li>
                      <a href="/#">Frontend</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h3>Contact</h3>
                  <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                  <ul className="list-unstyled links mb-4">
                    <li>
                      <a href="/tel://11234567890">+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="/tel://11234567890">+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="//cdn-cgi/l/email-protection#026b6c646d426f7b666d6f636b6c2c616d6f">
                        <span
                          className="__cf_email__"
                          data-cfemail="2b42454d446b46524f44464a424505484446"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="overlayer"></div>
        <div className="loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
