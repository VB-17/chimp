import React from "react";

function Hero({ heading, subHeading }) {
  return (
    <div class="font-grifter h-96 text-center mt-10 ">
      <h2 className="text-5xl font-extrabold w-3/4 leading-snug line m-auto">
        {heading}
      </h2>
      <div className="mt-20 flex flex-col items-center gap-5">
        <h4>{subHeading}</h4>
        <button class="bg-[#FFFA64] text-black shadow-[6px_6px_0px_#FFFDB4] rounded-sm px-4 py-2 font-bold text-xl ">
          Let's Chat
        </button>
      </div>
    </div>
  );
}

export default Hero;
