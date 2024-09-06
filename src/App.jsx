import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="flex justify-center py-6">
          <a
            href="https://drive.google.com/file/d/13nVjsOXevyovuF5w3K4B1OWTxgBs3yku/view?usp=drivesdk"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md text-center transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
