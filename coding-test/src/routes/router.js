import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../views/home';
import ArticoliDittaTable from '../views/articoli-ditta-table';
import Login from '../views/login';

function Rotues() {
    return (
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/articoli-ditta' Component={ArticoliDittaTable} />
            <Route exact path='/login' Component={Login} />
        </Routes>
    );
}

export default Rotues;