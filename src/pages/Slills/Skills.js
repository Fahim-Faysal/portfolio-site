import React from 'react';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import { Javascript } from '@mui/icons-material';

const Skills = () => {
      return (
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
                  <Paper style={{ border: '1px solid green', display: 'flex', justifyContent: 'center', alignItems: 'center' }} elevation={3}>
                        <Javascript />
                        <Typography>Javascript</Typography>
                  </Paper>
                  <Paper elevation={3} />
                  <Paper elevation={3} />
            </Container>
      );
};

export default Skills;