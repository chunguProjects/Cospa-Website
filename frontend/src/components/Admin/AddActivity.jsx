import  React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CssBaseline, Container } from '@material-ui/core/';
import { useState } from 'react';
import Axios from 'axios';
import Dashboard from './Dashboard';




const useStyles = makeStyles((theme) => ( {
     paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn: {
        margin: theme.spacing(3, 0, 3),
    }
}))



const AddActivity = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
  
  //submit the form
  const onSubmit= async (e)=>{
    let formData=new FormData();
    formData.append("imgfile",image[0])
    formData.append("title",title)
    formData.append("description",description)
   
e.preventDefault()

let res=await Axios.post("http://localhost:3001/api/addActivity",formData);

console.log(res.data)

  }
    
  return (
    <div className={classes.signin}>
      
            <Dashboard/>
           
        <Container maxWidth="xs">
          <CssBaseline />
        <div className={classes.paper} >
          <Typography variant='h5'>Add activity</Typography>
          <form>
              <TextField
              placeholder="Add title"             
              variant="outlined"            
              margin="normal"            
              required fullWidth              
              label="title"
              type="text"
              value = {title}               
              onChange={(e) => {                             
                setTitle(e.target.value);           
              }}          
            />
            <TextField             
              placeholder="Add description"           
              required fullWidth
              margin="normal"
              label="description "            
              variant="outlined"            
              type="text"
              value = {description}
              onChange={(e) => {              
                setDescription(e.target.value)
              }}            
            >
            </TextField>
            <Grid item >              
              <Typography variant="body1">               
                Select image            
              </Typography>        
              <br />          
              <input componet={Button} type="file" name="imgFile" accept="image*"
                onChange={(e) => setImage(e.target.files)}
              />                  
            </Grid>        
            <Button variant="contained" color="primary" className={classes.btn}            
              onClick={onSubmit}          
            >         
              Add        
            </Button>      
          </form>
        </div>
      </Container>        
    </div>
    
  )
  
}
export default AddActivity