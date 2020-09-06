import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import List from './routers/List';


const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={List} />
				<Redirect path="*" to="/" />
			</Switch>
		</Router>
	);
};

export default App;