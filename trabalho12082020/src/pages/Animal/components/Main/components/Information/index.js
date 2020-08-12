import React, { Component } from 'react';
import {Birth, Age} from './components/Birth';
import Food from './components/Food';
import Cheers from './components/Cheers';

const age = Age(30, 10, 2002)

const Information = () => {
    return (
        <div className='Information' >
            <Birth>{Age(30, 10, 2002)}</Birth>
            <Food>Ração</Food>
            <Cheers>Saudável</Cheers>
        </div>
    )
}

export default Information