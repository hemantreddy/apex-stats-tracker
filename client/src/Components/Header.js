import React, { Component } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

class Header extends Component {
    render() {
        return (
           <header>
            <img src = {logo} alt="logo"/>
           </header>
        )
    }
}

export default Header;
