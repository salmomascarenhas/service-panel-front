import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Routes from "./routes";

import './config/ReactotronConfig';
import store from './store'


export default function App() {
    return (
        <Provider store={ store }>
            <Routes />
        </Provider>
    )
}