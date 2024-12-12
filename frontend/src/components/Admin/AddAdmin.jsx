import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import{ CssBaseline, Container } from '@material-ui/core/';
import Axios from 'axios';
import { useState } from 'react';
import Dashboard from './Dashboard';

const useStyles = makeStyles((theme) => ( {
     paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn: {
        margin: theme.spacing(3, 0, 3),
    }
}))

const AddAdmin = () => {
    const classes = useStyles();
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   

    const handleSubmit = () => {
        Axios.post("http://localhost:3001/api/addAdmin", {
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password
        }).then(console.log("Admin added successfuly"))
    }
    return (

        <div className={classes.signin}>
           
            <Dashboard/>
          
            <Container maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper} > 
                    <Typography variant='h5'>Add Admin</Typography>
                    <form>
                        
                         <TextField
                            placeholder="firstname"
                            fullWidth 
                            margin="normal"
                            label="firstname "
                            variant="outlined"
                            type="firstname"
                            onChange={(e) => {
                                setFirstname(e.target.value)
                            }}
                             
                        >

                        </TextField>

                        
                         <TextField
                            placeholder="lastname"
                            fullWidth 
                            margin="normal"
                            label="lastname "
                            variant="outlined"
                            type="text"
                            onChange={(e) => {
                                setLastname(e.target.value)
                            }}
                             
                        >

                        </TextField>

                         <TextField
                            placeholder="email"
                            fullWidth 
                            margin="normal"
                            label="email "
                            variant="outlined"
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                             
                        >

                        </TextField>

                         <TextField
                            placeholder="user name"
                             fullWidth 
                            margin="normal"
                            label="username "
                            variant="outlined"
                            type="text"
                             required
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                             
                        >

                        </TextField>
                         <TextField
                            placeholder="password"
                            fullWidth 
                            margin="normal"
                            label="password "
                            variant="outlined"
                            type="password"
                             required
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                             
                        >

                        </TextField>

                        <Button variant="contained" color="primary" className={classes.btn}
                          onClick = {handleSubmit}
                        >
                            Add
                        </Button>
                    </form>

                </div>

            </Container>
           
        </div>
    )
}

export default AddAdmin
