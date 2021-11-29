import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bikeshop from '../../image/bikeshop.png'
import tour1 from '../../image/tour1.png'
import diagnostic from '../../image/disgnostic.png'

const Projects = () => {
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
            <Container style={{ marginTop: '100px' }}>
                  <Typography className={text} style={{ color: 'navy' }} variant='h3'>Projects</Typography>
                  <Grid container spacing={2}>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} sm={12} md={6} lg={4}>

                              <Card sx={{ maxWidth: 345, marginTop: '25px' }}>
                                    <CardMedia
                                          component="img"
                                          height="140"
                                          image={bikeshop}
                                          alt="green iguana"
                                    />
                                    <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                                Bike's Mart
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                                •	User can choose variety of bikes and explore more new bikes
                                                •	Get to know about the specification of every bike and make an order after login into the system and manage their order
                                                •	Dashboard available for both user and admin, admin can add product and manage all orders also remove products.

                                          </Typography>
                                    </CardContent>
                                    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="outlined"><a style={{ textDecoration: 'none' }} href="https://bike-shop-342a4.web.app/" target='_blank' rel="noopener noreferrer" >Live Site</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="contained"><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Fahim-Faysal/Niche-Website-Client-Side" target='_blank' rel="noopener noreferrer" >ClientSide</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px', backgroundColor: '#FF7F7F' }} size="small"><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Fahim-Faysal/Niche-Website-Server-Side" target='_blank' rel="noopener noreferrer" >ServerSide</a>
                                          </Button>

                                    </CardActions>
                              </Card>

                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} sm={12} md={6} lg={4}>

                              <Card sx={{ maxWidth: 345, marginTop: '25px' }}>
                                    <CardMedia
                                          component="img"
                                          height="140"
                                          image={tour1}
                                          alt="green iguana"
                                    />
                                    <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                                Travel Agency
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                                •	Client can get to know about famous destination for travelling
                                                •	Can compare between different packages and get idea about the costing and details of packages
                                                •	Booked a package with proper details and also can manage and delete booked orders


                                          </Typography>
                                    </CardContent>
                                    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="outlined"><a style={{ textDecoration: 'none' }} href="https://travel-agency-da8c1.web.app/" target='_blank' rel="noopener noreferrer" >Live Site</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="contained"><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Fahim-Faysal/TourismWebsite-Client-Side" target='_blank' rel="noopener noreferrer" >ClientSide</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px', backgroundColor: '#FF7F7F' }} size="small"><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Fahim-Faysal/Tourism-Server-Side" target='_blank' rel="noopener noreferrer" >ServerSide</a>
                                          </Button>

                                    </CardActions>
                              </Card>

                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} sm={12} md={6} lg={4}>

                              <Card sx={{ maxWidth: 345, marginTop: '25px' }}>
                                    <CardMedia
                                          component="img"
                                          height="140"
                                          image={diagnostic}
                                          alt="green iguana"
                                    />
                                    <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                                Disgnostic Center
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                                •	Simple site with proper google authentication system
                                                •	People can get to know about many tests and check the details with image
                                                •	In doctors section user can read the doctor profile and know doctors chamber name along with fees
                                          </Typography>
                                    </CardContent>
                                    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="outlined"><a style={{ textDecoration: 'none' }} href="https://diagnostic-center-73404.web.app/" target='_blank' rel="noopener noreferrer" >Live Site</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="contained"><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Fahim-Faysal/Diagnostic-cente" target='_blank' rel="noopener noreferrer" >ClientSide</a>
                                          </Button>


                                    </CardActions>
                              </Card>

                        </Grid>

                  </Grid>

                  {/* <Grid spacing={2} style={{ border: '1px solid green', display: 'flex', justifyContent: 'center' }}>
                        
                        <br /> */}

                  {/* <Grid xs={12} sm={12} md={4} lg={4} >
                              <Card sx={{ maxWidth: 345, marginTop: '25px' }}>
                                    <CardMedia
                                          component="img"
                                          height="140"
                                          image={bikeshop}
                                          alt="green iguana"
                                    />
                                    <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                                Bike's Mart
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                                •	User can choose variety of bikes and explore more new bikes
                                                •	Get to know about the specification of every bike and make an order after login into the system and manage their order
                                                •	Dashboard available for both user and admin, admin can add product and manage all orders also remove products.

                                          </Typography>
                                    </CardContent>
                                    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="outlined"><a style={{ textDecoration: 'none' }} href="https://bike-shop-342a4.web.app/" target='_blank' rel="noopener noreferrer" >Live Site</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px' }} size="small" variant="contained"><a style={{ textDecoration: 'none', color: 'white' }} href="https://bike-shop-342a4.web.app/" target='_blank' rel="noopener noreferrer" >ClientSide</a>
                                          </Button>
                                          <Button style={{ fontSize: '15px', backgroundColor: '#FF7F7F' }} size="small"><a style={{ textDecoration: 'none', color: 'white' }} href="https://bike-shop-342a4.web.app/" target='_blank' rel="noopener noreferrer" >ServerSide</a>
                                          </Button>

                                    </CardActions>
                              </Card>

                        </Grid> */}
                  {/* </Grid> */}


            </Container >
      );
};

export default Projects;