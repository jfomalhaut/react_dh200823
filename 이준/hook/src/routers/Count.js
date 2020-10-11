import React, { useReducer, useState } from 'react';
import countReducer, { decrease, increase, addCustom } from '../reducers/countReducer';

const Count = () => {
	const [custom, setCustom] = useState('');
	const [count, dispatch] = useReducer(countReducer, 0);

	const onChangeCustom = ev => {
		const { target: { value } } = ev;
		setCustom(value);
	};

	const onIncrease = () => {
		dispatch(increase());
	};

	const onDecrease = () => {
		dispatch(decrease());
	};

	const onAddCustom = () => {
		dispatch(addCustom(custom * 1));
	};

	return (
		<div>
			<h1>{count}</h1>
			<input value={custom} onChange={onChangeCustom}/>
			<button onClick={onIncrease}>increasement</button>
			<button onClick={onDecrease}>decreasement</button>
			<button onClick={onAddCustom}>add custom</button>
		</div>
	);
};

export default Count;
