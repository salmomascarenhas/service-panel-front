import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Patients from '../pages/Patients'

export default function Index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}