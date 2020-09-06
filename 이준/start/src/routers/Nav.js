import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
	const [view, setView] = useState(true);

	return (
		<header className="header">
			{view ? (
				<nav className={`${!view ? 'hidden' : '' }`}>
				{/* <nav className={`${!view ? 'hidden' : '' }`}> */}
					<ul>
						<li onClick={() => setView(false)}>menu1</li>
						<li onClick={() => setView(false)}>menu2</li>
						<li onClick={() => setView(false)}>menu3</li>
						<li onClick={() => setView(false)}>menu4</li>
						<li onClick={() => setView(false)}>menu5</li>
					</ul>
				</nav>
			) : null}
			<button onClick={() => setView(!view)}>ON/OFF</button>
		</header>
	);
};

export default Nav;
