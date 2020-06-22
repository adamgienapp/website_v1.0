// Packages
import React, { useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
// Components
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';


const App = (props) => {
  useEffect(() => {
    const imgURLs = ["https://i.imgur.com/Sc7qASD.gif", "/img/sdc_1.svg", "/img/sdc_2.svg", "/img/sdc_3.svg", "/img/scratchtrack_demo.gif"]
    imgURLs.forEach((url) => {
      const img = new Image();
      img.src = url;
    })
  }, []);

  const toggleDropdown = () => {
    const nav = $('.navbar-collapse');
    nav.collapse('hide');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
        <Link className="navbar-brand name-block" to="/">Adam Gienapp</Link>
        <button className="navbar-toggler btn-focus-off" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" data-toggle="collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleDropdown}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={toggleDropdown}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume" onClick={toggleDropdown}>Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleDropdown}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
