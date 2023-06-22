import React from "react";

function Logo({ initialHidden, variant }) {
  const size = variant === "big" ? "text-[2rem]" : "text-xl md:text-3xl";
  
  return (
    <div
      className={`${
        initialHidden && "hidden md:inline-block"
      } bg-black leading-tight inline-block border-2 rounded-md py-0.5 px-2  shadow-[4px_4px_0px_#fff]`}
    >
      <h2
        className={`${size} tracking-wide font-poppins font-extrabold uppercase`}
      >
        Chimp
      </h2>
    </div>
  );
}

export default Logo;
