import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./App"
import About from "./pages/about"

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </React.Fragment>
    </Router>,
    document.getElementById("root")
)
