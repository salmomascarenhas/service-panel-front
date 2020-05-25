import React from 'react';
import '../../App.scss';
import "./style.scss";
import { useDispatch } from "react-redux";
import ufcLogo from "../../assets/brasao_ufc_horizontal_cor.svg";
import {Button} from "react-bootstrap";
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from "../../store/modules/auth/actions";

export default function Login(){
    const dispatch = useDispatch();

    function handleSubmit({username, password}){
        dispatch(signInRequest(username, password));
    }

    return (
        <>
            <div className="base-container">
                <div className="logo">
                    <img src={ ufcLogo } alt="ufc logo"/>
                </div>
                <div className="login">
                    <div className="d-flex flex-column login-form">
                        <div className="header">
                            <h1>Entrar</h1>
                        </div>

                        <Form className="mt-auto" onSubmit={ handleSubmit }>
                            <Input
                                type="username"
                                name="username"
                                placeholder="Usuário"
                                required
                            />

                            <Input
                                type="password"
                                name="password"
                                placeholder="Senha"
                                required
                            />
                            <Button variant="primary" type="submit" block>
                                Entrar
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="footer mt-auto" />
            </div>
        </>
    );
}
