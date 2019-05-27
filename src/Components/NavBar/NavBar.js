import React from 'react';
import { Link } from 'react-router-dom';

import '../../reset.css'
import './NavBar.css'

export default function NavBar(){
    return (
        <div 
            id="wrapper"
            // style={{
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "space-evenly",
            //     textTransform: "uppercase",
            //     height: "200px",
            //     backgroundColor: "skyblue"
            // }}
        >
            <Link to='/'>Home</Link>
            <Link to='/weddings'>Weddings</Link>
            <Link to='/parties'>Parties</Link>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pan_Am_Logo.svg/1200px-Pan_Am_Logo.svg.png" 
                alt=""
                // style={{
                //     height: "100px",
                // }}
                ></img>
            <Link to='/events'>Events</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}