import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import moment from "moment";

import "./style.css";
import Header from "./Header";
import Post from "./Post";

class App extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        this.setState({
            posts: [
                {
                    nome: "Autor 01",
                    time: moment().format("dd/MM/yyyy HH-mm"),
                    conteudo:
                        "çljkasdhshcnlnfoavuiyntoçamcç~iudfoasu,fcx~páru[ moawgseu[~tm,oavpr[´9svbw=t8f"
                },
                {
                    nome: "Autor 02",
                    time: moment().format("dd/MM/yyyy HH-mm"),
                    conteudo:
                        "çljkasdhshcnlnfoavuiyntoçamcç~iudfoasu,fcx~páru[ moawgseu[~tm,oavpr[´9svbw=t8f"
                },
                {
                    nome: "Autor 03",
                    time: moment().format("dd/MM/yyyy HH-mm"),
                    conteudo:
                        "çljkasdhshcnlnfoavuiyntoçamcç~iudfoasu,fcx~páru[ moawgseu[~tm,oavpr[´9svbw=t8f"
                },
                {
                    nome: "Autor 04",
                    time: moment().format("dd/MM/yyyy HH-mm"),
                    conteudo:
                        "çljkasdhshcnlnfoavuiyntoçamcç~iudfoasu,fcx~páru[ moawgseu[~tm,oavpr[´9svbw=t8f"
                }
            ]
        });
    }

    render() {
        const { posts } = this.state;
        return (
            <Fragment>
                <Header title="RockectBook" />
                {posts.map(n => (
                    <Post nome={n.nome} time={n.time} conteudo={n.conteudo} />
                ))}
            </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"));
