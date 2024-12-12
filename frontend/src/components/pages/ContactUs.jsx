import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
    contact: {
        flexGrow: 1,
        paddingTop: 100,
        backgroundImage: 'linear-gradient(rgba(40, 35, 92, 0.4), rgba(40, 35, 92, 0.4)),url(/images/people8.jpg)',
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
      form: {
        margin: theme.spacing(1),
        width: 250,
        marginLeft: 100,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 20,
            marginTop: 0,
        }
        
    },

    detail: {
        color: "grey",

    },

    data: {
        fontSize: 20,
        [theme.breakpoints.down("sm")]: {
            fontSize: 15,
        },
    },
    textinput: {
        marginTop: 20,
         width: 300, 
         backgroundColor: "#fbfbf4",
         [theme.breakpoints.down("sm")]: {
             width: 250,
         },
    },
    footer: {
        marginTop: 50,
    }
}))


const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.contact}>
            <Header />
            <Container>
           <Grid container>
               <Grid item xs>

               </Grid>

               <Grid item xs = {12} sm = {6}>
                   <Paper className = {classes.paper}>
                        <Grid>
                            <Typography variant = "h5" color = "primary" style = {{fontWeight: "bold"}}>CONTACT DETAILS</Typography>
                        </Grid>

                        <Grid style = {{marginTop: 50}}>
                            <Typography variant= "body2" color = "primary" className = {classes.data}>
                            <span className= {classes.detail}>Organisation Name:</span> Community Support of
                                 People with Albisim
                             <br />
                             <span className= {classes.detail}>Contact:</span> (+265 99 180 32 14){" "}

                             <br />
                             <span className= {classes.detail}>Email:</span> {"   "} <Link>
                                 cospa@gmail.com
                                </Link>
                                <br />
                                <span className= {classes.detail}>Address:</span> {" "} P.O Box 25, Malomo Ntchisi.   
                                                     
                            
                                <br />
                                <span className= {classes.detail}>Physical Address: </span> {"  "} Malomo Ntchisi Malawi
                                 <br />
                                 <br />
                                 </Typography>
                                 </Grid>

                                <Grid>                      
                             
                             <form autoComplete = 'off' className = {classes.form}>
                             <Typography>Contact Form</Typography>
                                <TextField 
                            
                                id="outlined-basic" 
                                label="Enter Your Email" 
                                variant = "outlined"
                                size = "small"
                                className= {classes.textinput}
                              
                                />
                                <TextField
                                
                                    id="outlined-multiline-static"
                                    label="Write massage"
                                    multiline
                                    rows={2}
                                    variant="outlined"
                                    fullWidth
                                    className= {classes.textinput}
                                   
                                
                                    />
                                    <Button size = "large" variant ='contained' color = 'primary' style = {{marginTop: 12, marginLeft: 0}} >SEND</Button >
                            </form>
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
    )
}

export default ContactUs
