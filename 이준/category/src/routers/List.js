import React, { useState, useEffect } from 'react';
import Items from '../jsons/items.json';
import Item from '../components/Item';

const List = ({ match: { params: { category } } }) => {
	const [list, setList] = useState([]);

	const transType = cate => {
		switch(cate) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
		}
	};

	const trans = val => {
		return '개구리' + val;
	};

	useEffect(() => { // componentDidUpdate
		if (category === 'all') {
			setList(Items);
			return;
		}

		const type = transType(category);
		const newList = Items.filter(item => item.type === type);
		setList(newList);
	}, [category]);

	return (
		<div className="container">
			<div className="items">
				{list.map(item => (
					<Item item={item} trans={trans} />
				))}
			</div>
		</div>
	);
};

export default List;
