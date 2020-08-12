import React, { Component } from 'react';
import Food from './components/Food';
import Cheers from './components/Cheers';

const Information = ({name, food, cheers}) => {
    return (
        <div className='Information' >
            <h2 className='name'>{name}</h2>
            <Food>{food}</Food>
            <Cheers>{cheers}</Cheers>
        </div>
    )
}

export default Information