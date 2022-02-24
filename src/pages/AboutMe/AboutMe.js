import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const AboutMe = () => {
      const theme = useTheme()
      const useStyles = makeStyles({
            text: {
                  [theme.breakpoints.down('md')]: {
                        background: 'linear-gradient(45deg,#23a6d5, #23d5ab, #FE6B8B 30%, #FF8E53 90%)'
                  },
            },
      });
      const { text } = useStyles()
      return (
            <Container id='about' style={{ marginTop: '100px' }}>
                  <Typography className={text} style={{ color: 'navy', fontWeight: 'bolder', marginBottom: '50px' }} variant='h3'>About</Typography>
                  <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
                        <Grid style={{ marginTop: '25px' }} xs={12} sm={12} md={6} lg={6}>
                              <Typography style={{ color: 'green', fontWeight: 'bolder' }} variant='h4'>
                                    Fahim Fayal Siyam
                              </Typography>
                              <br />
                              <motion.div
                                    initial={{ x: 200 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                              >
                                    <Typography
                                          style={{ textAlign: 'start' }} variant="body1" gutterBottom component="div">
                                          I am a junior web developer and a learner. I am able to create functional and rsponsive websites for the client. Now I'm mostly focusing on my career and developing my skill in the software engineering sector.Besides web development, I am interested in software quality assurance and the software project management sector.
                                    </Typography>
                              </motion.div>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6}>
                              <motion.div
                                    initial={{ x: -200 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                              >
                                    <Typography style={{ color: 'green', fontWeight: 'bolder' }} variant='h4'>
                                          Find Me on
                                    </Typography>
                                    <br />
                                    <a href="https://www.linkedin.com/in/fahim-faysal-siyam-155486192/" target='_blank' rel='noreferrer'>
                                          <LinkedIn style={{ fontSize: '60px', color: '#0e76a8' }} />
                                    </a>

                                    <a href="https://github.com/Fahim-Faysal" target='_blank' rel="noreferrer">
                                          <GitHub style={{ fontSize: '60px', color: 'black' }} />
                                    </a>

                                    <a href="https://twitter.com/FaysalSiyam" target="_blank" rel="noreferrer">
                                          <Twitter style={{ fontSize: '60px', color: '#44a6c6' }} />
                                    </a>
                                    <a href="https://www.facebook.com/Fahim.Faysal.Siyam/" target='_blank' rel="noreferrer"> <Facebook style={{ fontSize: '60px', color: '#00008B' }}></Facebook></a>

                                    <br />
                                    <Button href="#contact" style={{ marginTop: '10px', padding: '10px', width: '50%' }} variant="contained" size="large">
                                          Contact
                                    </Button>
                              </motion.div>

                        </Grid>
                  </Grid>
            </Container>
      );
};

export default AboutMe;