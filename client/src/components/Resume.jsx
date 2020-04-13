import React from 'react';

const Resume = (props) => {
  return (
    <div className="resume-page">
      <object data="./adam-gienapp-resume.pdf#view=FitH" type="application/pdf" className="resume-obj">
        <p>Oops! Your browser doesn't support PDFs!</p>
        <p><a href="/adam-gienapp-resume.pdf">Download Instead</a></p>
      </object>
    </div>
  );
}

export default Resume;