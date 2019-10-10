import React, { Component } from 'react';
import NavBar from "../../componentes/NavBar";


export default class Parabens extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="geral mainBackground">
                <NavBar />
                <section>
                    <span>Parabéns {this.props.name}, sua conta está pronta para uso.</span>
                    <button className="itensHovered btnOutline btnDefault">Voltar</button>
                </section>
            </div>
        )
    }
}
