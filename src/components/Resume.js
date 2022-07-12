import React from "react";
import resumePDF from "../Samuel_Iradukunda_Resume.pdf"

const Resume = () => {

  return (
    <object data={resumePDF} type="application/pdf" width="100%" height="1200">
    </object>
  );
};

export default Resume;
