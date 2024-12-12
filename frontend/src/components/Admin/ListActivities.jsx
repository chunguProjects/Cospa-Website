
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';



import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
    },
    table: {
        display: "center",
        width: "70%",
        marginLeft: 250,
        marginTop: 100,
        
             [theme.breakpoints.down('sm')]: {
               width: '100%',
               marginLeft: 0,
               
        }
        
    
    },
   

}))


const ListActivites = () => {
    const classes = useStyles();
    const [activity, setActivity] = useState([]);
    const history = useHistory();

    const getActivity =  () => {
        axios.get("http://localhost:3001/api/getActivities")
            .then((response) => {
                setActivity(response.data)
        })
           
    };

    useEffect(() => {
        getActivity();
    }, []);

    //delete activity
    const deleteActivity = (id) => {
        axios.delete(`http://localhost:3001/api/delete/activity/${id}`)
            .then((response) => {
                setActivity(
                    activity.filter((row) => {
                        return row.id !== id;
                    })
                )
        })
    }
    
    const updateActivity = () => {
        history.push('/addActivity');
    }
    
    return (
        <div>
            
            <Dashboard />
           
            <TableContainer>
                <Table className = {classes.table}>
                    <TableHead className = {classes.head}>
                        <TableRow >
                            <TableCell>Title</TableCell>
                            <Hidden smDown>
                            <TableCell>Description</TableCell>
                            <TableCell>Image</TableCell>
                            </Hidden>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                            
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {activity.map((item) => {
                            return (
                                 <TableRow>
                                    <TableCell>{item.title}</TableCell>
                                    <Hidden smDown>
                                    <TableCell>{ item.description}</TableCell> 
                                     <TableCell>{ item.image}</TableCell>
                                    </Hidden>
                                    <TableCell><button onClick = {() => updateActivity()}
                                        style={{ cursor: "pointer" }}>
                                        edit
                                    </button>
                                    </TableCell>
                                    <TableCell>
                                        <DeleteIcon
                                            onClick={() => {                                              
                                                deleteActivity(item.id)
                                            }}
                                            style={{cursor: "pointer"}}
                                           
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                       
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ListActivites
