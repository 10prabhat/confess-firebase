import React from "react";
import userTitle from "../hooks/userTitle";

const About = () => {
  userTitle("About | Page");
  return (
    <div>
      <div className="heading w-[28%] mt-24 m-auto">
        <img src="/123.jpg" alt="" className="w-[80%] rounded-xl m-auto" />
        <div className="text mt-2 w-2/3 m-auto">
          <h1 className="font-bold text-3xl z-10">Prabhat Bishwakarma
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
