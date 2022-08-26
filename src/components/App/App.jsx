import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

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
                <p>{JSON.stringify(groceryList)}</p>
            </main>
        </div>
    );
}

export default App;
