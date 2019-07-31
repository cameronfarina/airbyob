import React from "react";
import Splashbar from "./navbar/SplashNavbar";

export default function splash() {
  return (
    <div>
      <div className="welcome">
        <img src={window.splash} className="splash" />
        <Splashbar />
      </div>
    </div>
  );
}
