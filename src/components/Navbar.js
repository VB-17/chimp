import React, { useState } from "react";
import Logo from "./Logo";
import { CgMenuRightAlt } from "react-icons/cg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-primary-700/80  px-4 py-5">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div>
          <CgMenuRightAlt className=" h-8 w-8" />
        </div>
        <ul className="hidden">
          <li>Home</li>
          <li>Services</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
