import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discover from '../Screens/Discover';
import Header from './Header';
import Navigation from './Navigation';

export default () => (
    <>
        <Router>
            <Header />
            <Navigation />
            <Route path="/Discover" exact component={Discover}/>
        </Router>
    </>
)