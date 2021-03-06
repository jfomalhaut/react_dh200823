import React, { useState, useEffect } from 'react';

function Home() {
	const [count, setCount] = useState(10);
	
	const increase = () => {
		setCount(count + 1);
	};
	
	const decrease = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		console.log('component did mount');
	}, []); // 처음 랜더링 될 때

	useEffect(() => {
		if (count % 5 === 0) {
			console.log('update!');
		}
	}, [count]); // 처음 랜더링 될 때

	return (
		<div>
			<h1>count: {count}</h1>
			<button onClick={increase}>증가</button>
			<button onClick={decrease}>감소</button>
		</div>
	);
}

export default Home;