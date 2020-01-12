import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';

import FamilyPortraits from './Components/FamilyPortraits/FamilyPortraits';
import Couples from './Components/Couples/Couples';
import Live from './Components/Live/Live';
import Travel from './Components/Travel/Travel';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import WebFont from 'webfontloader';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/portraits' component={FamilyPortraits} />
            <Route path='/family' component={FamilyPortraits} />
            <Route path='/couples' component={Couples} />
            <Route path='/music' component={Live} />
            <Route path='/travel' component={Travel} />
            <Route path='/products' component={Products} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </HashRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Importing google font using webfontloader npm package
WebFont.load({
    google: {
        families: ['Noto Sans HK: 400, 700', 'sans-serif']
    }
})
