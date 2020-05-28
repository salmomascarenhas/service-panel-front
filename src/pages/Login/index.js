import React from 'react';
import '../../App.scss';
import "./style.scss";
import { useDispatch } from "react-redux";
import ufcLogo from "../../assets/brasao_ufc_horizontal_cor.svg";
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from "../../store/modules/auth/actions";

export default function Login(){
    const dispatch = useDispatch();

    function handleSubmit({username, password}){
        dispatch(signInRequest(username, password));
    }

    return (
        <>
            <div className='container'>
                <header>
                    <img src={ufcLogo} alt='UFC logo'/>
                </header>
                    
                <main>
                    <h1>Entrar</h1>
                    <Form>
                        <Input type='username' name='username' placeholder='Usuário' required/>
                        <Input type='password' name='password' placeholder='Senha' required/>
                        <button>Entrar</button>
                    </Form>
                </main>

                <footer><p> © Copyright | Universidade Federal do Ceará - 2020 </p>
                </footer>

            </div>
        </>
    );
}
