import React from 'react';
import ParticleBackground from '../../ParticleBackground';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import Skills from '../Slills/Skills'



const Home = () => {
      return (
            <div>

                  <Navigation />

                  <About />
                  <AboutMe />
                  <Projects />
                  <Skills />
                  <Contact />
                  <Footer />
            </div>
      );
};

export default Home;