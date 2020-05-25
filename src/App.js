import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Index from "./routes";
import { Router } from 'react-router-dom';
import history from './services/history'
import './config/ReactotronConfig';
import store from './store'


export default function App() {
    return (
        <Provider store={ store }>
            <Router history={ history }>
                <Index />
            </Router>
        </Provider>
    )
}