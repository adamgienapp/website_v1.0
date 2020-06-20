// Packages
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
// import ReactLoading from 'react-loading';
// import FadeIn from 'react-fade-in';
// Components
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';


const App = (props) => {
  useEffect(() => {
    const img = new Image();
    img.src = "https://i.imgur.com/Sc7qASD.gif";
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
        <Link className="navbar-brand name-block" to="/">Adam Gienapp</Link>
        <button className="navbar-toggler btn-focus-off" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        {
          // <div className="container">
          //   <FadeIn>
          //     <ReactLoading type={"bars"} color={"#343a40"} style={{margin: "30% auto", height: "25%", width: "25%"}}/>
          //   </FadeIn>
          // </div>
        }
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