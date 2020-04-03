import React from 'react';


const Contact = (props) => {
  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <form className="contact-form" method="POST" encType="multipart/form-data" name="emailForm" action="form-to-email.php">
          <div className="row">
            <div className="col">
              <input className="form-control" name="name" type="text" placeholder="Full Name" required></input>
            </div>
            <div className="col">
              <input className="form-control" name="email" type="email" placeholder="Email" required></input>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <input className="form-control" name="subject" type="text" placeholder="Subject" required></input>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col">
              <textarea className="form-control" rows="10" name="message" type="text" placeholder="Message" required></textarea>
            </div>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;