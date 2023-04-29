import { React, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../UI/button/Button';
import FormInput from '../form-input/FormInput';

export const Login = ({ loginHandler }) => {
	const [email, setEmail] = useState('');
	const [emailValid, setEmailValid] = useState();
	const [password, setPassword] = useState('');
	const [passwordValid, setPasswordValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
		setFormIsValid(
			event.target.value.includes('@') && password.trim().length > 6
		);
	};
	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);

		setFormIsValid(event.target.value.trim().length > 6 && email.includes('@'));
	};

	const onBLurEmailValid = () => {
		setEmailValid(email.includes('@'));
	};

	const onBLurPasswordValid = () => {
		setPasswordValid(password.trim().length > 6);
	};

	return (
		<StyledDiv>
			<label >Email</label>
			<FormInput
				type='email'
				placeholder='email'
				value={email}
				onChange={emailChangeHandler}
				onBlur={onBLurEmailValid}
				style={
					emailValid === false
						? { border: '1px solid #fe4444', backgroundColor: '#eeb1b1' }
						: {}
				}
			/>
			<label >Password</label>
			<FormInput
				type='password'
				placeholder='password'
				value={password}
				onChange={passwordChangeHandler}
				onBlur={onBLurPasswordValid}
				style={
					passwordValid === false
						? { border: '1px solid #fe4444', backgroundColor: '#eeb1b1' }
						: {}
				}
			/>
			<Button disabled={!formIsValid} onClick={loginHandler} title='Login' />
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	margin-top: 40px;
	border: 1px solid black;
	background-color: #AD9BE9;
	padding: 20px;
	border-radius: 15px;
	border: none;
`;

/* const FormInput = styled.input`
	border: 1px solid #cccccc;
	padding: 10px;
	border-radius: 4px;
	font-size: 16px;
	margin-bottom: 10px;
`;
 */
