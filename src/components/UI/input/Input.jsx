import React from 'react';
import styled from 'styled-components';

const Input = ({ type, id, value }) => {
   
	return (
		<>
			<InputLogin type={type} id={id} value={value} />
		</>
	);
};

export default Input;


const InputLogin = styled.input`
   width: 500px;
   width: 80px;
   background-color: red;
`
