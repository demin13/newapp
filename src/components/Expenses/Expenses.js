import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './css/Expense.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].price} />,
            <ExpenseItem title={props.items[1].title} date={props.items[1].date} price={props.items[1].price} />,
            <ExpenseItem title={props.items[2].title} date={props.items[2].date} price={props.items[2].price} />
        </Card>
    );
}

export default Expenses;