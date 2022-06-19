import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container-fluid" style={{ paddingTop: 100 }}>
        <div className="row">
          <div className="col-md-4">
            <div className="footer-header">
              <h5>Block Chain Lab</h5>
            </div>
            <div className="footer-content">
              <p style={{ width: "70%" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                velit illum aperiam dolores incidunt consectetur omnis? At sequi
                nihil culpa accusamus, voluptatibus voluptates, optio corporis,
                iste odit reiciendis cum dolores?
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-header">
              <h5>Company</h5>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <a href="0#">Home</a>
                </li>
                <li>
                  <a href="0#">What we are about?</a>
                </li>
                <li>
                  <a href="0#">Start Ups</a>
                </li>
                {/* <li>
                  <a href="0#">Appy For Venture</a>
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
              <p>08037343873</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
