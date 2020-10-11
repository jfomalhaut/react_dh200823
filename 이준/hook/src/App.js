import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Page1 from './routers/Page1';
import Login from './routers/Login';

const App = () => {
	const logged = false;
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/page1" render={(props) => (
					<>
						{logged ? (
							<Page1 {...props} />
						) : (
							<Redirect to="/login" />
						)}
					</>
				)} />
				<Route path="/login" component={Login} />
				<Redirect to="/page1" />
			</Switch>
		</BrowserRouter>
	)
}

export default App
