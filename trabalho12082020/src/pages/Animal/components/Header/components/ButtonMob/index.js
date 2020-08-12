import React, { Component } from 'react';

const buttonMobLink = 'https://www.amcredsc.org.br/img/layout/hamburguer.png'

class ButtonMob extends Component {
    constructor() {
        super();
        this.state = {
            visNav:'flex'
        }
    }
    clickMe() {
        if(this.state.visNav === 'flex') {
            this.setState({
                visNav:'none'
            })
        } else {
            this.setState({
                visNav:'flex'
            })
        }
        document.querySelector(".nav").style.display = this.state.visNav;
    }

    render(){
        return (
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img src={buttonMobLink} alt="Botão Mobile" />
            </div>
        )
    }

}

export default ButtonMob