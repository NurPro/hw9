import React from 'react'
 import styled from 'styled-components';

const ExpenseFilter = ({value, onChange}) => {
  return (
    <DivExpenseFilter>
        <DivExpenseFilterControl>
        <FilterLabel htmlFor="">Filter by year</FilterLabel>
        <FilterSelect onChange={onChange} value={value}>
           <option value="2023">2023</option>
           <option value="2022">2022</option>
           <option value="2021">2021</option>
           <option value="2020">2020</option>
        </FilterSelect>
        </DivExpenseFilterControl>
    </DivExpenseFilter>
  )
}

export default ExpenseFilter

const DivExpenseFilter = styled.div`
	color: white;
	padding: 0 1rem;
	margin-bottom: 1rem;
`;
const DivExpenseFilterControl = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;
const FilterLabel = styled.label`
	font-size: 22px;
	padding: 10px;
`;
const FilterSelect = styled.select`
	width: 100px;
	height: 36px;
	border-radius: 7px;
	text-align: center;
	font-size: 18px;
`;


/*


 .expense-filter{
    color: white;
    padding: 0 1rem;
    margin-bottom: 1rem;
} */
