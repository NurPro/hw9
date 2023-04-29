import { useEffect, useState } from 'react';
// import './App.css';
import { Expenses } from './components/expenses/Expensis';
import { NewExpense } from './components/new-expens/Newexpense';
import { Login } from './components/login/Login';
import { Header } from './components/header/Header';
import { Users } from './components/user/User';

function App() {
	const [expenses, setExpenses] = useState([
		{
			title: 'porsh  ',
			price: '300',
			date: new Date(),
		},
		{
			title: 'Зарядник',
			price: '400',
			date: new Date(),
		},
	]);
	const [isLogin, setIsLogin] = useState(false);
	const [userPages, setUserPages] = useState(false);

	useEffect(() => {
		const local = localStorage.getItem('keyItem');
		setIsLogin(local);
	}, []);

	const userPagesHandler = () => {
		setUserPages(true);
	};

	const expensesPagesHandler = () => {
		setUserPages(false);
	};

	const loginHandler = () => {
		setIsLogin(true);
		localStorage.setItem('keyItem', !isLogin);
	};

	const logoutHandler = () => {
		setIsLogin(false);
		setUserPages(false);
		localStorage.removeItem('keyItem');
	};

	const addNewExpenseHandler = (date) => {
		const updatedExpenses = [...expenses];
		updatedExpenses.push(date);
		setExpenses(updatedExpenses);
	};

	return (
		<div>
			<Header
				isLogin={isLogin}
				logoutHandler={logoutHandler}
				userPagesHandler={userPagesHandler}
				expensesPagesHandler={expensesPagesHandler}
			/>

			{isLogin ? (
				!userPages ? (
					<>
						<NewExpense onNewExpenseAdd={addNewExpenseHandler} />
						<Expenses expenses={expenses} />
					</>
				) : (
					<Users />
				)
			) : (
				<Login loginHandler={loginHandler} />
			)}
		</div>
	);
}

export default App;
