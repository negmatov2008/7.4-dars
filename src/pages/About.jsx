import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-[90%] md:max-w-[40%] mx-auto text-3xl md:text-4xl font-bold mt-[10%]">
      You just take phote and download this photo with our website
      <span className="text-2xl bg-slate-400 p-1 ml-2 text-[#fff] rounded font-semibold">
        <Link to={"/photo"}> /photo</Link>
      </span>
    </div>
  );
}

export default About;
