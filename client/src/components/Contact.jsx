import React from 'react';
import FadeIn from 'react-fade-in';
import axios from 'axios';


export default class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      notification: '',
      notificationStyle: { display: 'none' }
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    document.getElementById('emailForm').checkValidity();
    if (document.getElementById('emailForm').reportValidity()) {
      let {name, email, subject, message} = this.state;
      axios.post('/send', {name, email, subject, message})
        .then(() => {
          this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            notification: 'Message sent. Thanks for reaching out!',
            notificationStyle: { display: 'inline-block' }
          }, () => setTimeout(() => {
              this.setState({
                notification: '',
                notificationStyle: { display: 'none' }
              })
            }, 3000)
          );
        })
        .catch((err) => console.error(err));
      document.getElementById("emailForm").reset();
    }
  }

  render() {
    return (
      <div className="contact-page container">
        <FadeIn>
          <div className="contact-form-container">
            <h4>Send a message</h4>
            <hr></hr>
            <form className="contact-form" encType="multipart/form-data" id="emailForm" onSubmit={this.submitHandler}>
              <div className="row">
                <div className="col">
                  <input className="form-control" name="name" type="text" placeholder="Full Name (required)" required onChange={this.changeHandler}></input>
                </div>
                <div className="col">
                  <input className="form-control" name="email" type="email" placeholder="Email (required)" required onChange={this.changeHandler}></input>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col">
                  <input className="form-control" name="subject" type="text" placeholder="Subject (optional)" onChange={this.changeHandler}></input>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col">
                  <textarea className="form-control" rows="10" name="message" type="text" placeholder="Message (required)" required onChange={this.changeHandler}></textarea>
                </div>
              </div>
              <br></br>
              <button type="submit" className="btn btn-dark">Send</button>
              <div className="submit-notification alert alert-success" style={this.state.notificationStyle}>{this.state.notification}</div>
            </form>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="social-links-container">
            <h4>Connect</h4>
            <hr></hr>
            <a href="http://linkedin.com/in/adam-gienapp" target="_blank">
              <i className="fa fa-linkedin-square social-link li-icon" aria-hidden="true"></i>
            </a>
            <a href="http://github.com/adamgienapp" target="_blank">
              <i className="fa fa-github-square social-link gh-icon" aria-hidden="true"></i>
            </a>
            <a href="http://facebook.com/adam.gienapp" target="_blank">
              <i className="fa fa-facebook-square social-link fb-icon" aria-hidden="true"></i>
            </a>
          </div>
        </FadeIn>
      </div>
    );
  };
}
