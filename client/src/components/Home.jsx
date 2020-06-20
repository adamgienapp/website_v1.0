import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import FadeIn from 'react-fade-in';


const Home = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/img/DK53A3i4.jpeg";
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div>
    {loading ?
    <div className="container">
      <FadeIn>
        <ReactLoading type={"bars"} color={"#343a40"} style={{margin: "30% auto", height: "25%", width: "25%"}}/>
      </FadeIn>
    </div>
    :
    <div className="home-page container">
      <FadeIn>
        <div className="home-title">
          <div className="pic-window"></div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="home-about">
          <h4>About Me</h4>
          <hr></hr>
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
      </FadeIn>
    </div>
    }
    </div>
  );
}

export default Home;