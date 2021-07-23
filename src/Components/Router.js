import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

export default () => (
    <>
        <Router>
            <Header />
            <Navigation />
            <Route path="/" exact />
        </Router>
    </>
)