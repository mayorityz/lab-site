import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const VisionMission = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#19181A" }}>
        <div className="row pt-2">
          <div className="col-md-6 g-0">
            <div style={{ height: "100%", width: "100%" }}>
              <img
                className="vision-img"
                src="../images/vision.png"
                alt="vision-pics"
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <h2 className="vision-header">Our Vision</h2>
            <p className="vision-content" data-aos="zoom-in">
              To provide a life-long learning opportunities by onboarding youth
              (Africa) who are eager to learn and acquire digital skills through
              exemplary collections, technological information, resources and
              opportunities. To bring about digital innovation that matters to
              our company and world.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 g-0">
            <h2 className="mission-header">Our Mission</h2>
            <p className="mission-content" data-aos="zoom-in">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              at id urna, lobortis pulvinar diam adipiscing sem lobortis. Vel
              consequat enim sed venenatis. Faucibus morbi ut malesuada posuere
              tempor libero. Ut nibh non, sed viverra diam, fermentum. Leo felis
              donec libero vulputate dictum purus libero ac. Cras quam iaculis
              aliquet massa fringilla eu diam risus proin. Ipsum sed sed nam
              aliquam. Id tellus turpis elementum scelerisque venenatis, et nisl
              neque. Ullamcorper maecenas sodales mollis integer non nibh
              lobortis lorem massa. Non sit dolor id curabitur et aliquam donec.
              Scelerisque vitae proin aliquam risus sit. Lacus dignissim etiam
              turpis nec in ultricies vitae aliquam cras. Sit pellentesque
            </p>
          </div>
          <div className="col-md-6 g-0">
            <div style={{ height: "100%", width: "100%" }}>
              <img
                className="vision-img"
                src="../images/mission.png"
                alt="vision-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
