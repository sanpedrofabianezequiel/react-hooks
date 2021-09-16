import React from 'react'


import {HomeScreen} from './HomeScreen';
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { NavBar } from './NavBar';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">

                <Switch>
                    <Route exact={true} path="/" component={HomeScreen} />
                    
                    <Route exact={true} path="/about" component={AboutScreen} />
                    
                    <Route exact={true} path="/login" component={LoginScreen} />

                    <Redirect to="/" />
                </Switch>
                </div>
            </div>
        </Router>
    )
}
