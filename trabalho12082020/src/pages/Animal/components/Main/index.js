import React, { Component } from 'react';
import { Slides } from './components/Slides';
import Information from './components/Information';
import Contact from './components/Contact';


const Main = () => {
    return (
        <div className="main">
            <Slides />
            <Information />
            <Contact />
        </div>
    )
}

export default Main