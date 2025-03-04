import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "./i18n"; // Importa la configuración de i18next
import Aos from "aos";
import "aos/dist/aos.css";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import ResumeNew from "./components/Resume/ResumeNew";
import ResumeOld from "./components/Resume/ResumeOld";

function App() {
   const [load, updateLoad] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         updateLoad(false);
      }, 1300);
      Aos.init();
      return () => clearTimeout(timer);
   }, []);

   return (
      <Router basename="/Portfolio">
         <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Suspense fallback={<div>Loading...</div>}>
               <Navbar />
               <ScrollToTop />
               <Switch>
                  <Route path="/" exact component={Home} />
                  {/* Componente para ver cv y modificarlo */}
                  {/* <Route path="/resume" exact component={ResumeNew} /> */}
                  <Route path="/resume" exact component={ResumeOld} />
               </Switch>
               <Footer />
               <ScrollToTopButton />
            </Suspense>
         </div>
         <Preloader load={load} />
      </Router>
   );
}

export default App;
