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
          });
        })
        .catch((err) => console.error(err));
      document.getElementById("emailForm").reset();
    }
  }

  render() {
    return (
      <div className="contact-page">
        <div className="contact-form-container">
          <form className="contact-form" encType="multipart/form-data" id="emailForm">
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
            <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
          </form>
        </div>
      </div>
    );
  };
}
