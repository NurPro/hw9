import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import { Button } from '../UI/button/Button';
import styled from 'styled-components';

export const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [date, setDate] = useState(null);

	const cancelHandler = (event) => {
		event.preventDefault();
		props.onShowForm();
	};

	const titleInputChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const priceInputChangeHandler = (event) => {
		const value = event.target.value;
		if (value.charAt(0) !== '-') {
			setPrice(value);
		}
	};

	const dateInputChangeHandler = (event) => {
		setDate(event.target.value);
	};

	const saveHandler = (event) => {
		event.preventDefault();

		const expenseDate = {
			title,
			date,
			price,
		};

		props.onNewExpenseAdd(expenseDate);
		setDate('');
		setPrice('');
		setTitle('');
	};
	return (
		<form>
			<FirstChildDiv>
				<FormInput
					labelName='Название'
					id='name'
					inputType='text'
					placeholder='Введите...'
					value={title}
					onChange={titleInputChangeHandler}
				/>

				<FormInput
					labelName='Количество денег'
					id='price'
					inputType='number'
					placeholder='Введите...'
					value={price}
					onChange={priceInputChangeHandler}
				/>
			</FirstChildDiv>
			<SecondChildDiv>
				<FormInput
					labelName='Датa'
					id='date'
					inputType='date'
					placeholder='дд.мм.ггг'
					value={date}
					onChange={dateInputChangeHandler}
					className='dataInput'
				/>
			</SecondChildDiv>

			<DivBtnClick>
				<DivBtnCancel>
					<Button title='Отмена' onClick={cancelHandler} />
				</DivBtnCancel>
				<Button title='Сохранить' onClick={saveHandler} />
			</DivBtnClick>
		</form>
	);
};

const FirstChildDiv = styled.div`
	display: flex;
	justify-content: space-around;

	input {
		height: 30px;
		width: 25vw;
		border-radius: 10px;
		border: none;
	}
`;

const SecondChildDiv = styled.div`
	display: grid;
	margin-bottom: 10px;
	.dataInput {
		padding-top: 4px;
		height: 30px;
		width: 430px;
		border-radius: 10px;
		border: none;
	}
`;

const DivBtnClick = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: end;
`;
const DivBtnCancel = styled.div`
	width: 120px;
`;
