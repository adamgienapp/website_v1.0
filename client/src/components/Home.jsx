import React from 'react';


const Home = (props) => {
  return (
    <div className="home-page container">
      <div className="home-title">
        <div className="pic-window"></div>
      </div>
      <div className="home-about">
        <h3>About Me</h3>
        <p className="about-me-details">
          Hi, I'm Adam! I'm a full-stack software developer with a passion for solving complex problems.
          I seek out opportunities to challenge myself, and find that's when I perform my best.
          <br/><br/>
          With nearly a decade of experience as a mechanical engineer, I have a proven track record
          of developing impactful, innovative products from concept through production. I'm drawn to
          programming by its limitless potential to drive positive global change, and I love the immediacy
          of the design process - the ability to design, test, and iterate is literally right at your
          fingertips.
          <br/><br/>
          I'm enthusiastically searching for a great opportunity to apply and expand my technical prowess.
          Let's build something great together!
        </p>
      </div>
    </div>
  );
}

export default Home;