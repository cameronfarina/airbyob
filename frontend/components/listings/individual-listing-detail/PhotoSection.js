import React from 'react';

const PhotoSection = () => {

  return (
    <div className="photo-box">
      <img className="big-photo-left" src={window.livingroom} />
      <div className="photos">
        <img className="photo-up-1" src={window.livingroom} />
        <img className="photo-down-1" src={window.livingroom} />
      </div>
      <div className="photos">
        <img className="photo-up-2" src={window.livingroom} />
        <img className="photo-down-2" src={window.livingroom} />
      </div>
    </div>
  )
}

export default PhotoSection;