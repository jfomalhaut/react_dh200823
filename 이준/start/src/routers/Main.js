import React from 'react';

const Main = ({ history }) => {
	const goList = () => {
		history.push('list/nick');
	};

	return (
		<>
			<h1>Main Component.</h1>
			<button onClick={goList}>리스트페이지로</button>
		</>
	);
}

export default Main;