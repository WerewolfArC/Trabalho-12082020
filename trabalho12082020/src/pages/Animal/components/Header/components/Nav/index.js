import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
    return (
        <div className="nav">
            <a href="/">Home</a>
            <AnchorLink href="#photo">Fotos</AnchorLink>
            <AnchorLink href="#information">Informações</AnchorLink>
        </div>
    )
}

export default Nav