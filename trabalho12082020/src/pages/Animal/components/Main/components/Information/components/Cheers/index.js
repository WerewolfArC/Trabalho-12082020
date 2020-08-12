import React, { Component } from 'react';

function Cheers ({ children }) {
    return (
        <p className="cheers"> Saúde: {children} </p>
    )
}

export default Cheers