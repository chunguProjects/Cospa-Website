import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



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
      paddingRight: 40,
      display: "flex,"
    },
    linkmenu: {
     color: "white",
     textDecoration: "none",
     cursor: "pointer",
     margin: "1rem",
     fontWeight: "bold",
     fontSize: 20,
     '&:hover': { 
      borderBottom: "2px solid grey",
   },

    },

   
  
  }));
  
  const Header = (props)=> {
    const { history } = props;
    const classes = useStyles();
    const [anchorel, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorel);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClick = (pageURL) => {
      history.push(pageURL);
      setAnchorEl(null);
    };
  
    return (
      <div className={classes.root}>
      
        <AppBar position="fixed">
       
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              COSPA
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
                
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorel}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                    <MenuItem onClick= {() => handleMenuClick('/about')}>About Us</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/news updates')}>News Updates</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/activities')}>Activities</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/contacts')}>Contact Us</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/signIn')}>Admin</MenuItem>
                  
  
                  </Menu>
                  </>
                 ): (
                   <div className = {classes.link}>
                    <Link to = "/"  underline="always" className = {classes.linkmenu} >Home</Link>
                    <Link to = "/about"  className = {classes.linkmenu} >About</Link> 
                    <Link to = "/news updates"   className = {classes.linkmenu} >News Updates</Link> 
                    <Link to = "/activities"  className = {classes.linkmenu} >Activities</Link>
                    <Link to="/contacts" className={classes.linkmenu} >Contact Us</Link>
                    <Link button  to = "/signIn" className = {classes.linkmenu} >Admin</Link>
                     
                     </div>
                 )}
                
             </div>
          </Toolbar>
          
        </AppBar>
      </div>
    );
  }

  export default withRouter(Header);
  