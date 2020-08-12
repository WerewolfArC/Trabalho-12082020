import React, { Component } from 'react';
const axios = require('axios');
const cheerio = require('cheerio');

//const url = 'https://www.google.com/search?client=firefox-b-d&q=que+dia+%C3%A9+hoje'

//const fetchData = async (url) => {
    //const result = await axios.get(url)
    //return result.data
//}

const main = async () => {
    //const content = await fetchData(url)
    //const $ = cheerio.load(content)

    const hoje = ('12 de agosto de 2020').split(' de ')

    const diaHoje = () => hoje[0]

    const mesHoje = () => {
        switch (hoje[1]) {
            case 'janeiro':
                return 1
            case 'fevereiro':
                return 2
            case 'março':
                return 3
            case 'abril':
                return 4
            case 'maio':
                return 5
            case 'junho':
                return 6
            case 'julho':
                return 7
            case 'agosto':
                return 8
            case 'setembro':
                return 9
            case 'outubro':
                return 10
            case 'novembro':
                return 11
            case 'dezembro':
                return 12
        }
    }

    const anoHoje = () => hoje[2]

    return {
        anoHoje,
        mesHoje,
        diaHoje
    }
}

function Age(Birthday, birthMonth, YearOfBirth) {
    main().then(({anoHoje, mesHoje, diaHoje}) => {
        const anoAtual = parseInt(anoHoje())*365
        const mesAtual = parseInt(mesHoje())*30
        const diasTotais = anoAtual + mesAtual + parseInt(diaHoje())
    
        const anoVivido = parseInt(YearOfBirth)*365
        const mesVivido = parseInt(birthMonth)*30
        const diasVividos = anoVivido + mesVivido + parseInt(Birthday)
    
        const diasDeVidaTotal = parseInt( diasTotais - diasVividos)
    
        var anosDeVida = (diasDeVidaTotal % 365)
    
        if ( (anosDeVida - Math.floor(anosDeVida)) > 0.5) {
            anosDeVida = Math.ceil(anosDeVida)
        } else {
            anosDeVida = Math.floor(anosDeVida)
        }
    
        return anosDeVida
    })
}
function Birth ({children}) {
    return (
        <p className="age" >{ children }</p>
    )
}

export {
    Birth,
    Age
}