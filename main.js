import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Game from './Game.jsx';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
//import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

//ReactDOM.render(<App />, document.getElementById('app'));	


ReactDOM.render((
	<Router>
		<div>
			<ul>
            	<li><Link to="/">Home</Link></li>
            	<li><Link to="/about">About</Link></li>
            	<li><Link to="/contact">Contact</Link></li>
            	<li><Link to="/game">Game</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path='/game' component={Game}/>

		</div>
	</Router>

),document.getElementById('app'));
