import React from "react";
import banner from "./banner.png";
import play from './Play.png';

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner}  />
        <div >
          <span className="badge  p-2 font-semibold bg-purple-100 text-purple-500 rounded-full"><p className=" bg-purple-100 text-purple-500">•</p> New: AI-Powered Tools Available</span>            
          <h1 className="text-5xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <button className="btn btn-primary rounded-4xl w-fit">
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-4xl ml-2 w-fit">
            <img src={play} alt="logo" className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;