import React, { useState } from "react";
import useCountdown from "../hooks/useCountdown";
import Logo from "../components/Logo";
import toast, { Toaster } from "react-hot-toast";
import { socialLinks } from "../lib/constants";
import CustomToast from "../components/CustomToast";

function ComingSoonPage() {
  const endDate = "2023-06-26";
  const time = useCountdown(Date.parse(endDate));

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit");
    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
      toast.promise(
        fetch("/api/sendEmail", {
          method: "POST",
          body: JSON.stringify({
            email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).catch((err) => {
          console.log(err.message);
          setError(`Error ${err.message}`);
        }),
        {
          loading: "Adding you to our email list 🎉",
          success: "Stay tuned for futher updates",
          error: "Something went wrong",
        }
      );

      setEmail("");
    } else {
      setError("Email is invalid");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Before footer */}
      <div className="grow max-w-screen-md xl:max-w-screen-2xl xl:flex xl:items-center xl:gap-x-60 mx-auto space-y-16 py-10 px-7 xl:px-14">
        {/* left half */}
        <div class="space-y-14 text-center  md:text-left">
          <Logo />
          <div className="space-y-4">
            <h1 className="font-grifter text-3xl md:text-5xl md:leading-tight">
              Be the first to know when we go live.
            </h1>
            <h3 className="tracking-wider">
              Enter your email address below and we'll notify you!
            </h3>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <label for="email" className="sr-only"></label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={email}
                className="bg-primary-600 border-2 border-white/50 text-white text-sm rounded-2xl placeholder:text-white/50 block w-full px-6 py-5"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="mt-14 font-grifter rounded-lg text-xl xl:text-3xl xl:py-3 xl:px-6 tracking-wide py-2 px-4 text-primary-500 bg-secondary-700 shadow-[4px_4px_0px_#FFFDB4]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Right Half */}
        <div className="space-y-6 rounded-3xl text-center bg-secondary-700 p-6 md:p-20 xl:p-10 xl:text-center xl:self-start xl:flex xl:flex-col xl:space-y-10 xl:max-w-lg  ">
          <h2 className="font-grifter text-3xl md:text-5xl tracking-wider text-black">
            Get Ready to Swing with Chimp
          </h2>
          <p className="text-black tracking-widest">
            We're busy creating something amazing. Stay tuned for the launch of
            our new website!
          </p>
          <div className="w-full rounded-3xl p-3 xl:p-5 bg-white shadow-[0_0_30px_rgba(28,28,28,0.5)]">
            <span className="font-grifter text-3xl xl:text-6xl text-black">
              {time}
            </span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black">
        <div className="mt-auto md:flex md:items-start py-5 px-7 md:py-10 md:max-w-screen-lg md:mx-auto xl:max-w-screen-2xl xl:px-14">
          <div className="md:grow">
            <Logo initialHidden />
          </div>
          <div className="ml-auto space-y-6">
            <div className="flex items-center justify-between">
              {socialLinks.map(({ icon, href }) => (
                <div>
                  <a href={href}>{icon}</a>
                </div>
              ))}
            </div>
            <p className="flex flex-col md:flex-row md:gap-x-2">
              <span>&#169; Web Design Chimp 2023.</span>
              <span>All Right Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
