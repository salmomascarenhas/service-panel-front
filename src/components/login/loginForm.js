import React from 'react';
import { Button, Form }  from 'react-bootstrap';

export class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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

        )
    }
}
