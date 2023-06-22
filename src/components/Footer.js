import React from "react";
import { footerLinks, socialLinks } from "../lib/constants";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-black p-6 ">
      <div className="max-w-screen-2xl mx-auto space-y-9 md:px-2 md:flex md:flex-row-reverse md:justify-between md:items-stretch">
        <div className="xl:max-w-2xl xl:columns-2 space-y-4 ">
          <div className="flex flex-col gap-y-4">
            {footerLinks.slice(0, 4).map((link) => (
              <a
                className="uppercase tracking-widest font-bold"
                href="#"
                target="_blank"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-y-4">
            {footerLinks.slice(4).map((link) => (
              <a
                className="uppercase tracking-widest font-bold"
                href="#"
                target="_blank"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-7 max-w-md md:self-start md:mb-auto">
          <Logo variant={"big"} />
          <div className="space-y-4">
            <p>Web Design Chimp is headquartered in New delhi, india</p>
            <p>hello@webdesignchimp.com</p>
          </div>
          <div className="flex justify-between items-center">
            {socialLinks.map(({ icon, href }) => (
              <div>
                <a href={href}>{icon}</a>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <span>© Web Design Chimp 2023.</span>
            <span>All right reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
