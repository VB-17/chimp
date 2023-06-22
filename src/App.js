import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ResponsiveIndicator from "./components/ResponsiveIndicator";
import Work from "./components/Work";

import ComingSoonPage from "./pages/ComingSoonPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="font-montserrat min-h-screen bg-primary-600 text-white">

      {/* <ResponsiveIndicator /> */}
      <ComingSoonPage />
      {/* <BlogPage /> */}

      {/* <div className="wrapper border-2  border-red-600">
        <Navbar />
        <main className="">
          <Hero
            heading={"Designing Websites With a Twist"}
            subHeading={" Where your web Vision Comes to Life"}
          />
          <Work />
        </main>
      </div> */}
    </div>
  );
}

export default App;
