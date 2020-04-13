import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import ReactLoading from 'react-loading';
import FadeIn from 'react-fade-in';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: window.location.pathname,
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          loading: false
        });
      },
      1000
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
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
            { this.state.loading ? 
              (
                <div className="container">
                  <FadeIn>
                    <ReactLoading type={"bars"} color={"#343a40"} style={{margin: "30% auto", height: "25%", width: "25%"}}/>
                  </FadeIn>
                </div>
              )
              :
              { 
                '/':
                <FadeIn>
                  <Home />
                </FadeIn>,
                '/projects/': 
                  <FadeIn>
                    <Projects />
                  </FadeIn>,
                '/resume/':
                <FadeIn>
                  <Resume />
                </FadeIn>,
                '/contact/': 
                <FadeIn>
                  <Contact/>
                </FadeIn>,
              }[this.state.page]
              ||
              <FadeIn>
                <div className="bad-page">
                  <p>
                    Looks like you've found a page that doesn't exist, or is under construction...
                    <br/>Try sticking to the navigation links ;)
                  </p>
                </div>
              </FadeIn>
            }
        </div>
      </div>
    );
  }
}
