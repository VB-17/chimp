import React from "react";
import BoxImage from "../assets/Boxes.svg";

function Work() {
  return (
    <div className="relative full-bleed bg-red-300 overflow-x-hidden">
      <img src={BoxImage} className="w-full" alt=" background" />
      <div className="absolute inset-0 flex gap-1">
        {[2, 3, 4].map((i) => (
          <div className="">
            <img
              className="w-full object-cover"
              src={`/Tablet/Work IMG 0${i}.png`}
              alt={`Work img ${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
