import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div>MyTidy - coding test</div>
            <Link className='header-btn' to="/">Home</Link>
            <Link className='header-btn' to="/articoli-ditta">Articoli</Link>
            <Link className="header-btn header-login" to="/login">Login</Link>
        </div>
    )
}

export default Header