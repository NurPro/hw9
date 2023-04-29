 import styled from 'styled-components';
import {Button} from "../UI/button/Button"
 import { ExpenseForm } from "../expense-form/ExpenseForm"
 import { useState } from "react";

export const NewExpense = ({onNewExpenseAdd})=>{

    const [showForm, setShowForm ] = useState(false)//1


    const showExpenseForm = ()=>{
         setShowForm((prevState)=> {
            return !prevState;
        })

    };

    console.log("RENDER");
    return(
        <NewExp>
        { showForm ? (<ExpenseForm
         onShowForm={showExpenseForm}
        onNewExpenseAdd={onNewExpenseAdd}
        />
        ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />)}
        </NewExp>
    )
 }



 const NewExp = styled.div`
		background-color: #ad9be9;
		border: 2px solid;
		border: none;
		border-radius: 18px;
		padding: 20px;
		margin-top: 30px;
  `;
