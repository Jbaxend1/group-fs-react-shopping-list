import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from '../Header/Header.jsx';
import Container from '@mui/material/Container';
import './App.css';


function App() {

    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        console.log('useEffect - page load');
        fetchGroceryList();
    }, []);

    const fetchGroceryList = () => {
        axios({
            method: 'GET',
            url: '/grocery'
        }).then(response => {
            setGroceryList(response.data);
        }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
        });
    }

    return (
        <div className="App">
            <Header />
                <Container>
                    <Grid container spacing={2}>
                        {
                            groceryList.map((thing) => {
                                return <Grid item xs={12} sm={4} key={thing.id} >
                                            <Card elevation={3}>
                                                <CardContent>
                                                    <Typography variant='h5'>
                                                        Item: {thing.name}
                                                    </Typography>
                                                    <Typography variant='body2'>
                                                        Quantity: {thing.quantity}
                                                    </Typography>
                                                    <Typography variant='body3'>
                                                        Unit: {thing.unit}
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </Card>
                                        </Grid>
                            })
                        }
                    </Grid>
                </Container>
        </div>
    );
}

export default App;
