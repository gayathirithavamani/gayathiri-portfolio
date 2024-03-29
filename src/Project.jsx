import React from "react";
import "../src/project.css";
import project1 from "../src/assets/NoteMakerApp.jpg";

import project2 from "../src/assets/watch.jpeg";

import project3 from "../src/assets/download.jpg";
import project4 from "../src/assets/burgerapp.png";

function Project() {
  return (
    <>
      <div id="project">
        <div
          class="container card bg-transparent mt-1 p-5  "
          style={{
            border: "1px solid #ce37ad",

            boxShadow: " rgba(90, 56, 88, 0.75) 12px 8px 12px",
          }}
        >
          <h1 class="sub-title text-center myname">Projects</h1>
          <hr />

          <div class="card border-light mb-3 bg-transparent">
            <div class="card-body  text-success">
              <h5 class="card-title text-center fw-bold  text-uppercase">
                {" "}
                Common Credentials
              </h5>
              <hr />
              <p class="card-text text-center text-light">
                <span className="fw-bold  myname text-uppercase">User :-</span>{" "}
                demo@gmail.com || password:123456789
              </p>

              <p class="card-text text-center text-light">
                <span className="fw-bold myname  text-uppercase">Admin :-</span>{" "}
                gayat2000@gmail.com || password: user@123
              </p>
            </div>
          </div>

          <section id="portfolio" class="portfolio">
            <div class="container">
              <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project1} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2">
                      <h4>MERN NOTES MAKER APP</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      React Js/Node Js/Express Js/MongoDB/Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/gayathirithavamani/NOTES_MERN_FE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://gayu-project-one.netlify.app"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/gayathirithavamani/NOTES_MERN_BE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="card  bg-transparent border-dark">
                    <img src={project2} class="img-fluid" alt="" />
                    <div className="card-title text-center pt-2">
                      <h4>WATCH MERN APP</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      React Js/Node Js/Express Js/MongoDB/Mongoose
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/gayathirithavamani/watchFE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://symphonious-heliotrope-eb4f9f.netlify.app"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/gayathirithavamani/watchBE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project3} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2">
                      <h4>TOTO PROJECT</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      React Js/Node Js/Express Js/MongoDB/Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/gayathirithavamani/TODO-MERN-FE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://toto-project.netlify.app"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/gayathirithavamani/TODO-MERN-BE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project4} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2">
                      <h4>TASTY BURGER MERN App</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      React Js/Node Js/Express Js/MongoDB/Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/gayathirithavamani/DeliveryApp_FE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://beamish-peony-8984d1.netlify.app"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/gayathirithavamani/DeliveryApp_BE"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Project;
