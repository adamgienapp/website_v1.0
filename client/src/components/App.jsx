import React from 'react';
import Home from './Home';
import Projects from './Projects';
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
        <div className="nav-bar">

        </div>
        <div className="page-content">
          {
            { 
              '/': <Home />,
              '/Projects/': <Projects />,
              '/Contact/': <Contact />,
            }[this.state.page]
          }
        </div>
      </div>
    );
  }
}
