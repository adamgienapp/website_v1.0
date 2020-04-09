import React from 'react';
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
            notification: 'Thanks for reaching out!',
          }, () => setTimeout(() => {
              this.setState({
                notification: ''
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
        <div className="contact-form-container">
          <h3>Send a message</h3>
          <form className="contact-form" encType="multipart/form-data" id="emailForm" onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col">
                <input className="form-control" name="name" type="text" placeholder="Full Name" required onChange={this.changeHandler}></input>
              </div>
              <div className="col">
                <input className="form-control" name="email" type="email" placeholder="Email" required onChange={this.changeHandler}></input>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col">
                <input className="form-control" name="subject" type="text" placeholder="Subject" required onChange={this.changeHandler}></input>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col">
                <textarea className="form-control" rows="10" name="message" type="text" placeholder="Message" required onChange={this.changeHandler}></textarea>
              </div>
            </div>
            <br></br>
            <button type="submit" className="btn btn-secondary">Send</button> <div className="submit-notification alert-success">{this.state.notification}</div>
          </form>
        </div>
        <div className="container social-links">
          <h3>Connect</h3>
          <a href="http://linkedin.com/in/adam-gienapp" target="_blank">
              {/* <img src="linkedin-brands.svg" alt="linkedin.com/adam-gienapp" title="Adam Gienapp @ linkedin" height="60px"></img> */}
            <i className="fa fa-linkedin-square social-link li-icon" aria-hidden="true"></i>
          </a>
          <a href="http://github.com/podsixisjerks" target="_blank">
            <i className="fa fa-github-square social-link gh-icon" aria-hidden="true"></i>
          </a>
          <a href="http://facebook.com/adam.gienapp" target="_blank">
            <i className="fa fa-facebook-square social-link fb-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  };
}
