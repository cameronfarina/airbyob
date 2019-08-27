import React from "react";

const PhotoSection = () => {
  return (
    <div className="listing-show-photo-container photo-box">
      <img className="big-photo-left" src={window.bedroom} />
      <div className="photos">
        <img className="photo-up-1" src={window.livingroom} />
        <img className="photo-down-1" src={window.pool} />
      </div>
      <div className="photos">
        <img className="photo-up-2" src={window.orange} />
        <img className="photo-down-2" src={window.bedtwo} />
      </div>
    </div>
  );
};

export default PhotoSection;
