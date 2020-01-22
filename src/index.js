import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./App"
import About from "./pages/about"

ReactDOM.render(
    <Router>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </main>
    </Router>,
    document.getElementById("root")
)
