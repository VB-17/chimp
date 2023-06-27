import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-screen-md xl:max-w-screen-2xl mx-auto">
        <div className="px-6 py-10">
          <div className="space-y-2 text-center mb-16">
            <h1 className="font-grifter text-3xl ">
              Let's Swing Into Action! Contact Web Design Chimp <span></span>
            </h1>
            <h4 className="tracking-wider text-base">
              How can our team of experts make your web dreams a reality?
            </h4>
          </div>

          <form className="space-y-7 flex flex-col">
            <div className="">
              <label
                for="name"
                className="ml-1 block mb-2 text-base font-extrabold font-grifter tracking-widest text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="form-input block p-4 w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="">
              <label
                for="email"
                className="ml-1 block mb-2 text-base font-extrabold font-grifter tracking-widest text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-input block p-4 w-full"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="">
              <label
                for="company-name"
                className="ml-1 block mb-2 text-base font-extrabold font-grifter tracking-widest text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company-name"
                className="form-input block p-4 w-full"
                placeholder="Enter the name of your company (optional)"
                required
              />
            </div>
            <div className="">
              <label
                for="phone-number"
                className="ml-1 block mb-2 text-base font-extrabold font-grifter tracking-widest text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone-number"
                className="form-input block p-4 w-full"
                placeholder="Enter the name of your phone number"
                required
              />
            </div>
            <div>
              <label
                for="message"
                class="ml-1 block mb-2 text-base font-extrabold font-grifter tracking-widest text-gray-900 dark:text-white"
              >
                Project Details
              </label>
              <textarea
                id="message"
                rows="6"
                className="form-input block p-4 w-full"
                placeholder="Tell us all about your project, goals, and aspirtaions"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary self-center">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
