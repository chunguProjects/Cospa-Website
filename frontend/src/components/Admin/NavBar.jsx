

import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

    link: {
        textDecoration: "none",
        color: theme.palette.text.primary,
    },
    
    
    drawerPaper: {
    width: "200px",
    marginTop: "66px",
  }  
  }));
  
  const NavBar = ()=> {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const history = useHistory();
    
  

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
     
    

    const logout = () => {
        history.push('/signIn')
    }
      ;
    
  

  
    return (
      <div className={classes.root}>
      
        <AppBar position="fixed">
       
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              Admin Panel
            </Typography>
          
           
              
               <div>

              {isMobile ? (
                <>
                  <IconButton edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    onClick={handleMenu}
                    aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                
                  <Drawer
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                   
                   
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <List>
                       
                    <Link to = '/dashboard' className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                     
                    
                     <Link to = '/allActivities' className = {classes.link}>  
                    <ListItem button>
                        <ListItemText>activities</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/allNews'  className = {classes.link} >
                    <ListItem button>
                        <ListItemText>News and Updates</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/addAdmin'  className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Add Admin</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/addActivity'  className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Add Activity</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/addNews'  className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Add News and Updates</ListItemText>
                    </ListItem>
                    </Link>
                    
                    
                     <ListItem button onClick = {() => logout()}>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                   
                    
                  </List>
                  
                  
  
                  </Drawer>
                </>
              ) : (
                <Drawer
                  className={classes.link}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
          
                  >
                       <List>
                       
                    <Link to = '/dashboard' className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                     
                    
                     <Link to = '/allActivities' className = {classes.link}>  
                    <ListItem button>
                        <ListItemText>activities</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/allNews'  className = {classes.link} >
                    <ListItem button>
                        <ListItemText>News and Updates</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/addAdmin'  className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Add Admin</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/addActivity'  className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Add Activity</ListItemText>
                    </ListItem>
                    </Link>

                    <Link to = '/addNews'  className = {classes.link}>
                    <ListItem button>
                        <ListItemText>Add News and Updates</ListItemText>
                    </ListItem>
                    </Link>
                    
                    
                     <ListItem button onClick = {() => logout()}>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                   
                    
                  </List>
                     
                     </Drawer>
                 )}
                
             </div>
          </Toolbar>
          
        </AppBar>
      </div>
    );
  }

  export default withRouter(NavBar);
  
