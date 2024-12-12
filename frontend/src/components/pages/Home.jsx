import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.primary,
    // height: 240,
  },

  home: {
    marginTop: 70,
  },
  container: {
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(40, 35, 92, 0.4), rgba(40, 35, 92, 0.4)),url(/images/people7.jpg)',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        [theme.breakpoints.down("sm")]: {
            height: "100%",
        },
    },
    head: {
        textAlign: 'center',
         color: '#fff', 
         fontWeight: 'bold',
          paddingTop: 250,
          [theme.breakpoints.down("sm")]: {
              paddingTop: 20,
              fontSize: 30,
          }
    },

    body: {
        textAlign: "center",
         color: "#fff", 
         paddingTop: 30, 
          fontSize:20 ,
          [theme.breakpoints.down("sm")]: {
            paddingTop: 10,
            justifyContent: "center",
            paddingLeft: 0,
         },
          
  },
      
    manager: {
        borderRadius: 100,
        height: 200,
        width: 200,
  },
     about: {
        borderTop: '1px solid #ece7e7',
        borderBottom: '1px solid #ece7e7',
        padding: 5,
        color: 'grey'
    },
    logo: {
        height: '40%',
        width: '40%',
       
  },
    
  media: {
      height: "50vh",
  },
  
  root: {
        maxWidth: 400,
        alignItems: "center",
           
  },
   card: {
        display: "flex",
        padding: 20,
        float: "left",
        marginRight: 0,
        marginBottom: 50,
        marginLeft: 100,
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            marginLeft: 5,
            marginRight: 10,
        },
    },

}))

const Home = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]);


  const getNews = () => {
    axios.get("http://localhost:3001/api/getNews")
      .then((response) => {
      setNews(response.data)
    })
  }

  useEffect(() => {
    getNews();
  });

  return (
    <div className={classes.home}>
      <Header />

      <Container>
       <Grid Container className = {classes.container}> 
                <Grid sm = {12} justifyContent = "center" >
                    <Typography variant = 'h4'  className = {classes.head} >
                    Community Support of People with Albinism
                    </Typography>
                </Grid>

                <Grid sm = {12} >
                    <Typography variant = 'body1' className = {classes.body}>
                        We exist to ensure that every person with albinism has 
                        right to live without any threates. We tend to make sure that their voices are heard.
                    </Typography>
                </Grid>
            </Grid>

        <Grid container> 
          <div className={classes.activities}>
            <Header />
            <Typography variant="h4" style={{ textAlign: "center", paddingTop: 50, paddingBottom: 20 }}>
             News Updates </Typography>
            {news.map((item) => {
                 return (
                     
          <div className = {classes.card}>

            <Card className={classes.root}>
                 
                <CardActionArea>

                    <CardMedia
                        
                        className={classes.media}
                        
                        image= {`uploads/${item.image}`}
                        
                        title={item.title}
                        
                  />
                    <CardContent>

                        <Typography gutterBottom variant="h5">{item.title}</Typography>
                        
                        <Typography variant="body2">{item.description}</Typography>
                        
                    </CardContent>
                    
                </CardActionArea>

                <CardActions>
                    
                    <Button size="small" color="primary" >Learn More</Button>
                    
                </CardActions>
                
            </Card>

        </div>
               )
            })}
            
            <Footer />
    
        </div>
        </Grid>
      </Container>





       {/* <Container> */}
            {/* <Grid Container className = {classes.container}> 
                <Grid sm = {12} justifyContent = "center" >
                    <Typography variant = 'h4'  className = {classes.head} >
                    Community Support of People with Albinism
                    </Typography>
                </Grid>

                <Grid sm = {12} >
                    <Typography variant = 'body1' className = {classes.body}>
                        We exist to ensure that every person with albinism has 
                        right to live without any threates. We tend to make sure that their voices are heard.
                    </Typography>
                </Grid>
            </Grid>
      </Container>
      
      <Grid container >
        <Grid item sm={6} xs={12} >
          <div className={classes.paper}>
            <Container>
          <Grid>
              <Grid Container justifyContent = 'center' className = {classes.about}>
                  <Typography variant = 'h5'>
                      WHO WE ARE
                  </Typography>
              </Grid>

              <Grid Container xs = {12}>
                  <Link to = '/'>
                      <img  src = "/images/COSPA PARTNERS.jpg" alt = "Our LOGO" className = {classes.logo}/>
                  </Link>
              </Grid>
              <Grid Container xs = {12} >
                  <Typography variant = 'body2' color = 'textSecondary'>
                      COSPA  is a non-profit making organisation established in the year 2019 inorder
                        to protect People With Albinism from different acts of violence in Malawi. 
                  </Typography>
              </Grid>
              
          </Grid>
      </Container>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.about}>
          <div className={classes.paper}>

            
             <Container>
          <Grid zeroMinWidth className = {classes.about}>
             <Grid sm = {12} style = {{marginTop : '2rem'}} >
           <img  src = "/images/chungu.jpg" alt = "Our Manager" className = {classes.manager}/> 
             </Grid> 

             <Grid sm = {12} > 
                <Grid Container justifyContent = 'center'> 
                 <Grid sm = {12} >
                    <Typography variant = 'h6' style = {{marginTop: 12, color: 'grey', fontWeight: 100}}>
                       The Exective Director
                   </Typography>
                 </Grid>
                 <Grid sm = {12} > 
                 <Typography variant = 'body2'>
                     <span className = {classes.active}> Name: </span> Steven Chungu <br/>
                     <span className = {classes.active}> Contact: </span> (+265991803214/+265883906809)
                 </Typography>
                 </Grid>
              </Grid>
             </Grid>
           </Grid> 
      </Container>
          </div>
        </Grid>
      </Grid>
      <Footer /> */}
    </div>
  )
}

export default Home

