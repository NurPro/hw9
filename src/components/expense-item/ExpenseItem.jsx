import styled from 'styled-components';
 
export const ExpenseItem = (props) => {
	const { date, title, price } = props;

	const dateMonth = new Date(date).toLocaleString('en-En', { month: 'long' });
	const dateFullYear = new Date(date).getFullYear();
	const dateDay = new Date(date).getDate();

	return (
		<DivCon>
			<DivConList>
				<p>{dateMonth}</p>
				<p>{dateFullYear}</p>
				<p>{dateDay}</p>
			</DivConList>
			<DivConSecond>
				<h4>{title}</h4>
				<DivConSecondP>{`$ ${price}`}</DivConSecondP>
			</DivConSecond>
		</DivCon>
	);
};

const DivCon = styled.div`
	border: 1px solid;
	border-radius: 12px;
	border: none;
	padding: 5px;
	background-color: #4b4b4b;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
	margin-bottom: 20px;
`;
const DivConList = styled.div`
	margin: 8px;
	border: 1px solid;
	width: 120px;
	height: 120px;
	text-align: center;
	border-radius: 10px;
	background-color: #2a2a2a;
`;
const DivConSecond = styled.div`
	display: flex;
	gap: 25rem;
	align-items: center;
	justify-content: center;
`;

const DivConSecondP = styled.p`
	margin-right: 5rem;
	border: 1px solid violet;
	width: 90px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	border-radius: 10px;
	border: none;
	background-color: #40005d;
`;
/*

 .item-list2 > p{
    margin-right: 5rem;
    border: 1px solid violet;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    background-color:#40005D;
}

*/
