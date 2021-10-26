import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        const IsNotValidDate = (d) => {
            return isNaN(d.getTime());
        };

        if(expenseData.title === '' || expenseData.amount === '' || IsNotValidDate(expenseData.date)) {
            console.log('Error');
        } else {
            props.onAddExpense(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
    };

    return (
        <form className="form">
            <div className="expenseForm_controls">
                <div className="expenseForm_control">
                    <label>Title</label>
                    <input 
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="expenseForm_control">
                    <label>Amount</label>
                    <input 
                        type='number' min='0.01' step='0.01' 
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className="expenseForm_control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' 
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="expenseForm_actions">
                <button type='submit' onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;