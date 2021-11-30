import { AppBar, Button, Grid, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Assignment, ContactMail, Home, Info, PostAdd, Psychology } from '@mui/icons-material';



const Navigation = () => {
      const theme = useTheme()
      const useStyles = makeStyles({
            wholeNav: {
                  [theme.breakpoints.down('md')]: {
                        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                        backgroundSize: '400% 400 %',
                        animation: 'gradient 1s ease infinite',

                  },
            },
            navigation: {
                  textDecoration: 'none',
            },
            icon: {
                  [theme.breakpoints.up('md')]: {
                        display: 'none !important'
                  },
            },
            name: {
                  [theme.breakpoints.down('md')]: {
                        textAlign: 'right !important'

                  },
            },
            navItem: {
                  [theme.breakpoints.down('md')]: {
                        display: 'none !important'
                  },
            },

      });

      const { icon, name, navItem, wholeNav } = useStyles()

      const [state, setState] = React.useState(false);

      const list = (
            <Box
                  sx={{ width: 250 }}
                  role="presentation"
            >
                  <List>
                        <ListItem onClick={() => setState(false)} button>
                              <ListItemIcon>
                                    <Home />
                              </ListItemIcon>
                              <Button style={{ color: 'black' }}><a href='#home' style={{ textDecoration: 'none', color: 'black' }}>Home</a></Button>
                        </ListItem>
                        <ListItem onClick={() => setState(false)} button>
                              <ListItemIcon>
                                    <Info />
                              </ListItemIcon>
                              <Button style={{ color: 'black' }}><a href='#about' style={{ textDecoration: 'none', color: 'black' }}>About</a></Button>

                        </ListItem>
                        <ListItem onClick={() => setState(false)} button>
                              <ListItemIcon>
                                    <PostAdd />
                              </ListItemIcon>
                              <Button color="inherit"><a style={{ textDecoration: 'none', color: 'black' }} href="https://drive.google.com/uc?id=1bjRV9K5l5LCzCESKXg0JRqAUL3xCf2oA&export=download" download="Fahim Faysal Siyam">Resume</a></Button>
                        </ListItem>
                        <ListItem onClick={() => setState(false)} button>
                              <ListItemIcon>
                                    <Psychology />
                              </ListItemIcon>
                              <Button color="inherit">Skill</Button>
                        </ListItem>
                        <ListItem onClick={() => setState(false)} button>
                              <ListItemIcon>
                                    <Assignment />
                              </ListItemIcon>
                              <Button color="inherit"><a href="#project" style={{ textDecoration: 'none', color: 'black' }}>Projects</a></Button>

                        </ListItem>
                        <ListItem onClick={() => setState(false)} button>
                              <ListItemIcon>
                                    <ContactMail />
                              </ListItemIcon>
                              <Button color="inherit"><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a></Button>
                        </ListItem>

                  </List>
                  <Divider />
            </Box>
      );
      return (
            <>
                  <Box sx={{ flexGrow: 1 }} >
                        <AppBar position="fixed">
                              <Toolbar className={wholeNav} style={{ backgroundColor: 'white', color: 'black' }}>
                                    <Grid style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                          <Grid xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton
                                                      size="large"
                                                      edge="start"
                                                      color="inherit"
                                                      aria-label="menu"
                                                      sx={{ mr: 2 }}
                                                      className={icon}
                                                      onClick={() => setState(true)}
                                                >
                                                      <MenuIcon />
                                                </IconButton>
                                                <Typography sx={{ flexGrow: 1, fontWeight: '800', color: 'navy' }} className={name} variant="h5" >Fahim Faysal Siyam</Typography>
                                          </Grid>
                                          <Grid className={navItem} xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Button style={{ color: 'black' }}><a href='#home' style={{ textDecoration: 'none', color: 'black' }}>Home</a></Button>
                                                <Button style={{ color: 'black' }}><a href='#about' style={{ textDecoration: 'none', color: 'black' }}>About</a></Button>
                                                <Button color="inherit"><a style={{ textDecoration: 'none', color: 'black' }} href="https://drive.google.com/uc?id=1bjRV9K5l5LCzCESKXg0JRqAUL3xCf2oA&export=download" download="Fahim Faysal Siyam">Resume</a></Button>
                                                <Button color="inherit">Skill</Button>
                                                <Button color="inherit"><a href="#project" style={{ textDecoration: 'none', color: 'black' }}>Projects</a></Button>
                                                <Button color="inherit"><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a></Button>

                                          </Grid>
                                    </Grid>
                              </Toolbar>
                        </AppBar>
                  </Box >

                  <div>
                        <React.Fragment>
                              <Drawer
                                    open={state}
                                    onClose={() => setState(false)}
                              >
                                    {list}
                              </Drawer>
                        </React.Fragment>
                  </div>
            </>
      );
};

export default Navigation;