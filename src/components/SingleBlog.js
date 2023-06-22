import React from "react";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import blogImg from "../assets/images/sampleBlog.png";

function SingleBlog() {
  return (
    <div className="bg-primary-800 py-2.5 px-3 rounded-3xl">
      <div className="flex gap-x-4 items-center">
        <img className="w-28 rounded-3xl" src={blogImg} alt="" />
        <div className="grow ">
          <h4 className="text-xs tracking-wider mb-2 font-semibold text-secondary-700">
            08 May 2023
          </h4>
          <h3 className="font-grifter leading-tight">
            The Power of Good Web Design for..
          </h3>
          <div className="flex items-center justify-between">
            <p3 className="text-xs tracking-widest font-semibold text-secondary-700">
              Pranjal Upadhyay
            </p3>
            <button className="bg-secondary-700 p-1.5 rounded-full">
              <Arrow className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
