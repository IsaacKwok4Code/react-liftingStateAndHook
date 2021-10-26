import './ExpenseItem.css';
import DateComponent from '../date/DateComponent';
import React, { useState } from 'react';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    const [title, setTitle] = useState(expenseTitle);
    
    return (
        <div className="expenseItem">
            <DateComponent 
               propsMonth={month}
               propsDay={day}
               propsYear={year}
            />
            <div className="coverage">
                <h2 className="coverageTitle">{title}</h2>
                <div className="premium">${expenseAmount}</div>
            </div>
            {props.children}
        </div>
    );
}

export default ExpenseItem;