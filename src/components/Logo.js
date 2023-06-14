import React from "react";

function Logo({ initialHidden }) {
  return (
    <div
      className={`${
        initialHidden && "hidden md:inline-block" 
      } bg-black inline-block border-2 rounded-md py-1 px-2 shadow-[4px_4px_0px_#fff]`}
    >
      <h2 className="text-xl md:text-3xl tracking-wide font-poppins font-extrabold uppercase">
        Chimp
      </h2>
    </div>
  );
}

export default Logo;
