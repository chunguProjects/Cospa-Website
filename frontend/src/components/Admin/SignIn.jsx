import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    btn: {
        margin: theme.spacing(3, 0, 3),
    }
   
}))

const SignIn = () => {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const history = useHistory();
    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/api/login", {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.massage) {
                setLoginStatus(response.data.massage)
            } else {
                setLoginStatus(response.data[0].username);
                history.push('/dashboard');
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/login")
            .then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data[0].username)
            }
        });
    }, []);

    return (
        <div className={classes.signin}>
            
            <Container maxWidth = "xs">
            <CssBaseline />
                
                <div className={classes.paper} >
                    <Avatar className = {classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography >Sign In</Typography>
    
                    <Typography variant="h5" color="secondary"
                    
                    >
                        {loginStatus}
                    </Typography>
                    
                    <form>
                        <TextField
                            placeholder="Enter username or email"
                            variant="outlined"
                            margin="normal"
                            required fullWidth
                            label="username"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />

                        <TextField
                            placeholder="Enter password"
                            required fullWidth 
                            margin="normal"
                            label="password"
                            variant="outlined"
                            type="password"
                             onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        >

                        </TextField>

                        <Button variant="contained" fullWidth color="primary"onClick = {login} className = {classes.btn} >
                            Sign in
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                            Forgot password?
                            <Link href = "/" variant = "body2">
                               Click Here To Reset
                            </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

            </Container>
           
        </div>
    )
}

export default SignIn
