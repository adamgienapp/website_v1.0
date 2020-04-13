import React from 'react';

const Resume = (props) => {
  return (
    <div className="resume-page">
      <object data="./adam-gienapp-resume.pdf#view=FitH" type="application/pdf" className="resume-obj"/>
    </div>
  );
}

export default Resume;