import React from 'react';
import './css/ExpenseItem.css';

const ExpenseHeader = (props) => {
    return (
        <div className="expense-header">
            <h3>{props.title}</h3>
        </div>
    );
}

export default ExpenseHeader;