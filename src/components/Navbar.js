import React, { useState } from "react";
import Logo from "./Logo";
import { CgMenuRightAlt } from "react-icons/cg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-primary-700/80 flex justify-between items-center py-6 px-4">
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
    </nav>
  );
}

export default Navbar;
