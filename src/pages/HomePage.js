import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { designProcessContent, servicesContent } from "../lib/constants";
import FAQ from "../components/FAQ";

import scribble from "../assets/scribble.svg";
import Boxes from "../assets/images/Boxes.png";
import bgVector from "../assets/bgVector.svg";
import Works from "../assets/images/Works.png";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 xl:max-w px-6 overflow-x-hidden space-y-8">
        <div className="py-6 space-y-3 text-center">
          <h1 className="mx-auto text-4xl fo max-w-screen-lg leading-tight relative">
            Designing Websites with a Twist
            {/* <span className="inline-block relative after:content-scribble after:absolute after:h-14 after:w-14 after: after:right-0 after:-bottom-10  after:bg-red-600">
              Twist
            </span> */}
          </h1>
          <h4 className="uppercase tracking-widest pb-5">
            Where Your Web Vision Comes to Life
          </h4>
          <button className="btn-primary">Let's Chat</button>
        </div>

        <div className="full-bleed relative">
          <img
            className="absolute h-full w-full object-fill"
            src={Boxes}
            alt=""
          />
          <img className="relative w-full py-14" src={Works} alt="" />
        </div>

        <div className="">
          <h2 className="max-w-screen-lg mx-auto text-2xl text-center">
            Transform your online presence with our services
          </h2>
          <div className="flex flex-col gap-y-8 py-10 relative md:flex-row md:flex-wrap md:justify-around">
            <div className="absolute inset-0 full-bleed">
              <img className="w-full h-full" src={bgVector} alt="" />
            </div>
            {servicesContent.map(({ title, description }) => (
              <div className="relative rounded-lg space-y-4 px-10 py-14 bg-primary-700/70 backdrop-filter backdrop-blur-[25px] md:max-w-md">
                <h3 className="uppercase underline font-semibold ">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-primary-800 full-bleed">.</div> */}

        <div>
          <div className="text-center space-y-3">
            <h2 className="text-2xl">Recent Works</h2>
            <h4 className="uppercase tracking-widest">
              Discover our most exciting projects yet
            </h4>
            <button className="btn-primary">View our recent works</button>
          </div>
          <div className="grid grid-cols-1 gap-6  py-10">
            
              {[5, 6, 3, 2].map((i) => (
                <img className="" src={require(`../assets/images/work-img-0${i}.png`)} />
              ))}
            
          </div>
        </div>

        <div className="md:flex md:justify-between md:items-start">
          <h2 className="text-2xl text-center max-w-lg md:text-3xl md:text-left ">
            From Vision to reality: our foolproof design process
          </h2>
          <div className="space-y-6 md:space-y-12 md:sticky md:bottom ">
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

        <div className="py-10 ">
          <h2 className="text-2xl text-center">FAQ</h2>
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
