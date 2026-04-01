import React from "react";
import banner from "./banner.png";
import play from './Play.png';

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} />
        <div>
          <h1 className="text-5xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <button className="btn btn-primary rounded-4xl">
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-4xl ml-2">
            <img src={play} alt="logo" className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;