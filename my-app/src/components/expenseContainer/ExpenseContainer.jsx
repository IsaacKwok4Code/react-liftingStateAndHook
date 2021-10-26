import ExpenseData from '../data/expenses';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpenseForm from '../expenseForm/ExpenseForm';
import ExpensesFilter from '../expenseFilter/ExpensesFilter';
import React, { useState } from 'react';

function ExpenseContainer() {
    // console.log(ExpenseData);
    const arrayItem = ExpenseData;
    const [expenses, setExpenses] = useState(arrayItem);
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = arrayItem.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    const listItem = filteredExpenses.length <= 0 ?
    <div>
        <h3>No expense Found</h3>
    </div> :
    filteredExpenses.map((item) => 
        <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
        /> 
    );

    const addExpenseHandler = (newExpenseData) => {
        const newArrayItem = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        setExpenses((prevExpenses) => {
            return [newArrayItem, ...prevExpenses];
        });
      };

    return (
        <div>
            <ExpenseForm onAddExpense={addExpenseHandler} />
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {listItem}
        </div>
    );
}

export default ExpenseContainer;