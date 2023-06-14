import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-6">
        <h1 className="font-grifter text-3xl text-center">
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
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <h4>08 May 2023</h4>
            <h4>Pranjal Upadhyay</h4>
          </div>
          <div>
            <h2>The power of User Experience in Web Design</h2>
            <p>
              As technology advances, websites have become an essential tool for
              businesses to reach their target audience. However, simply having
              a website isn't enough to guarantee success...
            </p>
            <button>

            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Recent Posts</h2>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <h4>08 May 2023</h4>
              <h3>The Power of Good Web Design for..</h3>
              <p>Pranjal Upadhyay</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Reading to bring your visiong to life</h2>
        <button>Contact Us</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
