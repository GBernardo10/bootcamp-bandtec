import React, { Component } from "react";
import "./template/assets/css/normalize.css";
import "./template/assets/css/style.css";
import "./template/assets/css/template.css";
import Cadastro from "./pages/cadastro/Cadastro";

export default class App extends Component {
    render() {
        return (
            <>
                {/* <Home /> */}
                <Cadastro />
            </>
        )
    }
}
