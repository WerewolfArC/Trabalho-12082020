import React, { Component } from 'react';

export default function Food ({ children }) {
    return (
        <p className="food"> Alimentação: {children} </p>
    )
}