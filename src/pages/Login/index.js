import React from 'react';
import '../../App.scss';
import "./style.scss";
import ufcLogo from "../../assets/brasao_ufc_horizontal_cor.svg";
import {Button, Form} from "react-bootstrap";

function Login() {
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

                      <Form className="mt-auto">
                          <Form.Group controlId="formBasicUsername">
                              <Form.Control type="username" placeholder="Usuário" />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Senha" />
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

export default Login;
