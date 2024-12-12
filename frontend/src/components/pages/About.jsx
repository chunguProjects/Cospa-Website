import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    about: {
      flexGrow: 1,
      paddingTop: 100,
      backgroundImage: 'linear-gradient(rgba(40, 35, 92, 0.4), rgba(40, 35, 92, 0.4)),url(/images/people5.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
      [theme.breakpoints.down("sm")]: {
          height: "100%",
      },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    aboutus: {
      marginTop: 20,
  },
    
  footer: {
    marginTop: 50,
  },
  logo: {
        height: '40%',
        width: '40%',
       
    },
}))
const About = () => {
    const classes = useStyles();
    return (
      <div className={classes.about}>
        <Header />
          <Container>
           <Grid container>
             <Grid item xs>
        
             </Grid>
        <Grid item xs={12} sm = {6}>
          <Paper className={classes.paper}>
              <Grid>
                  <Grid>
                      <Typography color = "primary" variant = "h5" style = {{marginBottom: 20, fontWeight: "bold"}}>WHO WE ARE</Typography>
                  </Grid>
                  <Grid Container xs = {12}>
                  <Link to = '/'>
                      <img  src = "/images/COSPA PARTNERS.jpg" alt = "Our LOGO" className = {classes.logo}/>
                  </Link>
              </Grid>
                  <Grid>
                      <Typography variant = "body2" className = {classes.aboutus}>
                        COSPA is a ferminist youth led Organisation established
                        in year 2019 in order to respond to the plight of the Malawian youth 
                        who live and grow in high risk environments plagued by Human rights 
                        violation, high rates of HIV/AIDS, political and religious intolerance,
                        poverty, environmental degradation, ignorance, high rate of infectious 
                        diseases and pandemic and lack of youth friendly SRH.
                      </Typography>
                  </Grid>

                  <Grid>
                      <Typography color = "primary" variant = "h5"  style = {{marginTop: 20, fontWeight: "bold"}}>OUR MISSION</Typography>
                  </Grid>

                  <Grid>
                      <Typography variant = 'body2'  className = {classes.aboutus}>
                        COSPA exist to create an environment where girls, women and youth in general live
                        to their potential through Human rights support, Access to SRH, Education, trainings
                        , skills development, health, tolerance, mutual respect, safe environment and health.
                      </Typography>
                  </Grid>

                  <Grid>
                      <Typography color = "primary" variant = 'h5'  style = {{marginTop: 20, fontWeight: "bold"}}>
                          OUR VISSION
                      </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant = "body2"  className = {classes.aboutus} >
                       A Malawian society where girls, women and youth in general meaningfully participate and get involved 
                      in every development of our country
                    </Typography>
                  </Grid>

                  <Grid>
                      <Typography color = "primary" variant = 'h5'  style = {{marginTop: 20, fontWeight: "bold"}}>OUR GOAL</Typography>
                  </Grid>
                  <Grid >
                      <Typography variant = "body2"  className = {classes.aboutus}>
                      To break the barriers created by political, cultural and religious difference in meaningful active
                      participation of the youth in the development of the state
                          
                      </Typography>
                  </Grid>
              </Grid>

          </Paper>
        </Grid>
        <Grid item xs>
          
        </Grid>
        
            
          </Grid>
          
        </Container>
        <div className = {classes.footer}>
          <Footer />
        </div>
     
      </div>
      
    );
};

export default About;
