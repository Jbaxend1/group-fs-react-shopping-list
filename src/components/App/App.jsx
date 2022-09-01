import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from '../Header/Header.jsx';
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
            <main>
                <Grid container spacing={2}>
                    {
                       groceryList.map((item) => {
                        return <Grid item xs={12} sm={4} key={item.id}>
                            <Card elevation={3}>

                                <CardContent>
                                    <Typography variant='h5'>
                                        {item.name}
                                    </Typography>
                                    <Typography variant='h3'>
                                        {item.quantity}
                                    </Typography>
                                    <Typography variant='h3'>
                                        {item.unit}
                                    </Typography>
                                    <Typography>
                                        {item.purchased}
                                    </Typography>
                                    
                                </CardContent>

                            </Card>
                            </Grid>
                       }) 
                    }
                </Grid>
            </main>
        </div>
    );
}

export default App;
