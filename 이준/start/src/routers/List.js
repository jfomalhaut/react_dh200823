import React from 'react';
import { useEffect } from 'react';

const List = ({ history, match: { params: { name } } }) => {

	useEffect(() => {
		// getItems();
	}, [name]);
	
	return (
		<div>
			<h1>List Component</h1>
			<h1>{name}</h1>
		</div>
	);
};

export default List;