import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(1),
        width: 250,
        marginLeft: 100,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 20,
            marginTop: 0,
        }
        
    },
    content: {
       backgroundColor: '#2b4d71',
       
    },
    ul:{
        listStyle: 'none',
        color: 'white',
        textDecoration: 'none',
        fontSize: 20,
        cursor: 'pointer',

    },

    link:{
        color: 'white',
        textDecoration: 'none',
    },
    title: {
        paddingTop: 0,
        marginTop: 0,
    },

}));

function Copyright() {
    return (
      <Typography
        variant="body2"
        style={{ color: "#fff", paddingBottom: "10px" }}
        align="center"
      >
        {"Copyright © "}
        COMMUNITY SUPPORT OF PEOPLE WITH ALBINISM {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

const Footer = () => {

    const classes = useStyles();
    return (

 
     <Grid  container style = {{ backgroundColor: '#2b4d71',}}>
         
         <CssBaseline />

         <Grid sm = {6} xs = {12}
         justifyContent="center"
         alignItems="center"
        style = {{padding: 30}}
         >
             <Typography variant = 'h5'  style = {{color: 'white'}}>Quick Links</Typography>
            <ul className = {classes.ul}>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>About Us</Link></li>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>News Updates</Link></li>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>Activities</Link></li>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>Email Us</Link></li>
            </ul>
            <Typography variant = 'h5'  style = {{color: 'white'}}>Follow Us </Typography>
            <ul className = {classes.ul}>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>Facebook</Link></li>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>Instagram</Link></li>
                <li className = {classes.li}><Link to = '/' className = {classes.link}>Twitter</Link></li>
               
            </ul>

         </Grid>

         <Grid sm = {6} xm = {12} 
          justifyContent="center"
          alignItems="center"
        
         >
             <Typography variant = 'h5'  className = {classes.title} style = {{color: 'white', marginLeft: 100, paddingTop: 60}}> Contact us  </Typography>
         <form autoComplete = 'off' className = {classes.form}>
            <TextField 
           
              id="outlined-basic" 
              label="Enter Your Email" 
              variant = "outlined"
              size = "small"
              style = {{marginTop: 20, width: 300, backgroundColor: "#fbfbf4"}}
              />
             <TextField
              
                id="outlined-multiline-static"
                label="Write massage"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                style = {{marginTop: 20, width: 300, backgroundColor: "#fbfbf4"}}
            
                />
                <Button size = "large" variant ='contained' color = 'primary' style = {{marginTop: 12}} >SEND</Button >
         </form>

         </Grid>
        <Grid sm = {12}>
            <Copyright />
        </Grid>
     </Grid>
    
    );
};

export default Footer
