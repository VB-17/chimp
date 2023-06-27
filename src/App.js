import "./App.css";
import Hero7y6 from "./components/Hero";
import Navbar from "./components/Navbar";
import ResponsiveIndicator from "./components/ResponsiveIndicator";
import Work from "./components/Work";

import ComingSoonPage from "./pages/ComingSoonPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="font-montserrat min-h-screen bg-primary-600 text-white">

      {/* <ResponsiveIndicator /> */}
      <ComingSoonPage />
      {/* <BlogPage /> */}
      {/* <ContactPage /> */}

      {/* <HomePage /> */}

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
