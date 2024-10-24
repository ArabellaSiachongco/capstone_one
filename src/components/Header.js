import React from "react";
import LandingPage from "./LandingPage";
import Sunflower from "../assets/sunflower.png";
import Blindfold_Woman from "../assets/blindfold_woman.png";

const Header = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src={Sunflower} 
        alt="High Resolution Responsive"
        loading="lazy"
        className="absolute right-0 top-0 w-full h-full object-cover z-0" 
      />
      <div className="relative z-10">
       <LandingPage/>
      </div>
      <img 
        src={Blindfold_Woman} 
        alt="High Resolution Responsive"
        loading="lazy"
        className="absolute right-0 top-0 w-full h-full object-cover z-10" 
      />
    </div>
  );
}

export default Header;
