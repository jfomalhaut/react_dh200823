import { useState } from "react";

const useInput = (initialValue, validate = null) => { // custom hook
	// 1. 값을 반환해주어야 한다.
	// 2. onChange 기능이 있어야 한다.
	const [data, setData] = useState(initialValue);

	const onChange = (ev) => {
		const { target: { value } } = ev;
		if (value) {
			if (validate) {
				if (data.length < validate) {
					setData(value);
				}
			} else {
				setData(value);
			}
		} else {
			setData("");
		}
	};

	return [data, onChange];
};

export default useInput;