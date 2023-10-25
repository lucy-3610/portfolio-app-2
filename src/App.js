import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage';
import ProjectInfo from './components/ProjectInfo';
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

import ibwc from './images/Projects/IBWC.png';
import bchs from './images/Projects/BCHS_cropped.png';
import buckeye from './images/Projects/Buckeye_Blueprint.png';
import chemours from './images/Projects/Chemours.png';
import titanium from './images/Projects/Titanium_Yoga.png';
import culliton from './images/Projects/Culliton Channel Consulting.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  // let totl_images = [{ id: 7, imageName: cardhub, link: "/cardhub", alt: "Cardhub App" }, { id: 8, imageName: totl, link: "/totl", alt: "Tea on the Loose Packaging" }, { id: 9, imageName: dreams, link: "/book-covers", alt: "Interpretation of Dreams Book Cover" }, { id: 1, imageName: jpl, link: "/jpl", alt: "Jacksonville Public Library Social Media" }, { id: 2, imageName: coe22, link: "/coe22", alt: "Church of Eleven22 Social Media" }, { id: 3, imageName: pbts, link: "/pbts", alt: "Players by the Sea Website" }, { id: 4, imageName: purl, link: "/purl", alt: "Purl Adoption Advisory Profile Book" }, { id: 5, imageName: accountability_counsel, link: "/accountability-counsel", alt: "Accountability Counsel Annual Report" }, { id: 6, imageName: ecc, link: "/ecc", alt: "Elaine Clark Center Brochure" }];
  // let book_images = [{ id: 98, imageName: totl }, { id: 99, imageName: dreams }, { id: 91, imageName: jpl }, { id: 92, imageName: coe22 }, { id: 93, imageName: pbts }, { id: 94, imageName: purl }, { id: 95, imageName: accountability_counsel }, { id: 96, imageName: ecc }, { id: 97, imageName: cardhub }];
  // let portfolio_images = [{ id: 97, imageName: ibwc }, { id: 98, imageName: bchs }, { id: 99, imageName: buckeye }, { id: 91, imageName: chemours }, { id: 92, imageName: titanium }, { id: 93, imageName: culliton }];
  // let totl_images = [{ id: 98, imageName: jpl }];
  // let book_images = [{ id: 98, imageName: jpl }];

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Redirect from="/portfolio-app" to="/" /> */}
          {/* <Route exact path="/">
            <LandingPage />
          </Route> */}
          <Route
            exact path="/"
            render={(props) => (
              <LandingPage />
            )}
          />
          <Route
            path='/portfolio'
            render={(props) => (
              <Portfolio />
            )}
          />
          <Route
            path='/ibwc'
            render={(props) => (
              <ProjectInfo start={1} project={"International Boundary and Water Commission"} images={[{ id: 1, imageName: ibwc, alt: "International Boundary and Water Commission mockup" }]} languages={["WordPress", "Beaver Builder"]} features={["Press Releases", "Custom Post Types", "Photo Galleries", "Calendar", "Search"]} url={"https://www.ibwc.gov/"} />
            )}
          />
          <Route
            path='/bchs'
            render={(props) => (
              <ProjectInfo start={2} project={"Wildcat Football Booster Club"} images={[{ id: 2, imageName: bchs, alt: "Wildcat Football Booster Club mockup" }]} languages={["WordPress", "Bootstrap"]} features={["Social Media Feeds", "Photo Gallery", "Forms", "Calendar", "Google Maps"]} url={"https://www.bcwildcatsfootball.com/"} />
            )}
          />
          <Route
            path='/buckeye'
            render={(props) => (
              <ProjectInfo start={3} project={"Buckeye Blueprint"} images={[{ id: 3, imageName: buckeye, alt: "Buckeye Blueprint mockup" }]} languages={["WordPress", "Bootstrap"]} features={["Forms", "Blog", "Search", "Custom Post Types"]} url={"https://buckeyeblueprint.com/"} />
            )}
          />
          <Route
            path='/chemours'
            render={(props) => (
              <ProjectInfo start={4} project={"Chemours Neighbors"} images={[{ id: 4, imageName: chemours, alt: "Chemours Neighbors mockup" }]} languages={["WordPress", "Bootstrap"]} features={["Forms", "Blog", "Search", "Custom Post Types"]} url={"https://www.chemoursneighbors.com/"} />
            )}
          />
          <Route
            path='/titanium'
            render={(props) => (
              <ProjectInfo start={5} project={"Titanium Yoga"} images={[{ id: 5, imageName: titanium, alt: "Titanium Yoga mockup" }]} languages={["WordPress", "Bootstrap"]} features={["Forms", "Blog", "Search", "Custom Post Types"]} url={"https://www.titaniumyoga.com/"} />
            )}
          />
          <Route
            path='/culliton'
            render={(props) => (
              <ProjectInfo start={6} project={"Culliton Channel Consulting"} images={[{ id: 6, imageName: culliton, alt: "Culliton Channel Consulting mockup" }]} languages={["React", "Bootstrap"]} features={["Forms", "Blog", "Search", "Custom Post Types"]} url={"https://cullitonchannelconsulting.com/"} />
            )}
          />
          <Route path="/about" component={About}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
