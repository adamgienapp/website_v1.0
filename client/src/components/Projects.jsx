import React from 'react';


const Projects = (props) => {
  return (
    <div className="projects-page container">
      <div id="top"/>
      <div className="projects-anchors">
        <div>
          <a href="#FEC">All Day I Dream About Servers</a>
        </div>
        <div>
          <a href="#SDC">REI Search Bar System Design</a>
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
            <img className="project-image" src="Sc7qASD.gif" alt="adidas product detail page demo" text="adidas product detail page demo" width="100%"></img>
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
            <img className="project-image" src="Sc7qASD.gif" alt="system design engineering journal snippets" text="system design engineering journal snippets" width="100%"></img>
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