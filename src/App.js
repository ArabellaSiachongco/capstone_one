import React from "react";
import './App.css'
import './index.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Helena from "./components/Helena";
import MissionVision from "./components/AboutUs";
// import LegalMatching from "./components/LegalMatching";
// import InformationResources from "./components/Information";
// import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-site-bg min-h-screen text-white">
      <Navbar/>
      <Header />
      <Helena /> 
      <MissionVision />
      {/* <LegalMatching /> */}
      {/* <InformationResources /> */}
      {/* <Subscription /> */}
      <Footer />
    </div>
  );
}

export default App;