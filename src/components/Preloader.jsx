import React from "react";
// const style = {
//   preContainer: {
//     position: "relative",
//     width: "100%",
//     height: "100vh",
//   },
//   content: {
//     position: "absolute",
//     top: "43%",
//     left: "35%",
//     bottom: "30%",
//     right: "30%",
//   },
//   headerText: {
//     fontWeight: 700,
//     fontSize: 45,
//     lineHeight: 0,
//     paddingTop: 9,
//     margin: "0 10px",
//   },
//   loader: {
//     height: 20,
//     width: 20,
//   },
// };
export const Preloader = () => {
  return (
    <div className="container-fluid bg-dark pre-container" >
      <div className="row">
        <div className="col-md-12">
          <div className="pre-content">
            <div className="pre-style">
              <h1 className="text-light">
                BlockChain <span className="text-warning">Lab</span>
              </h1>
              <div>
                <div
                  className="spinner-grow text-warning loader"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  className="spinner-grow text-warning loader mx-2"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                   className="spinner-grow text-warning loader"
                   role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
