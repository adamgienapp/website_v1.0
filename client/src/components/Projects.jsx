import React from 'react';


const Projects = (props) => {
  return (
    <div className="projects-page container">
      <div className="projects-anchors">
        <div>
          <a href="#FEC">FEC</a>
        </div>
        <div>
          <a href="#SDC">SDC</a>
        </div>
        <div>
          <a href="#encode32">Encode32</a>
        </div>
      </div>
      <div className="projects-list">
        <div id="FEC">
          <div>
            Tech stack: React, Node + Express, MySQL + Sequelize, CircleCI, Jest + Enzyme
          </div>
          <a href="http://3.101.29.112/1/" target="_blank">Check it out</a>
          <a href="https://github.com/All-Day-I-Dream-About-Servers" target="_blank">Github Repo</a>
        </div>
        <div id="SDC">
          <div>
            Tech stack: React, Node + Express, PostgreSQL, Nginx, AWS EC2, Loader.io
          </div>
          <a href="https://github.com/10-Million-Dog-Goggles/search-bar-service" target="_blank">Github Repo</a>
        </div>
        <div id="encode32">

        </div>
      </div>
    </div>
  );
}

export default Projects;