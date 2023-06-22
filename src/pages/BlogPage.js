import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import blogImg from "../assets/images/sampleBlog.png";
import SingleBlog from "../components/SingleBlog";

function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="px-4 space-y-12 max-w-screen-2xl mx-auto">
        <div className="pt-14 text-center space-y-10">
          <h1 className="font-grifter text-4xl leading-tight xl:text-5xl xl:leading-snug tracking-wide">
            Unleash Your Web Design Creativity: Insights, Tips, and Tricks from
            Web Design Chimp
          </h1>
          <h3>
            Stay Up-to-Date with the latest Web Design Trends and Best Practices
          </h3>
          <div>
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full xl:max-w-5xl xl:mx-auto">
              <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-white/[0.05] border border-primary-400 text-white text-sm rounded-full  block w-full px-12 py-4 placeholder:tracking-widest"
                placeholder="Search"
                required
              />
            </div>
          </div>
        </div>
        <div className="md:flex  bg-primary-800 rounded-3xl space-y-3 p-4">
          <div className="w-full">
            <img
              className="lg:h-96 md:h-80 w-full object-cover rounded-xl"
              src={blogImg}
              alt=""
            />
          </div>
          <div className="px-6 py-4">
            <div className="flex justify-between mb-3">
              <h4 className="text-xs font-bold text-secondary-700 tracking-wider">
                08 May 2023
              </h4>
              <h4 className="text-xs font-bold text-secondary-700 tracking-wider">
                Pranjal Upadhyay
              </h4>
            </div>
            <div className="flex flex-col gap-y-5">
              <h2 className="font-grifter text-xl leading-tight">
                The power of User Experience in Web Design
              </h2>
              <p className="font-sourceSerif">
                As technology advances, websites have become an essential tool
                for businesses to reach their target audience. However, simply
                having a website isn't enough to guarantee success...
              </p>
              <button className=" bg-secondary-700 self-end p-3 rounded-full ">
                <Arrow className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-grifter text-2xl text-secondary-700 tracking-wider">
            Recent Posts
          </h2>
          {[1, 2, 3, 4].map((i) => (
            <SingleBlog />
          ))}
        </div>
        <div className="py-28 px-10  bg-primary-700 rounded-xl text-center font-grifter space-y-6">
          <h2 className="text-[2rem] uppercase leading-tight tracking-wider">
            Ready to bring your vision to life?
          </h2>
          <button className="bg-secondary-700 rounded-lg py-3 px-2 text-primary-500 shadow-[4px_4px_0px_#FFFDB4]">
            Contact Us
          </button>
        </div>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <SingleBlog />
          ))}
        </div>
      </div>
      <div className="mt-10 text-white">
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
