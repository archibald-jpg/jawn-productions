import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import Capabilities from "./components/Capabilities/Capabilities";
import Process from "./components/Process/Process";
import Audience from "./components/Audience/Audience";
import Promotion from "./components/Promotion/Promotion";
import TestList from "./components/TestList/TestList";
import Footer from "./components/Footer/Footer";
import DevPanel from "./components/DevPanel/DevPanel";
import "./styles/globals.css";

function App() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Intro />
        <Work />
        <Capabilities />
        <Process />
        <Audience />
        <Promotion />
        <TestList />
      </main>
      <Footer />
      <DevPanel />
    </div>
  );
}

export default App;