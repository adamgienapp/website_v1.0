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

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="name-block">
            <span>Adam Gienapp</span>
          </div>
          <div className="nav-btns">
            <div className="nav-home">
              <a href="/">Home</a>
            </div>
            <div className="nav-projects">
              <a href="/projects">Projects</a>
            </div>
            <div className="nav-resume">
              <a href="/resume">Resume</a>
            </div>
            <div className="nav-contact">
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="page-content">
          {
            { 
              '/': <Home />,
              '/projects/': <Projects />,
              '/resume/': <Resume />,
              '/contact/': <Contact submit={this.submitHandler}/>,
            }[this.state.page]
          }
        </div>
      </div>
    );
  }
}
