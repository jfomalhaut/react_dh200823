import React, { useState } from 'react';

const App = () => {
	const [keyword, setKeyword] = useState("");

	const onChageKeyword = event => {
		const { target: { value } } = event;
		setKeyword(value);
	};

	return (
		<div className="field">
			<input value={keyword} onChange={onChageKeyword} />
			<h1>{keyword}</h1>
		</div>
	);
};

export default App;