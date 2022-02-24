import React from 'react';
import Paper from '@mui/material/Paper';
import { Container, Grid, Typography } from '@mui/material';
import { skillSet } from '../../SkillsData/Skill';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'




const Skills = () => {

      return (
            <>
                  <Typography style={{ color: 'navy', fontWeight: 'bolder', margin: '30px' }} variant='h3'>Skills</Typography>
                  <Container
                        sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 128,
                              },
                        }}
                  >
                        {

                              skillSet.map(skill =>
                                    <Paper
                                          key={skill.id} style={{ border: '1px solid green', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={3}>
                                          <motion.div
                                                initial={{ opacity: 0.1 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1, duration: 3 }}
                                          >
                                                <span style={{ fontSize: '30px', color: '#ff0061' }}> {skill?.icon}</span>
                                                <Typography variant='h6'>{skill?.skill}</Typography>
                                          </motion.div>
                                    </Paper>

                              )

                        }

                  </Container>
            </>
      );
};

export default Skills;