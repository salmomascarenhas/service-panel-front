import React, {Component} from 'react';
import '../../App.scss';
import "./style.scss";
import ufcLogo from "../../assets/brasao_ufc_horizontal_cor.svg";
import {Button, Form} from "react-bootstrap";

import api from '../../services/api'

export default class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    handleSubmit = e => {
        const { username, password } = this.state

        const response = api.post('/authenticate', {
            username: username,
            password: password,
        }, { withCredentials: true }).then(resp => {
            console.log("logado", resp)
            console.log(response)
        }).catch(error => {
            console.log("erro", error)
        })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="base-container">
                    <div className="logo">
                        <img src={ ufcLogo } alt="ufc logo"/>
                    </div>
                    <div className="login">
                        <div className="d-flex flex-column login-form">
                            <div className="header">
                                <h1>Entrar</h1>
                            </div>

                            <Form className="mt-auto" onSubmit={ this.handleSubmit }>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Control
                                        type="username"
                                        name="username"
                                        placeholder="Usuário"
                                        value={ this.state.username }
                                        onChange={ this.handleInputChange }
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Senha"
                                        value={ this.state.password }
                                        onChange={ this.handleInputChange }
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" block>
                                    Entrar
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="footer mt-auto" />
                </div>
            </div>
        );
    }
}
