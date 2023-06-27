import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { designProcessContent, servicesContent } from "../lib/constants";
import FAQ from "../components/FAQ";

import bgVector from "../assets/bgVector.svg";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-6 overflow-x-hidden">
        <div className="py-8 space-y-3 text-center">
          <h1 className="font-grifter font-bold text-3xl tracking-wider leading-tight">
            Designing Websites with a Twist
          </h1>
          <h4 className="uppercase tracking-widest pb-5">
            Where Your Web Vision Comes to Life
          </h4>
          <button className="btn-primary">Let's Chat</button>
        </div>

        <div className="w-full relative">
          <img className="absolute inset-0" src="" alt="" />
          <div className="relative">
            <img src="" alt="" />
          </div>
        </div>

        <div className="">
          <h2 className="text-center font-grifter text-2xl tracking-wider uppercase">
            Transform your online presence with our services
          </h2>
          <div className="flex flex-col gap-y-5 py-10 relative ">
            <div className="absolute inset-0 full-bleed">
              <img className="w-full h-full" src={bgVector} alt="" />
            </div>
            {servicesContent.map(({ title, description }) => (
              <div className="relative rounded-lg space-y-4 p-10 bg-primary-700/70 backdrop-filter backdrop-blur-[25px]">
                <h3 className="uppercase underline font-semibold ">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-800 full-bleed">.</div>

        <div>
          <div className="text-center space-y-3">
            <h2 className="font-grifter tracking-wider text-2xl uppercase">
              Recent Works
            </h2>
            <h4 className="uppercase tracking-widest">
              Discover our most exciting projects yet
            </h4>
            <button className="btn-primary">View our recent works</button>
          </div>
          <div></div>
        </div>

        <div className="">
          <h2 className="font-grifter text-2xl tracking-wider uppercase">
            From Vision to reality: our foolproof design process
          </h2>
          <div className="space-y-6 ">
            {designProcessContent.map(({ title, description }, idx) => (
              <div className="flex gap-x-4 items-start">
                <div className="flex justify-center items-center h-14 w-14 shrink-0 bg-secondary-700 text-primary-700 font-bold rounded-full text-center">
                  <span className="font-bold font-grifter text-3xl">
                    {idx + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold uppercase leading-tight">
                    {title}
                  </h2>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-28 px-10  bg-primary-700 rounded-xl text-center font-grifter space-y-6">
          <h2 className="text-[2rem] uppercase leading-tight tracking-wider">
            Ready to bring your vision to life?
          </h2>
          <button className="btn-primary">Contact Us</button>
        </div>

        <div>
          <h2>FAQ</h2>
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
