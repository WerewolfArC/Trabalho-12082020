import React, { Component } from 'react';
import { Slides } from './components/Slides';
import Information from './components/Information';
import Contact from './components/Contact';

const Main = ({name, food, cheers, images}) => {
    return (
        <div className="main">
            <Slides images={images} />
            <Information name={name} food={food} cheers={cheers} />
            <Contact />
        </div>
    )
}

export default Main