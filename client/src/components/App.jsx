import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: window.location.pathname
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand name-block" href="/">Adam Gienapp</a>
          <button className="navbar-toggler btn-focus-off" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="page-content">
          {
            { 
              '/': <Home />,
              '/projects/': <Projects />,
              '/resume/': <Resume />,
              '/contact/': <Contact/>,
            }[this.state.page]
          }
        </div>
      </div>
    );
  }
}
