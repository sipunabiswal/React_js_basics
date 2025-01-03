import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    // const[formInput,setFormInput] = useState({enteredTitle:'',enteredAmount:'',enteredDate:''});
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setFormInput({
        //     ...formInput,
        //     enteredTitle:event.target.value
        // })  
        // setFormInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value};
        // }); //This is the correct way to update state when it depends on the previous state.Reason is that react schedules state updates and does not execute them immediately.  
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setFormInput({
        //     ...formInput,
        //     enteredAmount:event.target.value
        // })
        // setFormInput((prevState)=>{
        //     return {...prevState,enteredAmount:event.target.value};
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setFormInput({
        //     ...formInput,
        //     enteredDate:event.target.value
        // });
        // setFormInput((prevState)=>{
        //     return {...prevState,enteredDate:event.target.value};
        // });
    };
    const submitHandler = (event) => {  
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        //console.log(expenseData);
        props.onSaveReceivedata(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' on>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;