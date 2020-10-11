
// 일에 대한 정의
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const ADD_CUSTOM = 'ADD_CUSTOM';

// Actions 
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const addCustom = (number) => ({ type: ADD_CUSTOM, number });

// 하청업체(부서)
const countReducer = (state, action) => {
	switch (action.type) {
		case INCREASE: {
			return state + 1;
		}
		case DECREASE: {
			return state - 1;
		}
		case ADD_CUSTOM: {
			return state + action.number;
		}
		default: return state;
	}
};

export default countReducer;