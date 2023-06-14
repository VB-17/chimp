import React from "react";
import useCountdown from "../hooks/useCountdown";
import Logo from "../components/Logo";

function ComingSoonPage() {
  const endDate = "2023-06-20";
  const time = useCountdown(Date.parse(endDate));

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
            <input
              type="text"
              placeholder="Enter email adderess"
              id="default-input"
              class="bg-primary-600 border-2 border-white/50 text-white text-sm rounded-2xl placeholder:text-white/50 block w-full px-6 py-5"
            />
          </div>
          <button className="font-grifter rounded-lg text-xl xl:text-3xl xl:py-3 xl:px-6 tracking-wide py-2 px-4 text-primary-500 bg-secondary-700 shadow-[4px_4px_0px_#FFFDB4]">
            Submit
          </button>
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
            <div className="flex justify-between">
              {["insta", "behance", "dribble", "pinterest", "linkedin"].map(
                (i) => (
                  <img
                    className="h-6 w-6"
                    src={require(`../assets/icons/${i}.svg`)}
                    alt={`${i}-logo`}
                  />
                )
              )}
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
