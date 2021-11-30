import { Container, Grid } from '@mui/material';
import React from 'react';
import Typewriter from 'typewriter-effect';
import profie from '../../image/profile .png'
// import ParticleBackground from '../../ParticleBackground';


const About = () => {
      return (
            <Container id='home' style={{ marginTop: '100px', fontSize: '50px', fontWeight: '900' }}>

                  <Grid container spacing={2}>
                        <Grid style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'start', marginBottom: '25px' }} item xs={12} sm={12} md={6} lg={6}>
                              <h4 style={{ fontWeight: '900' }}>Hi <br />I am <br /><span style={{ color: '#A2C93A' }}>Fahim Faysal Siyam</span></h4>
                              <Typewriter
                                    options={{
                                          strings: ['Web Developer'],
                                          autoStart: true,
                                          loop: true,
                                          pauseFor: 3000,
                                    }}
                              />
                        </Grid>
                        <Grid style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }} xs={12} sm={12} md={6} lg={6}>
                              <img style={{ width: '350px', height: '300px', border: '1px solid green', borderRadius: '2em 1em 4em / 0.5em 3em', background: 'linear-gradient(to top, #fdfbfb 0%, #ebedee 0%)' }} src={profie} alt="" />
                        </Grid>
                  </Grid>

            </Container>
      );
};

export default About;