import React from 'react';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
      return (
            <div>
                  <Navigation />
                  <About />
                  <AboutMe />
                  <Projects />
                  <Contact />
                  <Footer />
            </div>
      );
};

export default Home;