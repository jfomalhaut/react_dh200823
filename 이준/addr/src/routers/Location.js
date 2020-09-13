import React, { useState, useEffect } from 'react';

const Location = () => {
	const [location, setLocation] = useState([]);

	const onScroll = ev => {
		// setLocation(ev);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
	}, []);

	return (
		<div>
			{/* <Map lng={location.lng} lat={location.lat} /> */}
		</div>
	);
};

export default Location;
