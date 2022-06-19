import React from 'react'

const ComingSoon2 = () => {
  return (
    <>
     <div
        className="container-fluid estate-container"
      >
        <div className="row justify-content-center">
          <div className="col-md-12">
              <div style={{paddingTop: 200}}>
                  <h1 className="text-light" style={{fontWeight: "800", fontSize: 70}}>Coming soon ...</h1>
              </div>
              <div>
                  <p className="text-light lh-lg">we are working on a platform that brings real estate business to your door step!</p>
              </div>
              <div>
                  <button className="btn btn-success btn-lg p-3" onClick={()=>{
                      window.location.href="/"
                  }}>
                    Back to Website
                  </button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon2