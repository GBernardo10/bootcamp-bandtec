import React, { Component } from 'react';
import Passo1 from './passo1/Passo1';
import Passo2 from './passo2/Passo2';
import Parabens from './parabens/Parabens';

export default class Cadastro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actualPage: 0,
            info: []
        }
    }


    handleChangePage = (page, data) => {

        const state = Object.assign({}, this.state)

        state.actualPage = page
        state.info.push(data)

        this.setState(state)

    }

    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                return <Passo2 change={this.handleChangePage}/>
            case 2:
                return <Parabens name={this.state.info[0].name} />
            default:
                return <Passo1 change={this.handleChangePage} />
        }
    }


    render() {
        return (
            this.handleActualPage()
        )
    }
}
