

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Updates from './components/pages/Updates';
import Activities from './components/pages/Activities';
import ContactUs from './components/pages/ContactUs';
import SignIn from './components/Admin/SignIn';
import AddAdmin from './components/Admin/AddAdmin';
import AddActivity from './components/Admin/AddActivity';
import AddNews from './components/Admin/AddNews';
import ListNews from './components/Admin/ListNews';
import ListActivites from './components/Admin/ListActivities';
import HomeAdmin from './components/Admin/HomeAdmin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
       
      
    }
}))



function App() {
 

       const classes = useStyles();
       return (
         
         <div className = {classes.box} > 
                <Router>                    
                          <Switch>
                              <Route exact path="/" render={props => <Home {...props} />} />
                              <Route exact path="/about" render={props => <About {...props} />} />
                              <Route exact path="/news updates" render={props => <Updates {...props} />} />                                          
                              <Route exact path="/activities" render={props => <Activities {...props} />} />               
                              <Route exact path="/contacts" render={props => <ContactUs {...props} />} />                            
                              {/* <Route exact path="/admin" render={props => <Dashboard {...props} />} /> */}
                             <Route exact path="/signIn" render={props => <SignIn  {...props} />} />
                             
                            <Route exact path="/addAdmin" render={props => <AddAdmin  {...props} />} />
                            <Route exact path="/addActivity" render={props => <AddActivity  {...props} />} />
                            <Route exact path="/addNews" render={props => <AddNews {...props} />} />
                            <Route exact path="/allNews" render={props => <ListNews  {...props} />} />
                             <Route exact path="/allActivities" render={props => <ListActivites  {...props} />} />
                             <Route exact path="/dashboard" render={props => <HomeAdmin  {...props} />} />  
                            
                            
                           
                
                            </Switch>        
                     </Router>     
              </div>
       );   
}


export default App;


 