import React from "react";

const SpinnerApp = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerApp;
