import React from "react";

const CardSection = () => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">Dolor sit amet</p>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">Dolor sit amet</p>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;