import React from 'react';

const nf = new Intl.NumberFormat();

const Item = ({ trans, item: { type, name, price } }) => {
	
	return (
		<div className="item">
			<div className={`img color${type}`} />
			<div className="info">
				<div className="top">
					<span className="type">{trans(type)}</span>
					<span className="name">{name}</span>
				</div>
				<div className="price">{nf.format(price)}원</div>
			</div>
		</div>
	);
};

export default Item;