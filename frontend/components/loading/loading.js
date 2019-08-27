import React from "react";
import { PulseLoader } from "react-spinners";

const LoadingDots = state => {
  return (
    <div className="react-spinner-container">
      <PulseLoader
        className="loading-dots"
        sizeUnit={"px"}
        size="20"
        color={'#26c4bcce'}
        loading={state.loading}
      />
    </div>
  );
};

export default LoadingDots;
