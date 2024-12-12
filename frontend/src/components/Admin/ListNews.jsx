

// import { useState, useEffect } from 'react';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
import Hidden from '@material-ui/core/Hidden';

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


const ListNews = () => {
    const classes = useStyles();
    const [updates, setUpdates] = useState([]);
    const history = useHistory();

    const getNews = async() => {
       try {
           const data = await axios.get('http://localhost:3001/api/getNews');
        //    console.log(data.data)
           setUpdates(data.data)
       } catch (error) {
           console.log(error)
       }
    }

    useEffect(() => {
        getNews();
    }, []);

    
    const updateNews = () => {
        history.push('/addNews');
    }

      //delete activity
    const deleteNews = (id) => {
        axios.delete(`http://localhost:3001/api/delete/news/${id}`)
            .then((response) => {
                setUpdates(
                    updates.filter((row) => {
                        return row.id !== id;
                    })
                )
        })
    }
    return (
        <div>
            <Dashboard />
            <TableContainer>
                <Table className = {classes.table}>
                    <TableHead className = {classes.head}>
                        <TableRow>
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
                        {updates.map((item) => {
                            return (
                                <TableRow>
                                    <TableCell>{item.title}</TableCell>
                                    <Hidden smDown>
                                    <TableCell>{ item.description}</TableCell> 
                                     <TableCell>{ item.image}</TableCell>
                                    </Hidden>
                                    <TableCell ><button
                                    onClick = {() => updateNews()}
                                    >edit</button></TableCell>
                                    <TableCell>
                                        <DeleteIcon
                                        onClick = {() => deleteNews(item.id)}
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

export default ListNews
