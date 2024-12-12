import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    news: {
        marginTop: 70,
    },
    root: {
        maxWidth: 400,
        alignItems: "center",
        
        
        
    },

    media: {
        height: 200,
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
    
    

    
}));



const Updates = () => {

    const classes = useStyles();
    const [news, setNews] = useState([]);

    const getNews = async () => {
        try {
            const data = await axios.get('http://localhost:3001/api/getNews');
            // console.log(data.data)
             setNews(data.data)
        } catch (error) {
            console.log({error: error})
        }
    }
    useEffect(() => {
        getNews();
    }, []);
    
    return (
        <div className={classes.news}>
            <Header />
            <Typography variant = "h4" style = {{textAlign: "center", paddingTop: 50, paddingBottom: 20}}>News updates and events </Typography>
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
        
    )
    
}

export default Updates
