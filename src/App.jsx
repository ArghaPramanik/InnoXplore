import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import UnderConstruction from "./components/UnderConstruction";

const App = ({ toast }) => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Define routes here */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero showToast={toast} />
              <Benefits />
              <Collaboration />
              <Services />
              <Pricing />
              <Roadmap />
            </>
          } />
          <Route path="/under-construction" element={<UnderConstruction />} /> {/* Route for Under Construction page */}
        </Routes>

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
