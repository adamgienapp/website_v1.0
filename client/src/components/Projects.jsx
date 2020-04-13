import React from 'react';


const Projects = (props) => {
  return (
    <div className="projects-page container">
      <div id="top"/>
      <div className="projects-anchors">
        <div>
          <a href="#FEC">
            <span className="project-anchor-text">All Day I Dream</span>
            <span className="project-anchor-space">&nbsp;</span>
            <span className="project-anchor-text">About Servers</span>
          </a>
        </div>
        <div>
          <a href="#SDC">
            <span className="project-anchor-text">REI Search Bar</span>
            <span className="project-anchor-space">&nbsp;</span>
            <span className="project-anchor-text">System Design</span>
          </a>
        </div>
        {/* <div>
          <a href="#encode32">Encode32</a>
        </div> */}
      </div>
      <hr></hr>
      <div className="projects-list">
        <div id="FEC"/>
        <div className="project-item">
          <div className="project-title bg-dark">
            <h4>All Day I Dream About Servers</h4>
            <h6 className="project-byline">An adidas product detail page mock-up</h6>
          </div>
          <div className="project-image">
            <img className="project-image" src="https://i.imgur.com/Sc7qASD.gif" alt="adidas product detail page demo" text="adidas product detail page demo" width="100%"></img>
          </div>
          <div className="project-description">
            <div className="project-tech">
              <span className="tech-title">Tech stack</span> | React, Node + Express, MySQL + Sequelize, Jest + Enzyme, CircleCI
            </div>
            <ul className="project-details">
              <li>Developed the 'Ratings &amp; Reviews' section, utilizing dynamic querying to load only specific information requested by the user.</li>
              <li>Combined 4 modules into a single web app using service-oriented architecture.</li>
            </ul>
            <div className="project-links">
              <a href="http://3.101.29.112/1/" target="_blank">Check it out</a>
              <a href="https://github.com/All-Day-I-Dream-About-Servers" target="_blank">Github Repo</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
          <div className="project-footer bg-dark"/>
        </div>
        <div id="SDC"/>
        <div className="project-item">
          <div className="project-title bg-dark">
            <h4>REI Search Bar System Design</h4>
            <h6 className="project-byline">Scaling the back-end of a pre-existing web app microservice</h6>
          </div>
          <div className="project-image">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="3000" data-pause="hover" data-touch="true">
                  <img src="./img/sdc_1.svg" className="d-block w-100" alt="System performance with 1 EC2 server" text="System performance with 1 EC2 server"></img>
                </div>
                <div className="carousel-item" data-interval="3000" data-pause="hover" data-touch="true">
                  <img src="./img/sdc_2.svg" className="d-block w-100" alt="System performance with 2 EC2 servers behind Nginx load balancer" text="System performance with 2 EC2 servers behind Nginx load balancer"></img>
                </div>
                <div className="carousel-item" data-interval="3000" data-pause="hover" data-touch="true">
                  <img src="./img/sdc_3.svg" className="d-block w-100" alt="System performance with 4 EC2 servers behind Nginx load balancer" text="System performance with 4 EC2 servers behind Nginx load balancer"></img>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="project-description">
            <div className="project-tech">
              <span className="tech-title">Tech stack</span> | React, Node + Express, MongoDB, PostgreSQL, Nginx, AWS EC2, Loader.io
            </div>
            <ul className="project-details">
              <li>Inherited a pre-existing search bar microservice that generates auto-complete suggestions from a database of products</li>
              <li>Expanded database size from 100 to 10M entries, optimized database to reduce worst-case query time from 31 seconds to 2 seconds</li>
              <li>Horizontally scaled the back-end to increase throughput from 750 RPS to 3750 RPS with &lt; 1{"%"} error rate</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/10-Million-Dog-Goggles/search-bar-service" target="_blank" className="project-link">Github Repo</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
          <div className="project-footer bg-dark"/>
        </div>
        {/* <div id="encode32" className="project-item">
          <div className="project-title bg-dark">
            <h4>Encode32</h4>
            <h6 className="project-byline">Generate and decode encrypted messages</h6>
          </div>
          <div className="project-description">
            <div className="project-tech">
              <span className="tech-title">Tech stack</span> | React, Node + Express
            </div>
            <ul className="project-details"></ul>
            <div className="project-links">
              <a href="https://github.com/<insertURL>" target="_blank" className="project-link">Github Repo</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
          <div className="project-footer bg-dark"/>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;