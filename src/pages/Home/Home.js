import React from 'react';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
      return (
            <div>
                  <Navigation />
                  <Projects />
                  <Contact />
            </div>
      );
};

export default Home;