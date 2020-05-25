import React from "react";
import { BrowserRouter, Switch} from 'react-router-dom'
import Route from './Route'
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function Index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Login } />
                <Route path="/dashboard" component={ Dashboard } isPrivate/>
            </Switch>
        </BrowserRouter>
    )
}