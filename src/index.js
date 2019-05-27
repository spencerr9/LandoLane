import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weddings from './Components/Weddings/Weddings';
import * as serviceWorker from './serviceWorker';

import {HashRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/weddings' component={Weddings} />
            {/* <Route path='/' component={App} /> */}
            {/* <Route path='/' component={App} /> */}
        </Switch>
    </HashRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
