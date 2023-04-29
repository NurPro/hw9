import React from 'react';
import { Button } from '../UI/button/Button';
import styled from 'styled-components';

export const Header = ({
	isLogin,
	logoutHandler,
	expensesPagesHandler,
	userPagesHandler,
}) => {
	return (
		<HeaderBg>
			{isLogin ? (
				<>
					<Button title='expenses' onClick={expensesPagesHandler} />
					<Button title='user' onClick={userPagesHandler} />
					<Button title='Logout' onClick={logoutHandler} />
				</>
			) : null}
		</HeaderBg>
	);
};

// `
// const HeaderDivCon = styled.div`
// 	background-color: #c8cf00;
//    display: flex;
//    width: 100%;
//    height: 3rem;
// `;

const HeaderBg = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: rgba(173, 155, 233);
	border-radius: 15px;
`;
