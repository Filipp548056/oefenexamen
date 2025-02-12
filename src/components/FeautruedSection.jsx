import React from "react";

const FeatureSection = ({ title, image, text }) => {
  return (
    <div className="container-fluid my-5 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={image} alt={title} style={{ width: "300px" }} />
        </div>
        <div className="col-md-6">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;