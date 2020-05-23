import React from 'react';
import {LoginForm} from "./loginForm";
import ufcLogo from "../../assets/brasao_ufc_horizontal_cor.svg";
import "./style.scss";

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="base-container">
                    <div className="logo">
                        <img src={ ufcLogo } />
                    </div>
                    <div className="login">
                        <LoginForm />
                    </div>
                    <div className="footer mt-auto" />
                </div>
            </div>

        )
    }
}
