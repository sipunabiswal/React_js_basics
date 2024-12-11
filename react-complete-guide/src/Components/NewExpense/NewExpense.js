import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../Card/Card';
const NewExpense = (props) => {
    const receiveSaveddataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpensData(expenseData);
    };
return <Card className='new-expense'> 
    <ExpenseForm onSaveReceivedata={receiveSaveddataHandler}/>
</Card>
};
export default NewExpense;