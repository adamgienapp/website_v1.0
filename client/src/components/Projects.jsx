import React from 'react';


const Projects = (props) => {
  return (
    <div className="projects-page container">
      <div className="projects-anchors">
        <div>
          <a href="#FEC">All Day I Dream About Servers</a>
        </div>
        <div>
          <a href="#SDC">REI Search Bar System Design</a>
        </div>
        <div>
          <a href="#encode32">Encode32</a>
        </div>
      </div>
      <hr></hr>
      <div className="projects-list">
        <div id="FEC" className="project-item">
          <div className="project-title bg-dark">
            <h4>All Day I Dream About Servers</h4>
            <h6 className="project-byline">An adidas product detail page mock-up</h6>
          </div>
          <div className="project-image">
            <img src="Sc7qASD.gif" alt="adidas product detail page demo" text="adidas product detail page demo" width="100%"></img>
          </div>
            <div className="project-tech">
              <span className="tech-title">Tech stack</span> | React, Node + Express, MySQL + Sequelize, Jest + Enzyme, CircleCI
            </div>
            <ul className="project-details">
              <li></li>
            </ul>
            <a href="http://3.101.29.112/1/" target="_blank" className="project-link">Check it out</a>
            <a href="https://github.com/All-Day-I-Dream-About-Servers" target="_blank" className="project-link">Github Repo</a>
        </div>
        <div id="SDC" className="project-item">
          <div className="project-title bg-dark">
            <h4>REI Search Bar System Design</h4>
            <h6 className="project-byline">Scaling the back-end of an inherited web app microservice</h6>
          </div>
          <div className="project-details">
            <div className="project-tech">
              <span className="tech-title">Tech stack</span> | React, Node + Express, MongoDB, PostgreSQL, Nginx, AWS EC2, Loader.io
            </div>
            <a href="https://github.com/10-Million-Dog-Goggles/search-bar-service" target="_blank" className="project-link">Github Repo</a>
          </div>
        </div>
        <div id="encode32" className="project-item">
          <div className="project-title bg-dark">
            <h4>Encode32</h4>
            <h6 className="project-byline">Generate and decode encrypted messages</h6>
          </div>
          <div className="project-details">
            <div className="project-tech">
              <span className="tech-title">Tech stack</span> | React, Node + Express
            </div>
            <a href="https://github.com/10-Million-Dog-Goggles/search-bar-service" target="_blank" className="project-link">Github Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;