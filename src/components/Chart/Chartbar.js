import React from 'react';
import styled from 'styled-components';

const Chartbar = ({ maximumPrice, currentPrice, label }) => {
	const fillHeight = (100 * currentPrice) / maximumPrice;
	return (
		<ChartBarCon>
			<ChartBarInner>
				<ChartBarFill style={{ height: `${fillHeight}%` }}></ChartBarFill>
			</ChartBarInner>
			<ChartBarLabel>{label}</ChartBarLabel>
		</ChartBarCon>
	);
};

export default Chartbar;

const ChartBarCon = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
`;

const ChartBarInner = styled.div`
	height: 100%;
	width: 100%;
	border: 1px solid black;
	border-radius: 12px;
	background-color: #a892ee;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const ChartBarFill = styled.div`
	background-color: #4826b9;
	width: 100%;
	transition: all 1s ease-out;
`;
const ChartBarLabel = styled.p`
	font-weight: bold;
	font-size: 0.5rem;
	text-align: center;
	font-size: 9px;
`;

 