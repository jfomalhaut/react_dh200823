import React, { useState } from 'react';
import useInput from '../customs/useInput';

const Phonebook = () => {
	const [name, setName] = useInput("리엑트", 8);
	const [age, setAge] = useInput("");
	const [phone, setPhone] = useInput(""); // 순수하게 값을 관리하기 위한 Hook

	// const onChangeName = (ev) => {
	// 	const { target: { value } } = ev;
	// 	setName(value);
	// };

	// const onChangePhone = (ev) => {
	// 	const { target: { value } } = ev;
	// 	setPhone(value);
	// };

	// const onChangeAge = (ev) => {
	// 	const { target: { value } } = ev;
	// 	setAge(value);
	// };

	return (
		<div>
			<div className="inputs">
				<div>
					이름: <input value={name} onChange={setName} placeholder="이름을 입력하세요" />
				</div>
				<div>
					나이: <input value={age} onChange={setAge} placeholder="나이를 입력하세요" />
				</div>
				<div>
					전화번호: <input value={phone} onChange={setPhone} placeholder="전화번호를 입력하세요" />
				</div>
				<h1>{name}</h1>
				<h1>{age}</h1>
				<h1>{phone}</h1>
			</div>
		</div>
	);
};

export default Phonebook;
