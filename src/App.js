import "./App.css";

// Import Components
import Banner from "./components/Banner/banner.jsx";
import Proyects from "./components/Proyects/projects.jsx";
import About from "./components/About/about.jsx";
import Contact from "./components/Contact/contact.jsx";
import Marquee from "./components/Marquee/marquee.jsx";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Banner/>
        <Marquee />
        <Proyects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
