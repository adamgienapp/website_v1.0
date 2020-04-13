import React from 'react';

const Resume = (props) => {
  return (
    <div className="resume-page">
      <object data="./adam-gienapp-resume.pdf#view=FitH" type="application/pdf" width="100%" height="1200px" style={{display: 'block'}}/>
    </div>
  );
}

export default Resume;