import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import Header from './Header.js';
import DetailPage from './DetailPage.js'


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/modules" 
                            exact
                            component={ListPage} 
                        />            
                        <Route 
                            path="/modules/:moduleId" 
                            exact
                            component={DetailPage} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            component={CreatePage} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

