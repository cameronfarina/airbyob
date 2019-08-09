import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel showThumbs={false} autoPlay>
    <div>
      <img src={window.orange} />
    </div>
    <div>
      <img src={window.bedroom} />
    </div>
    <div>
      <img src={window.livingroom} />
    </div>
    <div>
      <img src={window.pool} />
    </div>
    <div>
      <img src={window.bedtwo} />
    </div>
  </Carousel>
);
