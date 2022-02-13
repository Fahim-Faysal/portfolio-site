import React from 'react';
import Paper from '@mui/material/Paper';
import { Container, Grid, Typography } from '@mui/material';
import { skillSet } from '../../SkillsData/Skill';


const Skills = () => {

      return (
            <>
                  <Typography style={{ color: 'navy', fontWeight: 'bolder', margin: '30px' }} variant='h3'>Skills</Typography>
                  <Container
                        sx={{
                              display: 'flex',
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
                                    <Paper style={{ border: '1px solid green', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={3}>
                                          <span style={{ fontSize: '30px', color: 'red' }}> {skill?.icon}</span>
                                          <Typography variant='h6'>{skill?.skill}</Typography>
                                    </Paper>

                              )

                        }

                  </Container>
            </>
      );
};

export default Skills;