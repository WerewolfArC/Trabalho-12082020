import React, { Component } from 'react';
//import components
    import Nav from './components/Nav';
    import ButtonMob from './components/ButtonMob'
    import Logo from './components/Logo'
    import Address from './components/Address'
//
const Header = () => {
    return (
        <div className="header">
            <Nav />
            <ButtonMob />
            <Logo />
            <Address />
        </div>
    )
}

export default Header