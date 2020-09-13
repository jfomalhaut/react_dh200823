import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CONFIRM_KEY = "devU01TX0FVVEgyMDIwMDkxNDAyMTg1ODExMDE3ODU=";
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const COUNT_PER_PAGE = 10;

const App = () => {
	const [keyword, setKeyword] = useState("");
	const [keyword2, setKeyword2] = useState("");
	const [jusoList, setJusoList] = useState([]);
	const [total, setTotal] = useState(0);
	const [currnetPage, setCurrentPage] = useState(1);

	const onChageKeyword = event => {
		const { target: { value } } = event;
		setKeyword(value);
	};

	const search = () => {
		Axios.get(`${REQUEST_URL}?confmKey=${CONFIRM_KEY}&currentPage=${currnetPage}&countPerPage=${COUNT_PER_PAGE}&keyword=${keyword2}&resultType=json`).then(res => {
			const { data: { results: { juso, common: { totalCount } } } } = res;
			setJusoList(juso);
			setTotal(totalCount);
		});
	};

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [keyword2]);

	return (
		<div className="field">
			<input value={keyword} onChange={onChageKeyword} placeholder="키워드를 입력하세요" />
			<button onClick={() => setKeyword2(keyword)} >검색</button>
			{keyword2 !== '' ? (
				<h1>'{keyword2}'에 대한 검색 결과 ({total}건)</h1>
			) : null}
			<ul>
				{jusoList.map(item => (
					<li>[도로명] {item.roadAddrPart1}</li>
				))}
			</ul>
			<button>이전</button>
			<button>다음</button>
		</div> 
	);
};

export default App;