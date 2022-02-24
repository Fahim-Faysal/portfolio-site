import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Mail, Edit, AccountCircle, Subject } from '@mui/icons-material';
import { Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'



const Contact = () => {
      const theme = useTheme()
      const useStyles = makeStyles({
            contact: {
                  [theme.breakpoints.down('md')]: {
                        width: '80%',
                  },
            },
            contactBig: {
                  [theme.breakpoints.up('md')]: {
                        width: '50%',
                  },
            },
            buttonStyle: {
                  [theme.breakpoints.down('md')]: {
                        background: 'linear-gradient(45deg,#23a6d5, #23d5ab, #FE6B8B 30%, #FF8E53 90%)'
                  },
                  [theme.breakpoints.up('md')]: {
                        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',

                  },
            },
            text: {
                  [theme.breakpoints.down('md')]: {
                        background: 'linear-gradient(45deg,#23a6d5, #23d5ab, #FE6B8B 30%, #FF8E53 90%)'
                  },
            },

      })

      const { contact, contactBig, buttonStyle, text } = useStyles()


      return (
            <Container id='contact'>

                  <Typography className={text} sx={{ marginTop: '100px', marginBottom: '25px', fontWeight: 'bolder', color: 'navy' }} variant='h3'>Contact</Typography>
                  <form action="https://formsubmit.co/faysalsiyam@gmail.com" method="POST">
                        <Grid>
                              <Grid xs={12} sm={12} lg={12}>
                                    <motion.div
                                          initial={{ y: "-10vh" }}
                                          animate={{ y: 0 }}
                                          transition={{ duration: 4 }}
                                          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                                          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                          <TextField className={`${contactBig} ${contact}`} type='text' name='name'
                                                label="Name" variant="standard" required />
                                    </motion.div>
                                    <br />
                                    <motion.div
                                          initial={{ y: "-10vh" }}
                                          animate={{ y: 0 }}
                                          transition={{ duration: 3 }}
                                          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                                          <Mail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                          <TextField
                                                className={`${contactBig} ${contact}`} type='email' name='email'
                                                label="Email" variant="standard" required />
                                    </motion.div>
                                    <br />
                                    <motion.div
                                          initial={{ y: "-10vh" }}
                                          animate={{ y: 0 }}
                                          transition={{ duration: 2 }}
                                          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                                          <Subject sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                          <TextField className={`${contactBig} ${contact}`} type='text' name='subject'
                                                label="Subject" variant="standard" required />
                                    </motion.div>
                              </Grid>
                              <br />
                              <motion.div
                                    initial={{ y: "-10vh" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Edit sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField
                                          type='text'
                                          name="messeage"
                                          className={`${contactBig} ${contact}`}
                                          // onBlur={handelBlur}
                                          id="standard-multiline-static"
                                          label="Messeage"
                                          multiline
                                          rows={2}
                                          variant="standard"
                                          required
                                    />
                              </motion.div>
                              <br />
                              <Button type='submit' style={{ marginLeft: '28px' }} className={`${contactBig} ${contact} ${buttonStyle}`} variant="contained">Send</Button>
                        </Grid>
                  </form>

            </Container>
      );
};

export default Contact;