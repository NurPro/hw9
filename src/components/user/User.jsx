import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Users = () => {
	const [user, setUser] = useState([]);

	const userDateApi = async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

		const data = await response.json();
		setUser(data);
	};
	useEffect(() => {
		userDateApi();
	}, []);

	return (
		<div>
			<ul>
				{user.map((list, index) => (
					<Fieldset key={index}>
						<h2>{list.name} </h2>
						<p>{list.email}</p>
					</Fieldset>
				))}
			</ul>
		</div>
	);
};

const Fieldset = styled.fieldset`
	margin-top: 50px;
	background-color: #ae78e2;
	border: none;
	border-radius: 10px;
	padding-left: 50px;
`;


