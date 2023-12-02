import React, { useState } from 'react';
//import logo from '../logo.svg';

import './App.css';
//import { any } from 'prop-types';
import Search from '../Searchpage/Search';
import List from '../Searchpage/List';

function App() {
    const [users, setusers] = useState({
        user:[],
        isFirst:true,
        isLoding:false,
        err:''
    });
    const updateAppState=(stateObj) => {
        setusers(stateObj);
        
    }
    //console.log(typeof(users));
    return(
        <div className="container">
            <Search updateAppState={updateAppState}/>   
            <List {...users}/>
        </div>
    );
}

export default App;
