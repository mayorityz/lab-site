import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faSquarePlus,
  faCloudArrowUp,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Preloader } from "../components/Preloader";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FontAwesomeIcon
          icon={faArrowCircleUp}
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};

function Index() {
  const [preloaders, setPreloaders] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(() => setPreloaders(false), 3000);
  }, []);

  if (preloaders) {
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <div className="App">
      <ScrollToTop />
      <section className="home-section m-0" id="home">
        <div id="overlay"></div>
        {/* navbar */}
        <nav
          class="navbar navbar-expand-lg navbar-light bg-transparent"
          style={{ padding: "8px 25px" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              {/* <span>
                <img
                  src="../images/bclogo.png"
                  alt="test-tube logo"
                  style={{ width: 85, height: 25, margin: "0 5px" }}
                />
              </span> */}
              <span className="mt-2 fw-bold text-light logo">
                Blockchain <span className="text-warning">Lab</span>
              </span>
            </a>
            <button
              class="navbar-toggler btn-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
                <a class="nav-link" href="#whatweareabout">
                  What we are about
                </a>
                <a class="nav-link" href="#startup">
                  Start Ups
                </a>
                <a class="nav-link" href="#applyforventure">
                  Contact
                </a>
                {/* <a class="nav-link disabled">Disabled</a> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1
                  className="home-header animate__animated animate__bounceInLeft"
                  style={{}}
                >
                  Leveraging on <br /> Blockchain Technology
                  <br /> to build Hi-tech projects <br data-aos="fade-right" />{" "}
                  and Solutions
                </h1>
                <div className="text-center" style={{ margin: "8px 0" }}>
                  <a
                    className="btn btn-transparent btn-lg home-btn"
                    href="#applyforventure"
                    style={{ border: "1px solid #f9b122" }}
                  >
                    Reach Out Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Whatweareabout /> */}
      <div
        className="container"
        style={{ marginBottom: 50, marginTop: 60 }}
        id="whatweareabout"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="whatweareabout-header text-center">
              <h2>About Us</h2>
              <h1 style={{ color: "rgba(0, 0, 0, 0.08)", fontSize: 25 }}>
                We build Software solutions using Blockchain Technology for
                startups and enterprises.{" "}
              </h1>
              <p style={{fontSize: 14}} className='lh-lg'>
                We are a team of young, creative and highly skilled
                professionals aimed at providing smart solutions to digital
                problems through technological experiences and perspective to
                the strategic development of the company. We bring ideas to life
                by collaborating with creative people.Our watchword is “You
                dream it, and we make it a reality.”
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <VisionMission /> */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#19181A" }}
        id="visionmission"
      >
        <div className="row pt-2">
          <div className="col-md-6 g-0">
            <div className="missionvisionpic">
              <img
                src="../images/vision.png"
                alt="vision"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            {/* <h2 className="vision-header">Our Vision</h2> */}
            <p
              className="vision-content"
              data-aos="zoom-in"
              style={{ marginTop: 100 }}
            >
              <span
                style={{ fontWeight: 800, fontSize: 16 }}
                className="text-warning"
              >
                OUR VISION:
              </span>{" "}
              To provide a life-long learning opportunities by onboarding youth
              (Africa) who are eager to learn and acquire digital skills through
              exemplary collections, technological information, resources and
              opportunities. To bring about digital innovation that matters to
              our company and world.
              <br />
              
            </p>
            {/* <h2 className="vision-header">Our Mission</h2> */}
            <div>
            <p className="vision-content" data-aos="zoom-in">
            <span
                style={{ fontWeight: 800, fontSize: 16 }}
                className="text-warning pl-2"
              >
                OUR MISSION:
              </span>{" "}
              To work with the best and brightest tech talent and to ensure
              high-quality products are delivered.
            </p>
            </div>
            
          </div>
        </div>
      </div>
      {/* <StartUps /> */}
      <div className="container" id="startup" style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="whatweareabout-header text-center">
              <h2>Our Services</h2>
              <p style={{fontSize: '14px'}}>
                At Blockchain Lab,Our service offering encompasses the entire
                software development life cycle <br/> and caters to a wide range of
                corporate requirements.
              </p>
            </div>
            <div className="whatweareabout-content">
              <div className="row" style={{ margin: "50px 0" }}>
                <div className="col-md-3 gt-1" data-aos="fade-right">
                  <div className="mb-3">
                    <img
                      src="../images/ideation.png"
                      alt="ideation"
                      style={{ height: 250 }}
                    />
                  </div>
                  <div>
                    <div>
                      <h4>Ideation</h4>
                    </div>
                    <div>
                      <p>
                        We listen , evaluate and help shape your ideas while
                        exploring different options and select the idea we
                        believe will add more value to the target market.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3" data-aos="zoom-in">
                  <div className="mb-3">
                    <img
                      src="../images/investment.png"
                      alt="ideation"
                      style={{ height: 250 }}
                    />
                  </div>
                  <div>
                    <div>
                      <h4>Investment</h4>
                    </div>
                    <div>
                      <p>
                        We automatically invest in selected ideas, by partially
                        /fully funding the idea after carrying out a standard
                        research of the product viability and market strength.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 gt-1" data-aos="fade-left">
                  <div className="mb-3">
                    <img
                      src="../images/partnership.png"
                      alt="ideation Image"
                      style={{ height: 250 }}
                    />
                  </div>
                  <div>
                    <div>
                      <h4>Partnership</h4>
                    </div>
                    <div>
                      <p>
                        Ventures get access to the talent within the marketing
                        and development field and are supported by the HR/GRO
                        for day-to-day activities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 gt-1" data-aos="fade-right">
                  <div className="mb-3">
                    <img
                      src="../images/teaching.png"
                      alt="ideation Image"
                      style={{ height: 250 }}
                    />
                  </div>
                  <div>
                    <div>
                      <h4>Training</h4>
                    </div>
                    <div>
                      <p>
                        We partner with blockchain training institutions all
                        over the world to empower Nigeria youth on Blockchain
                        Technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3" style={{ marginBottom: 100 }}>
          <div className="row">
            <div className="col-md-12">
              <div className="whatweareabout-header text-center">
                <h2 className= 'fw-bolder'>Our Product</h2>
                <p style={{fontSize: 14}} className='lh-lg'>
                  Our Objective is to power innovation, promote job creation and 
                  build commercially driven companies that would in turn boost <br/>
                  the economy in Nigeria and Africa at large. These are some of 
                  our success stories startups;
                </p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-6  col-sm-12">
              <div
                className="card mx-2"
                style={{ heigth: 'auto', background: "#F3F3F3", width: '100%' }}
              >
                <div className="startup-content">
                  <div
                  className='product'
                    style={{  height: '300px', padding: 10 }}
                  >
                  </div>
                  <div style={{ background: "#F3F3F3" }}>
                    <div className="company-name">
                      <h4 style={{fontSize: 20}}>NFT</h4>
                    </div>
                    <div>
                    <p className='lh-lg' style={{fontSize: 14}}>
                        Afrodieties is a digital platform where the African
                        cultural beliefs and heritage is brought to the world to
                        showcase the mythical etiquetteand believes that
                        surrounds African Dieties, heroes and folklores. The
                        rich sense of these mystic beings and their relations
                        with mankind, with there spiritual prowess and qualities
                        that makes them unique to Africans.
                      </p>
                    </div>
                    <div className="company">
                      <Link to="/afrodiety.com" className='btn btn-dark text-light'>
                        see more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="card mx-2"
                style={{ heigth: 'auto', background: "#F3F3F3", width: '100%' }}
              >
                <div className="startup-content">
                  <div
                  className='product2'
                    style={{ height: '300px', padding: 10 }}
                  >
          
                  </div>
                  <div style={{ background: "#F3F3F3" }}>
                    <div className="company-name">
                      <h4 style={{fontSize: 20}}>Estate Chain</h4>
                    </div>
                    <div>
                      <p className='lh-lg' style={{fontSize: 14}}>
                        Estate chain is real estate platform that revolutionized
                        real estate in Africa from record keeping,
                        verification,buying and selling of real estate. All of
                        this will be achieve with blockchain technology.
                        Building on blockchain makes this platform more secure,
                        transparent and future oriented.
                      </p>
                    </div>
                    <div className="company" style={{paddingTop: 27}}>
                      <Link to="estate-chain.com" className='btn btn-dark text-light'>
                         see more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className="join" style={{ marginBottom: 70 }}>
                  Join One Of Our Sector Lab
                </h1>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-2 col-sm-6">
              <FontAwesomeIcon
                icon={faUserGraduate}
                size="6x"
                color="#187754"
                className="joinimg"
              />
              <p className="join-text pt-3">edtech</p>
            </div>
            <div className="col-md-2 col-sm-6">
              <img src="../images/svgs/fintech.svg" className="joinimg" />
              <p className="join-text pt-3">fintech</p>
            </div>
            <div className="col-md-2 col-sm-6">
              <FontAwesomeIcon
                icon={faSquarePlus}
                size="6x"
                color="#187754"
                className="joinimg"
              />
              <p className="join-text pt-3">health</p>
            </div>
            <div className="col-md-2 col-sm-6">
              <img src="../images/svgs/Ai.svg" className="joinimg" />
              <p className="join-text pt-3">ai</p>
            </div>
            <div className="col-md-2 col-sm-6">
              <img src="../images/svgs/realestate.svg" className="joinimg" />
              <p className="join-text pt-3">real estate</p>
            </div>
            <div className="col-md-2 col-sm-6">
              <img src="../images/svgs/ecommerce.svg" className="joinimg" />
              <p className="join-text pt-3">e-commerce</p>
            </div>
          </div>
        </div>
        {/* <Message /> */}
        <div className="container-fluid" id="applyforventure">
          <div className="row">
            <div className="col-md-12">
              <div className="message-header text-center">
                <h2>Tell Us More About Your Company</h2>
                <h1>Drop Us a Message</h1>
              </div>
              <div>
                <form>
                  <div className="row my-3">
                    <div className="col-md-6 col-sm-12 py-2">
                      <input
                        className="form-control"
                        placeholder="First Name"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 py-2">
                      <input
                        className="form-control"
                        placeholder="Last Name"
                        style={{ height: 55 }}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6 col-sm-12 py-2">
                      <select
                        className="form-control"
                        placeholder="Select country"
                        style={{ height: 55 }}
                      >
                        <option selected>Select country</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-sm-12 py-2">
                      <input
                        className="form-control"
                        placeholder="Email address"
                        style={{ height: 55 }}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6 col-sm-12 py-2">
                      <input
                        className="form-control"
                        placeholder="Company Name"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-md-6 px-3 col-sm-12 py-2">
                      <input
                        className="form-control"
                        placeholder="Specialization"
                        style={{ height: 55 }}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-12">
                      <textarea
                        className="form-control p-2"
                        placeholder="Your Message"
                        style={{ height: 200 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            background: "#F1F1F1",
                            borderRadius: 2,
                            margin: 5,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              padding: "12px 5px",
                              justifyContent: "center",
                              margin: "0px 12px",
                            }}
                          >
                            <span className="mx-2">
                              <FontAwesomeIcon icon={faCloudArrowUp} />
                            </span>
                            <span>Upload Pitch Deck</span>
                          </div>
                        </div>
                        <div style={{ padding: "14px 5px" }}>
                          <span className="format">
                            Max file size 15MB, only .pdf
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div
                        className="text-start"
                        style={{ paddingTop: 100, paddingBottom: 100 }}
                      >
                        <button className="btn btn-success fw-bold form-button">
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <footer>
        <div className="container-fluid" style={{ paddingTop: 100 }}>
          <div className="row">
            <div className="col-md-4">
              <div className="footer-header">
                <h5>Block Chain Lab</h5>
              </div>
              <div className="footer-content">
                {/* <p style={{ width: "70%" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  velit illum aperiam dolores incidunt consectetur omnis? At
                  sequi
                </p> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-header">
                <h5>Company</h5>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#whatweareabout">What we are about?</a>
                  </li>
                  <li>
                    <a href="#startup">Start Ups</a>
                  </li>
                  {/* <li>
                    <a href="#applyforventure">Appy For Venture</a>
                  </li> */}
                  <li>
                    <a href="0#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-header">
                <h5>Connect With Us</h5>
              </div>
              <div className="footer-content">
                <p>18, Ogunnaike Street, Shangisha, Magodo, Lagos State.</p>
                <p>blockchain@gmail.com</p>
                {/* <p>08037343873</p> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section style={{ background: "#000000" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <hr className="copyright-line" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div>
                  <p className="copyright">
                    &copy;{" "}
                    <span>
                      Copyright at BlockchainLab all sample right observed
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div>
                <hr className="copyright-line" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
