import React from 'react';
import { PulseLoader } from 'react-spinners';

const LoadingDots = (state) => {
  return (
    <div className="react-spinner-container">
      <PulseLoader
        className="loading-dots"
        sizeUnit={"px"}
        size={12}
        color={'#008489'}
        loading={state.loading}
      />
    </div>
  )
};

export default LoadingDots;