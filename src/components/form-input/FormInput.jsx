// import './FormInput.css';
import styled from 'styled-components';

const FormInput = ({
	id,
	labelName,
	placeholder,
	inputType,
	onBlur,
	...rest
}) => {
	return (
		<div className='input'>
			<LabelS htmlFor={id}>{labelName}</LabelS>

			<InputS
				placeholder={placeholder || '...'}
				id={id}
				type={inputType}
				onBlur={onBlur}
				{...rest}
			/>
		</div>
	);
};
export default FormInput;

const InputS = styled.input`
	height: 30px;
	width: 25vw;
	border-radius: 10px;
	border: none;
	display: grid;
`;

const LabelS = styled.label`
	margin-bottom: 5px;
`;
