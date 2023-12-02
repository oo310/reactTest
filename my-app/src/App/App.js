import React, { useState } from 'react';
//import logo from '../logo.svg';
import './App.css';
//import { any } from 'prop-types';
import Search from '../Searchpage/Search';
import List from '../Searchpage/List';

function App() {
    return(
        <div className="container">
            <Search/>   
            <List/>
        </div>
    );
}

export default App;
