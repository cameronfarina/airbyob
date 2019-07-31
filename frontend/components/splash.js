import React from "react";
import SplashNav from './index_page/SplashNavbar'

export default function splash() {
  return (
    <div >
      <SplashNav  />
      <div className="welcome">
        <img src={window.splash} className="splash" />
      </div>
    </div>
  );
}
