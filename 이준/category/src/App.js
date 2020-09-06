import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import List from './routers/List';
import Navigation from './components/Navigation';
import './App.css';


const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/:category" component={List} />
				<Redirect path="*" to="/" />
			</Switch>
		</Router>
	);
};

export default App;