import React from 'react';
import {Router} from '@reach/router'
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Products from './pages/Products';
import Home from './pages/Home';
import Notfound from './pages/404/Notfound';
function AppRouter() {
    return (
        <Router>
            <Home path='/'/>
            <About path='/about'/>
            <Contact path='/contact'/>
            <Testimonials path='/testimonials'/>
            <Products path='/products'/>
            <Notfound default/>
        </Router>
    );
}

export default AppRouter;